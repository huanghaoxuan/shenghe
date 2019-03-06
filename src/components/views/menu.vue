<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <MenuItem name="1-1" to="/index">
            <Icon type="md-home" />
            <span>首页</span>
          </MenuItem>
          <MenuItem name="1-2" to="/news">
            <Icon type="md-chatboxes" />
            <span>公告查看</span>
          </MenuItem>
          <MenuItem name="1-3" to="/download">
            <Icon type="md-cloud-download" />
            <span>文件下载</span>
          </MenuItem>
          <MenuItem name="1-4" to="/status">
            <Icon type="md-create" />
            <span>网上申报</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <router-view />
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>
