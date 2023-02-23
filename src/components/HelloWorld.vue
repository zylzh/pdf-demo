<template>
  <div>
    <div>
      <el-button @click="handleExport">导出为pdf</el-button>
      <el-button @click="downloadPdfPack">打包下载</el-button>
    </div>
    <div class="pdf" v-for="(item, index) in 2" :ref="getPdf(index)" :key="index">
      <h2>**信息表{{item}}</h2>
      <table class="hcp-table">
        <tr>
          <td colspan="5" class="title_td">基础信息</td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="3"></td>
          <td rowspan="5" class="img_td">
            <el-image style="height: 150px" fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
          </td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td style="width:202px"></td>
          <td style="width:130px" class="third_td left_title_td">信息名称</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td class="first_td left_title_td">信息名称</td>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td colspan="5" class="title_td">信息2</td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td></td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td></td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td></td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td class="third_td left_title_td">信息名称</td>
          <td></td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td colspan="5" class="title_td">信息3</td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td> </td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td> </td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td> </td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td> </td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2">信息名称</td>
        </tr>
        <tr>
          <td class="left_title_td">信息名称</td>
          <td>  </td>
          <td class="third_td left_title_td">信息名称</td>
          <td colspan="2">  </td>
        </tr>
        <tr>
          <td colspan="2" class="end_td">
            <div class="flex_td">
              <h1>经本人核对，以上填报信息以及所提交的本次所报考项目所有资料均为真实、准确、完整、有效，因此产生的一切后果由本人自行承担。</h1>
              <h2>本人签字并按手印：</h2>
              <h4>
                <span>年</span>
                <span>月</span>
                <span>日</span>
              </h4>

            </div>
          </td>
          <td colspan="3" class="end_td">
            <div class="flex_td">
              <h1>如有单位，请单位负责人签字或者盖公章。</h1>
              <h2>单位负责人签字并按手印：</h2>
              <h3>公章：</h3>
              <h4>
                <span>年</span>
                <span>月</span>
                <span>日</span>
              </h4>
            </div>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import { downloadPDF, downloadPdfPack } from '../utils/pdf' // 工具方法，导出操作
export default {
  name: 'Pdf',
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    getPdf(index) {
      return `pdf${index}`
    },
    handleExport() {
      downloadPDF(this.$refs.pdf0, `导出`)
    },
    downloadPdfPack() {
      downloadPdfPack([this.$refs.pdf0, this.$refs.pdf1], [{name: 'pdf1'}, {name: 'pdf2'}], '压缩包名称')
    },
  }
}
</script>
<style scoped lang="scss">
.pdf {
  width: 700px;
  padding: 10px 30px;
  color: black;
  h2 {
    text-align: center;
    margin: 10px 0 0 0;
  }
}
.flex_td {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.hcp-table {
	width: 100%;
	margin-top: 30px;
	border-spacing: 0;
	text-align: center;
	border-top: 1px solid black;
	border-left: 1px solid black;
  .first_td {
    width: 130px;
  }
  // .third_td {
  //   // width: 140px;
  // }
}
.hcp-table th {
	padding: 6px;
	border-right: 1px solid black;
	border-bottom: 1px solid black8;
}
.hcp-table td {
	padding: 6px;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
}
.img_td {
  width: 130px;
  padding: 0px !important;
}
::v-deep .el-image {
  overflow: visible;
}
::v-deep .el-dialog__header {
  padding: 0px 20px;
}
::v-deep .el-dialog__body {
  padding: 0px 20px;
}
.title_td {
  font-weight: 700;
  font-size: 16px;
}
.left_title_td {
  font-size: 13px;
  font-weight: 700;
}
.end_td {
  height: 130px;
  vertical-align: text-bottom;
  .own {
    height: 50px;
  }
  h1 {
    font-size: 14px;
    text-align: left;
    font-weight: 500;
    height: 50px;
  }
  h2 {
    font-size: 14px;
    text-align: left;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    // text-align: left;
    font-weight: 500;
  }
  h4 {
    font-size: 14px;
    font-weight: 500;
    text-align: right;
    margin: 5px;
    span {
      margin-right: 40px;
    }
  }

}
</style>
