<template>
  <div>

    <div style="width: 80%;margin-top: 25px;margin-left: 10%">
      <Table stripe
             :columns="columns"
             :data="newsInfo"
             @on-row-click="showContent"></Table>

      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="this.total"
                :page-size="10"
                @on-change="onChange"
                show-elevator></Page>
        </div>
      </div>
    </div>
    <div>
      <Drawer :closable="false"
              width="640"
              v-model="drawer.showDrawer">
        <div align="center">
          <h3>{{ drawer.title }}</h3>
          <Divider />
          <p>{{ drawer.content }}</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: { showDrawer: false, title: null, content: null },

      index: null,
      removeModal: false,
      total: null,
      newsInfo: [],
      columns: [
        {
          title: "名字",
          key: "title"
        },
        {
          title: "公告时间",
          key: "time",
          width: 200
        }
      ]
    };
  },
  mounted () {
    this.findNewsInfoListByPage(1);
    this.axios
      .get("/newsInfo/count", {
        params: {}
      })
      .then(
        function (res) {
          console.log(res.data);
          this.total = res.data;
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
        }.bind(this)
      )
      .catch(
        function (err) {
          if (err.response) {
            console.log(err.response);
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this)
      );
  },
  methods: {
    onChange (event) {
      this.findNewsInfoListByPage(event);
    },
    findNewsInfoListByPage (page) {
      this.axios
        .get("/newsInfo/List", {
          params: { page: page }
        })
        .then(
          function (res) {
            console.log(res.data);
            this.newsInfo = res.data;
            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
          }.bind(this)
        )
        .catch(
          function (err) {
            if (err.response) {
              console.log(err.response);
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this)
        );
    },
    showContent (data) {
      this.drawer.title = data.title;
      this.drawer.content = data.content;
      this.drawer.showDrawer = true;
    },
  }
};
</script>
