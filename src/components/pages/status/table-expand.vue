<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <i-Col span="8">
        <span class="expand-key">工号：</span>
        <span class="expand-value">{{ row.gonghao }}</span>
      </i-Col>
      <i-Col span="8">
        <span class="expand-key">姓名：</span>
        <span class="expand-value">{{ row.xingming }}</span>
      </i-Col>
      <i-Col span="8">
        <span class="expand-key">申报时间：</span>
        <span class="expand-value">{{ row.time }}</span>
      </i-Col>
    </Row>
    <Row>
      <i-Col span="8">
        <span class="expand-key">拟报学科ID：</span>
        <span class="expand-value">{{ row.xuekeID }}</span>
      </i-Col>
      <i-Col span="8">
        <span class="expand-key">拟报学科名字：</span>
        <span class="expand-value">{{ row.xuekeName }}</span>
      </i-Col>
      <i-Col span="8">
        <span class="expand-key">拟报职称：</span>
        <span class="expand-value">{{ row.zhicheng }}</span>
      </i-Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>
