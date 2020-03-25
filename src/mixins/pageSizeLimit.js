/*
*		使用方法:
*   引入：
*   import pageSizeLimit from '@/mixins/pageSizeLimit.js'
*   配置:
*   mixins: [pageSizeLimit],
*   模板使用：
*		<el-table-column type='index' :index='indexMethod' label="序号" />
*/

export default {
  data() {
    return {
      // 分页信息
      'pageInfo': {
        'currentPage': 1, // 当前页码
        'pageSize': 10 // 每页条数
      },
      'count': 0// 总共条数
    }
  },
  'methods': {
    indexMethod(index) {
      const { currentPage, pageSize } = this.pageInfo

      return index + 1 + (currentPage - 1) * pageSize
    }
  }
}
