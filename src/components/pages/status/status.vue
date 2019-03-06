<template>
  <div>
    <Button type="primary"
            style="margin-top: 25px"
            to="/apply">新进行申报</Button>

    <div style="width: 80%;margin-top: 25px;margin-left: 10%">
      <Table :columns="columns"
             :data="status"></Table>
      <Modal title="请确认是否进行编辑"
             v-model="updateModal"
             class-name="vertical-center-modal"
             @on-ok="update">
        <p>
          编辑后将审核状态将变为
          <font color="#ff9900">未审核</font>
          状态！
        </p>
        <p>仅支持当前年份的申报信息修改！</p>
      </Modal>
      <Modal title="请确认是否进行删除"
             v-model="removeModal"
             class-name="vertical-center-modal"
             @on-ok="remove">
        <p>
          删除后将
          <font color="#ed4014">无法恢复</font>
          ！
        </p>
        <p>仅支持当前年份的申报信息删除！</p>
      </Modal>
    </div>
  </div>
</template>
<script>
import expandRow from "./table-expand.vue";
export default {
  data () {
    return {
      index: null,
      removeModal: false,
      updateModal: false,
      year: new Date().getFullYear(),
      status: [],
      columns: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "姓名",
          key: "xingming"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "学年",
          key: "year"
        },
        {
          title: "操作",
          key: "action",
          width: 200,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.index = params.index;
                      this.updateModal = true;
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.download(params.index);
                    }
                  }
                },
                "下载报表"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.index = params.index;
                      this.removeModal = true;
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  mounted () {
    this.axios
      .get("/declare/findStatus", {
        params: {
          gonghao: this.$store.state.gonghao
        }
      })
      .then(
        function (res) {
          console.log(res.data);
          this.status = res.data;
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
    update () {
      if (this.year != this.status[this.index].year) {
        this.$Message.error("非当前年份暂不允许编辑");
      } else {
        this.$store.state.declareStatus = this.status[this.index];
        this.$router.push("/update");
      }
    },
    remove () {
      if (this.year != this.status[this.index].year) {
        this.$Message.error("非当前年份暂不允许删除");
      } else {
        this.axios
          .get("/declare/remove", {
            params: {
              ID: this.status[this.index].id
            }
          })
          .then(
            function (res) {
              console.log(res.data);
              this.$router.go(0);
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
      }
    },
    download (index) {
      const msg = this.$Message.loading({
        content: "正在连接服务器",
        duration: 0
      });
      setTimeout(msg, 3000);
      this.axios
        .get("/declare/download", {
          params: {
            gonghao: this.status[index].gonghao,
            xuekeName: this.status[index].xuekeName,
            zhicheng: this.status[index].zhicheng
          },
          responseType: "blob"
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            this.status[index].gonghao +
            "-" +
            this.status[index].xuekeName +
            "-" +
            this.status[index].zhicheng +
            ".xlsx"
          );
          document.body.appendChild(link);
          link.click();
        })
        .catch(
          function (err) {
            if (err.response) {
              console.log(err.response);
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this)
        );
    }
  }
};
</script>
