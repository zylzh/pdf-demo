import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import JSZip from 'jszip'
import FileSaver from 'file-saver'
// import store from '@/store/index'
// import axios from 'axios'

export const downloadPDF = (page, title) => {
  html2canvas(page[0], {
    dpi: window.devicePixelRatio * 4,
    scale: 4,
    useCORS: true
  }).then(function(canvas) {
    canvas2PDF(canvas, title)
  })
}

const canvas2PDF = (canvas, title) => {
  const contentWidth = canvas.width
  const contentHeight = canvas.height

  // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
  const imgWidth = 595.28
  const imgHeight = 592.28 / contentWidth * contentHeight

  // 第一个参数： l：横向  p：纵向
  // 第二个参数：测量单位（"pt"，"mm", "cm", "m", "in" or "px"）
  // eslint-disable-next-line new-cap
  const pdf = new jsPDF('p', 'pt')
  pdf.addImage(
    canvas.toDataURL('image/jpeg', 1.0),
    'JPEG',
    0,
    0,
    imgWidth,
    imgHeight
  )
  pdf.save(`${title}.pdf`)
}
export const downloadPdfPack = (page, titleArr, zipTitle) => {
  // eslint-disable-next-line prefer-const
  let arrImages = []
  for (const i in page) {
    html2canvas(page[i][0], {
      dpi: window.devicePixelRatio * 4,
      scale: 4,
      useCORS: true
    }).then(function(canvas) {
      const contentWidth = canvas.width
      const contentHeight = canvas.height
      const imgWidth = 595.28
      const imgHeight = 592.28 / contentWidth * contentHeight
      // eslint-disable-next-line new-cap
      const pdf = new jsPDF('p', 'pt')
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight
      )
      arrImages.push({
        doc: pdf,
        name: titleArr[i].name,
      })
      if (arrImages.length === page.length) {
        filesToRar(arrImages, zipTitle) // 打包
      }
    })
  }
}

function filesToRar(arrImages, zipTitle) {
  const zip = new JSZip()
  for (const item of arrImages) {
    zip.file(`${item.name}.pdf`, item.doc.output('blob')) // 逐个添加文件
  }
  zip.generateAsync({
    type: 'blob'
  }).then(content => {
    FileSaver.saveAs(content, zipTitle + '.zip') // 利用file-saver保存文件  自定义文件名
  })
}

