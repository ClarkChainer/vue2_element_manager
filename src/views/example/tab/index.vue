<template>
  <div class="tab-container">
    <!--<el-tag>表单创建次数 ：{{createdTimes}}</el-tag>-->
    <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'

export default {
  name: 'tab',
  components: { tabPane },
  data () {
    return {
      tabMapOptions: [
        { label: '选项卡1', key: 'aaa' },
        { label: '选项卡2', key: 'bbb' },
        { label: '选项卡3', key: 'ccc' },
        { label: '选项卡4', key: 'ddd' }
      ],
      activeName: 'aaa',
      createdTimes: 0
    }
  },
  methods: {
    showCreatedTimes () {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
