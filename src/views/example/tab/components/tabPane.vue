<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">

    <el-table-column align="center" label="id" width="65"  v-loading="loading"
    element-loading-text="请给我点时间！">
      <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="时间">
      <template slot-scope="scope">
        <span>{{scope.row.timestamp | dateFormat('yyyy-MM-dd hh:mm:ss')}}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="300px" label="标题">
      <template slot-scope="scope">
        <span>{{scope.row.title}}</span>
        <el-tag>{{scope.row.type}}</el-tag>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="作者">
      <template slot-scope="scope">
        <span>{{scope.row.author}}</span>
      </template>
    </el-table-column>

    <el-table-column width="120px" label="星级">
      <template slot-scope="scope">
        <svg-icon v-for="n in +scope.row.importance" icon-class="star" :key="n"></svg-icon>
      </template>
    </el-table-column>

    <el-table-column align="center" label="随机数" width="95">
      <template slot-scope="scope">
        <span>{{scope.row.pageviews}}</span>
      </template>
    </el-table-column>

    <el-table-column class-name="status-col" label="状态" width="110">
      <template slot-scope="scope">
        <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  props: {
    type: {
      type: String,
      default: 'aaa'
    }
  },
  data () {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        success: 'success',
        info: 'info',
        danger: 'danger'
      }
      return statusMap[status]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      this.$emit('create') // for test
      fetchList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.items
        this.loading = false
      })
    }
  }
}
</script>
