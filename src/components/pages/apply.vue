<template>
  <div align="center" style="margin-top: 100px">
    <Card style="width:550px">
      <Form
        ref="formDate"
        :model="formDate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <FormItem label="工号：" prop="gonghao">
          <Input
            prefix="ios-contact"
            placeholder="请输入工号"
            style="width: 400px"
            clearable
            v-model="formDate.gonghao"
          />
        </FormItem>
        <FormItem label="姓名：" prop="xingming">
          <Input
            prefix="ios-contact"
            placeholder="请输入姓名"
            style="width: 400px"
            clearable
            v-model="formDate.xingming"
          />
        </FormItem>
        <FormItem label="申报学科：" prop="xueke">
          <Cascader
            :data="xuekeData"
            trigger="hover"
            style="width: 400px"
            clearable
            filterable
            placeholder="请选择申报学科"
            v-model="formDate.xueke"
          ></Cascader>
        </FormItem>
        <FormItem label="拟报职称：" prop="zhicheng">
          <Cascader
            :data="zhichengData"
            trigger="hover"
            style="width: 400px"
            clearable
            filterable
            placeholder="请选择拟报职称"
            v-model="formDate.zhicheng"
          ></Cascader>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formDate')">提交</Button>
          <Button @click="handleReset('formDate')" style="margin-left: 100px"
            >清空</Button
          >
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formDate: {
        gonghao: null,
        xingming: null,
        xueke: [],
        zhicheng: []
      },
      xuekeData: [
        {
          value: {
            xuekeID: "01",
            xuekeName: "哲学"
          },
          label: "哲学",
          children: [
            {
              value: {
                xuekeID: "0101",
                xuekeName: "哲学"
              },
              label: "哲学",
              children: [
                {
                  value: {
                    xuekeID: "010101",
                    xuekeName: "马克思主义哲学"
                  },
                  label: "马克思主义哲学"
                },
                {
                  value: {
                    xuekeID: "010102",
                    xuekeName: "中国哲学"
                  },
                  label: "中国哲学"
                },
                {
                  value: {
                    xuekeID: "010103",
                    xuekeName: "外国哲学"
                  },
                  label: "外国哲学"
                },
                {
                  value: {
                    xuekeID: "010104",
                    xuekeName: "逻辑学"
                  },
                  label: "逻辑学"
                },
                {
                  value: {
                    xuekeID: "010105",
                    xuekeName: "伦理学"
                  },
                  label: "伦理学"
                },
                {
                  value: {
                    xuekeID: "010106",
                    xuekeName: "美学"
                  },
                  label: "美学"
                },
                {
                  value: {
                    xuekeID: "010107",
                    xuekeName: "宗教学"
                  },
                  label: "宗教学"
                },
                {
                  value: {
                    xuekeID: "010108",
                    xuekeName: "科学技术学"
                  },
                  label: "科学技术学"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "02",
            xuekeName: "经济学"
          },
          label: "经济学",
          children: [
            {
              value: {
                xuekeID: "0201",
                xuekeName: "理论经济学"
              },
              label: "理论经济学",
              children: [
                {
                  value: {
                    xuekeID: "020101",
                    xuekeName: "政治经济学"
                  },
                  label: "政治经济学"
                },
                {
                  value: {
                    xuekeID: "020102",
                    xuekeName: "经济思想史"
                  },
                  label: "经济思想史"
                },
                {
                  value: {
                    xuekeID: "020103",
                    xuekeName: "经济史"
                  },
                  label: "经济史"
                },
                {
                  value: {
                    xuekeID: "020104",
                    xuekeName: "西方经济学"
                  },
                  label: "西方经济学"
                },
                {
                  value: {
                    xuekeID: "020105",
                    xuekeName: "世界经济"
                  },
                  label: "世界经济"
                },
                {
                  value: {
                    xuekeID: "020106",
                    xuekeName: "人口、资源与环境经济学"
                  },
                  label: "人口、资源与环境经济学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0202",
                xuekeName: "应用经济学"
              },
              label: "应用经济学",
              children: [
                {
                  value: {
                    xuekeID: "020201",
                    xuekeName: "国民经济学"
                  },
                  label: "国民经济学"
                },
                {
                  value: {
                    xuekeID: "020202",
                    xuekeName: "区域经济学"
                  },
                  label: "区域经济学"
                },
                {
                  value: {
                    xuekeID: "020203",
                    xuekeName: "财政学（含：税收学）"
                  },
                  label: "财政学（含：税收学）"
                },
                {
                  value: {
                    xuekeID: "020204",
                    xuekeName: "金融学（含：保险学）"
                  },
                  label: "金融学（含：保险学）"
                },
                {
                  value: {
                    xuekeID: "020205",
                    xuekeName: "产业经济学"
                  },
                  label: "产业经济学"
                },
                {
                  value: {
                    xuekeID: "020206",
                    xuekeName: "国际贸易学"
                  },
                  label: "国际贸易学"
                },
                {
                  value: {
                    xuekeID: "020207",
                    xuekeName: "劳动经济学"
                  },
                  label: "劳动经济学"
                },
                {
                  value: {
                    xuekeID: "020208",
                    xuekeName: "统计学"
                  },
                  label: "统计学"
                },
                {
                  value: {
                    xuekeID: "020209",
                    xuekeName: "数量经济学"
                  },
                  label: "数量经济学"
                },
                {
                  value: {
                    xuekeID: "020210",
                    xuekeName: "国防经济"
                  },
                  label: "国防经济"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "03",
            xuekeName: "法学"
          },
          label: "法学",
          children: [
            {
              value: {
                xuekeID: "0301",
                xuekeName: "法学"
              },
              label: "法学",
              children: [
                {
                  value: {
                    xuekeID: "030101",
                    xuekeName: "法学理论"
                  },
                  label: "法学理论"
                },
                {
                  value: {
                    xuekeID: "030102",
                    xuekeName: "法律史"
                  },
                  label: "法律史"
                },
                {
                  value: {
                    xuekeID: "030103",
                    xuekeName: "宪法学与行政法学"
                  },
                  label: "宪法学与行政法学"
                },
                {
                  value: {
                    xuekeID: "030104",
                    xuekeName: "刑法学"
                  },
                  label: "刑法学"
                },
                {
                  value: {
                    xuekeID: "030105",
                    xuekeName: "民商法学(含：劳动法学、社会保障法学)"
                  },
                  label: "民商法学(含：劳动法学、社会保障法学)"
                },
                {
                  value: {
                    xuekeID: "030106",
                    xuekeName: "诉讼法学"
                  },
                  label: "诉讼法学"
                },
                {
                  value: {
                    xuekeID: "030107",
                    xuekeName: "经济法学"
                  },
                  label: "经济法学"
                },
                {
                  value: {
                    xuekeID: "030108",
                    xuekeName: "环境与资源保护法学"
                  },
                  label: "环境与资源保护法学"
                },
                {
                  value: {
                    xuekeID: "030109",
                    xuekeName: "国际法学(含：国际公法、国际私法、国际经济法)"
                  },
                  label: "国际法学(含：国际公法、国际私法、国际经济法)"
                },
                {
                  value: {
                    xuekeID: "030110",
                    xuekeName: "军事法学"
                  },
                  label: "军事法学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0302",
                xuekeName: "政治学"
              },
              label: "政治学",
              children: [
                {
                  value: {
                    xuekeID: "030201",
                    xuekeName: "政治学理论"
                  },
                  label: "政治学理论"
                },
                {
                  value: {
                    xuekeID: "030202",
                    xuekeName: "中外政治制度"
                  },
                  label: "中外政治制度"
                },
                {
                  value: {
                    xuekeID: "030203",
                    xuekeName: "科学社会主义与国际共产主义运动"
                  },
                  label: "科学社会主义与国际共产主义运动"
                },
                {
                  value: {
                    xuekeID: "030204",
                    xuekeName: "中共党史(含：党的学说与党的建设)"
                  },
                  label: "中共党史(含：党的学说与党的建设)"
                },
                {
                  value: {
                    xuekeID: "030206",
                    xuekeName: "国际政治"
                  },
                  label: "国际政治"
                },
                {
                  value: {
                    xuekeID: "030207",
                    xuekeName: "国际关系"
                  },
                  label: "国际关系"
                },
                {
                  value: {
                    xuekeID: "030208",
                    xuekeName: "外交学"
                  },
                  label: "外交学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0303",
                xuekeName: "社会学"
              },
              label: "社会学",
              children: [
                {
                  value: {
                    xuekeID: "030301",
                    xuekeName: "社会学"
                  },
                  label: "社会学"
                },
                {
                  value: {
                    xuekeID: "030302",
                    xuekeName: "人口学"
                  },
                  label: "人口学"
                },
                {
                  value: {
                    xuekeID: "030303",
                    xuekeName: "人类学"
                  },
                  label: "人类学"
                },
                {
                  value: {
                    xuekeID: "030304",
                    xuekeName: "民俗学（含：中国民间文学）"
                  },
                  label: "民俗学（含：中国民间文学）"
                }
              ]
            },
            {
              value: {
                xuekeID: "0304",
                xuekeName: "民族学"
              },
              label: "民族学",
              children: [
                {
                  value: {
                    xuekeID: "030401",
                    xuekeName: "民族学"
                  },
                  label: "民族学"
                },
                {
                  value: {
                    xuekeID: "030402",
                    xuekeName: "马克思主义民族理论与政策"
                  },
                  label: "马克思主义民族理论与政策"
                },
                {
                  value: {
                    xuekeID: "030403",
                    xuekeName: "中国少数民族经济"
                  },
                  label: "中国少数民族经济"
                },
                {
                  value: {
                    xuekeID: "030404",
                    xuekeName: "中国少数民族史"
                  },
                  label: "中国少数民族史"
                },
                {
                  value: {
                    xuekeID: "030405",
                    xuekeName: "中国少数民族艺术"
                  },
                  label: "中国少数民族艺术"
                }
              ]
            },
            {
              value: {
                xuekeID: "0305",
                xuekeName: "马克思主义理论"
              },
              label: "马克思主义理论",
              children: [
                {
                  value: {
                    xuekeID: "030501",
                    xuekeName: "马克思主义基本原理"
                  },
                  label: "马克思主义基本原理"
                },
                {
                  value: {
                    xuekeID: "030502",
                    xuekeName: "马克思主义发展史"
                  },
                  label: "马克思主义发展史"
                },
                {
                  value: {
                    xuekeID: "030503",
                    xuekeName: "马克思主义中国化研究"
                  },
                  label: "马克思主义中国化研究"
                },
                {
                  value: {
                    xuekeID: "030504",
                    xuekeName: "国外马克思主义研究"
                  },
                  label: "国外马克思主义研究"
                },
                {
                  value: {
                    xuekeID: "030505",
                    xuekeName: "思想政治教育"
                  },
                  label: "思想政治教育"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "04",
            xuekeName: "教育学"
          },
          label: "教育学",
          children: [
            {
              value: {
                xuekeID: "0401",
                xuekeName: "教育学"
              },
              label: "教育学",
              children: [
                {
                  value: {
                    xuekeID: "040101",
                    xuekeName: "教育学原理"
                  },
                  label: "教育学原理"
                },
                {
                  value: {
                    xuekeID: "040102",
                    xuekeName: "课程与教学论"
                  },
                  label: "课程与教学论"
                },
                {
                  value: {
                    xuekeID: "040103",
                    xuekeName: "教育史"
                  },
                  label: "教育史"
                },
                {
                  value: {
                    xuekeID: "040104",
                    xuekeName: "比较教育学"
                  },
                  label: "比较教育学"
                },
                {
                  value: {
                    xuekeID: "040105",
                    xuekeName: "学前教育学"
                  },
                  label: "学前教育学"
                },
                {
                  value: {
                    xuekeID: "040106",
                    xuekeName: "高等教育学"
                  },
                  label: "高等教育学"
                },
                {
                  value: {
                    xuekeID: "040107",
                    xuekeName: "成人教育学"
                  },
                  label: "成人教育学"
                },
                {
                  value: {
                    xuekeID: "040108",
                    xuekeName: "职业技术教育学"
                  },
                  label: "职业技术教育学"
                },
                {
                  value: {
                    xuekeID: "040109",
                    xuekeName: "特殊教育学"
                  },
                  label: "特殊教育学"
                },
                {
                  value: {
                    xuekeID: "040110",
                    xuekeName: "教育技术学（可授教育学、理学学位）"
                  },
                  label: "教育技术学（可授教育学、理学学位）"
                }
              ]
            },
            {
              value: {
                xuekeID: "0402",
                xuekeName: "心理学(可授教育学、理学学位）"
              },
              label: "心理学(可授教育学、理学学位）",
              children: [
                {
                  value: {
                    xuekeID: "040201",
                    xuekeName: "基础心理学"
                  },
                  label: "基础心理学"
                },
                {
                  value: {
                    xuekeID: "040202",
                    xuekeName: "发展与教育心理学"
                  },
                  label: "发展与教育心理学"
                },
                {
                  value: {
                    xuekeID: "040203",
                    xuekeName: "应用心理学"
                  },
                  label: "应用心理学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0403",
                xuekeName: "体育学"
              },
              label: "体育学",
              children: [
                {
                  value: {
                    xuekeID: "040301",
                    xuekeName: "体育人文社会学"
                  },
                  label: "体育人文社会学"
                },
                {
                  value: {
                    xuekeID: "040302",
                    xuekeName: "运动人体科学(可授教育学、理学、医学学位)"
                  },
                  label: "运动人体科学(可授教育学、理学、医学学位)"
                },
                {
                  value: {
                    xuekeID: "040303",
                    xuekeName: "体育教育训练学"
                  },
                  label: "体育教育训练学"
                },
                {
                  value: {
                    xuekeID: "040304",
                    xuekeName: "民族传统体育学"
                  },
                  label: "民族传统体育学"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "05",
            xuekeName: "文学"
          },
          label: "文学",
          children: [
            {
              value: {
                xuekeID: "0501",
                xuekeName: "中国语言文学"
              },
              label: "中国语言文学",
              children: [
                {
                  value: {
                    xuekeID: "050101",
                    xuekeName: "文艺学"
                  },
                  label: "文艺学"
                },
                {
                  value: {
                    xuekeID: "050102",
                    xuekeName: "语言学及应用语言学"
                  },
                  label: "语言学及应用语言学"
                },
                {
                  value: {
                    xuekeID: "050103",
                    xuekeName: "汉语言文字学"
                  },
                  label: "汉语言文字学"
                },
                {
                  value: {
                    xuekeID: "050104",
                    xuekeName: "中国古典文献学"
                  },
                  label: "中国古典文献学"
                },
                {
                  value: {
                    xuekeID: "050105",
                    xuekeName: "中国古代文学"
                  },
                  label: "中国古代文学"
                },
                {
                  value: {
                    xuekeID: "050106",
                    xuekeName: "中国现当代文学"
                  },
                  label: "中国现当代文学"
                },
                {
                  value: {
                    xuekeID: "050107",
                    xuekeName: "中国少数民族语言文学（分语族）"
                  },
                  label: "中国少数民族语言文学（分语族）"
                },
                {
                  value: {
                    xuekeID: "050108",
                    xuekeName: "比较文学与世界文学"
                  },
                  label: "比较文学与世界文学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0502",
                xuekeName: "外国语言文学"
              },
              label: "外国语言文学",
              children: [
                {
                  value: {
                    xuekeID: "050201",
                    xuekeName: "英语语言文学"
                  },
                  label: "英语语言文学"
                },
                {
                  value: {
                    xuekeID: "050202",
                    xuekeName: "俄语语言文学"
                  },
                  label: "俄语语言文学"
                },
                {
                  value: {
                    xuekeID: "050203",
                    xuekeName: "法语语言文学"
                  },
                  label: "法语语言文学"
                },
                {
                  value: {
                    xuekeID: "050204",
                    xuekeName: "德语语言文学"
                  },
                  label: "德语语言文学"
                },
                {
                  value: {
                    xuekeID: "050205",
                    xuekeName: "日语语言文学"
                  },
                  label: "日语语言文学"
                },
                {
                  value: {
                    xuekeID: "050206",
                    xuekeName: "印度语言文学"
                  },
                  label: "印度语言文学"
                },
                {
                  value: {
                    xuekeID: "050207",
                    xuekeName: "西班牙语语言文学"
                  },
                  label: "西班牙语语言文学"
                },
                {
                  value: {
                    xuekeID: "050208",
                    xuekeName: "阿拉伯语语言文学"
                  },
                  label: "阿拉伯语语言文学"
                },
                {
                  value: {
                    xuekeID: "050209",
                    xuekeName: "欧洲语言文学"
                  },
                  label: "欧洲语言文学"
                },
                {
                  value: {
                    xuekeID: "050210",
                    xuekeName: "亚非语言文学"
                  },
                  label: "亚非语言文学"
                },
                {
                  value: {
                    xuekeID: "050211",
                    xuekeName: "外国语言学及应用语言学"
                  },
                  label: "外国语言学及应用语言学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0503",
                xuekeName: "新闻传播学"
              },
              label: "新闻传播学",
              children: [
                {
                  value: {
                    xuekeID: "050301",
                    xuekeName: "新闻学"
                  },
                  label: "新闻学"
                },
                {
                  value: {
                    xuekeID: "050302",
                    xuekeName: "传播学"
                  },
                  label: "传播学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0504",
                xuekeName: "艺术学"
              },
              label: "艺术学",
              children: [
                {
                  value: {
                    xuekeID: "050401",
                    xuekeName: "艺术学"
                  },
                  label: "艺术学"
                },
                {
                  value: {
                    xuekeID: "050402",
                    xuekeName: "音乐学"
                  },
                  label: "音乐学"
                },
                {
                  value: {
                    xuekeID: "050403",
                    xuekeName: "美术学"
                  },
                  label: "美术学"
                },
                {
                  value: {
                    xuekeID: "050404",
                    xuekeName: "设计艺术学"
                  },
                  label: "设计艺术学"
                },
                {
                  value: {
                    xuekeID: "050405",
                    xuekeName: "戏剧戏曲学"
                  },
                  label: "戏剧戏曲学"
                },
                {
                  value: {
                    xuekeID: "050406",
                    xuekeName: "电影学"
                  },
                  label: "电影学"
                },
                {
                  value: {
                    xuekeID: "050407",
                    xuekeName: "广播电视艺术学"
                  },
                  label: "广播电视艺术学"
                },
                {
                  value: {
                    xuekeID: "050408",
                    xuekeName: "舞蹈学"
                  },
                  label: "舞蹈学"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "06",
            xuekeName: "历史学"
          },
          label: "历史学",
          children: [
            {
              value: {
                xuekeID: "0601",
                xuekeName: "历史学"
              },
              label: "历史学",
              children: [
                {
                  value: {
                    xuekeID: "060101",
                    xuekeName: "史学理论及史学史"
                  },
                  label: "史学理论及史学史"
                },
                {
                  value: {
                    xuekeID: "060102",
                    xuekeName: "考古学及博物馆学"
                  },
                  label: "考古学及博物馆学"
                },
                {
                  value: {
                    xuekeID: "060103",
                    xuekeName: "历史地理学"
                  },
                  label: "历史地理学"
                },
                {
                  value: {
                    xuekeID: "060104",
                    xuekeName: "历史文献学(含∶敦煌学、古文字学)"
                  },
                  label: "历史文献学(含∶敦煌学、古文字学)"
                },
                {
                  value: {
                    xuekeID: "060105",
                    xuekeName: "专门史"
                  },
                  label: "专门史"
                },
                {
                  value: {
                    xuekeID: "060106",
                    xuekeName: "中国古代史"
                  },
                  label: "中国古代史"
                },
                {
                  value: {
                    xuekeID: "060107",
                    xuekeName: "中国近现代史"
                  },
                  label: "中国近现代史"
                },
                {
                  value: {
                    xuekeID: "060108",
                    xuekeName: "世界史"
                  },
                  label: "世界史"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "07",
            xuekeName: "理学"
          },
          label: "理学",
          children: [
            {
              value: {
                xuekeID: "0701",
                xuekeName: "数学"
              },
              label: "数学",
              children: [
                {
                  value: {
                    xuekeID: "070101",
                    xuekeName: "基础数学"
                  },
                  label: "基础数学"
                },
                {
                  value: {
                    xuekeID: "070102",
                    xuekeName: "计算数学"
                  },
                  label: "计算数学"
                },
                {
                  value: {
                    xuekeID: "070103",
                    xuekeName: "概率论与数理统计"
                  },
                  label: "概率论与数理统计"
                },
                {
                  value: {
                    xuekeID: "070104",
                    xuekeName: "应用数学"
                  },
                  label: "应用数学"
                },
                {
                  value: {
                    xuekeID: "070105",
                    xuekeName: "运筹学与控制论"
                  },
                  label: "运筹学与控制论"
                }
              ]
            },
            {
              value: {
                xuekeID: "0702",
                xuekeName: "物理学"
              },
              label: "物理学",
              children: [
                {
                  value: {
                    xuekeID: "070201",
                    xuekeName: "理论物理"
                  },
                  label: "理论物理"
                },
                {
                  value: {
                    xuekeID: "070202",
                    xuekeName: "粒子物理与原子核物理"
                  },
                  label: "粒子物理与原子核物理"
                },
                {
                  value: {
                    xuekeID: "070203",
                    xuekeName: "原子与分子物理"
                  },
                  label: "原子与分子物理"
                },
                {
                  value: {
                    xuekeID: "070204",
                    xuekeName: "等离子体物理"
                  },
                  label: "等离子体物理"
                },
                {
                  value: {
                    xuekeID: "070205",
                    xuekeName: "凝聚态物理"
                  },
                  label: "凝聚态物理"
                },
                {
                  value: {
                    xuekeID: "070206",
                    xuekeName: "声学"
                  },
                  label: "声学"
                },
                {
                  value: {
                    xuekeID: "070207",
                    xuekeName: "光学"
                  },
                  label: "光学"
                },
                {
                  value: {
                    xuekeID: "070208",
                    xuekeName: "无线电物理"
                  },
                  label: "无线电物理"
                }
              ]
            },
            {
              value: {
                xuekeID: "0703",
                xuekeName: "化学"
              },
              label: "化学",
              children: [
                {
                  value: {
                    xuekeID: "070301",
                    xuekeName: "无机化学"
                  },
                  label: "无机化学"
                },
                {
                  value: {
                    xuekeID: "070302",
                    xuekeName: "分析化学"
                  },
                  label: "分析化学"
                },
                {
                  value: {
                    xuekeID: "070303",
                    xuekeName: "有机化学"
                  },
                  label: "有机化学"
                },
                {
                  value: {
                    xuekeID: "070304",
                    xuekeName: "物理化学(含∶化学物理)"
                  },
                  label: "物理化学(含∶化学物理)"
                },
                {
                  value: {
                    xuekeID: "070305",
                    xuekeName: "高分子化学与物理"
                  },
                  label: "高分子化学与物理"
                }
              ]
            },
            {
              value: {
                xuekeID: "0704",
                xuekeName: "天文学"
              },
              label: "天文学",
              children: [
                {
                  value: {
                    xuekeID: "070401",
                    xuekeName: "天体物理"
                  },
                  label: "天体物理"
                },
                {
                  value: {
                    xuekeID: "070402",
                    xuekeName: "天体测量与天体力学"
                  },
                  label: "天体测量与天体力学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0705",
                xuekeName: "地理学"
              },
              label: "地理学",
              children: [
                {
                  value: {
                    xuekeID: "070501",
                    xuekeName: "自然地理学"
                  },
                  label: "自然地理学"
                },
                {
                  value: {
                    xuekeID: "070502",
                    xuekeName: "人文地理学"
                  },
                  label: "人文地理学"
                },
                {
                  value: {
                    xuekeID: "070503",
                    xuekeName: "地图学与地理信息系统"
                  },
                  label: "地图学与地理信息系统"
                }
              ]
            },
            {
              value: {
                xuekeID: "0706",
                xuekeName: "大气科学"
              },
              label: "大气科学",
              children: [
                {
                  value: {
                    xuekeID: "070601",
                    xuekeName: "气象学"
                  },
                  label: "气象学"
                },
                {
                  value: {
                    xuekeID: "070602",
                    xuekeName: "大气物理学与大气环境"
                  },
                  label: "大气物理学与大气环境"
                }
              ]
            },
            {
              value: {
                xuekeID: "0707",
                xuekeName: "海洋科学"
              },
              label: "海洋科学",
              children: [
                {
                  value: {
                    xuekeID: "070701",
                    xuekeName: "物理海洋学"
                  },
                  label: "物理海洋学"
                },
                {
                  value: {
                    xuekeID: "070702",
                    xuekeName: "海洋化学"
                  },
                  label: "海洋化学"
                },
                {
                  value: {
                    xuekeID: "070703",
                    xuekeName: "海洋生物学"
                  },
                  label: "海洋生物学"
                },
                {
                  value: {
                    xuekeID: "070704",
                    xuekeName: "海洋地质"
                  },
                  label: "海洋地质"
                }
              ]
            },
            {
              value: {
                xuekeID: "0708",
                xuekeName: "地球物理学"
              },
              label: "地球物理学",
              children: [
                {
                  value: {
                    xuekeID: "070801",
                    xuekeName: "固体地球物理学"
                  },
                  label: "固体地球物理学"
                },
                {
                  value: {
                    xuekeID: "070802",
                    xuekeName: "空间物理学"
                  },
                  label: "空间物理学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0709",
                xuekeName: "地质学"
              },
              label: "地质学",
              children: [
                {
                  value: {
                    xuekeID: "070901",
                    xuekeName: "矿物学、岩石学、矿床学"
                  },
                  label: "矿物学、岩石学、矿床学"
                },
                {
                  value: {
                    xuekeID: "070902",
                    xuekeName: "地球化学"
                  },
                  label: "地球化学"
                },
                {
                  value: {
                    xuekeID: "070903",
                    xuekeName: "古生物学与地层学(含：古人类学)"
                  },
                  label: "古生物学与地层学(含：古人类学)"
                },
                {
                  value: {
                    xuekeID: "070904",
                    xuekeName: "构造地质学"
                  },
                  label: "构造地质学"
                },
                {
                  value: {
                    xuekeID: "070905",
                    xuekeName: "第四纪地质学"
                  },
                  label: "第四纪地质学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0710",
                xuekeName: "生物学"
              },
              label: "生物学",
              children: [
                {
                  value: {
                    xuekeID: "071001",
                    xuekeName: "植物学"
                  },
                  label: "植物学"
                },
                {
                  value: {
                    xuekeID: "071002",
                    xuekeName: "动物学"
                  },
                  label: "动物学"
                },
                {
                  value: {
                    xuekeID: "071003",
                    xuekeName: "生理学"
                  },
                  label: "生理学"
                },
                {
                  value: {
                    xuekeID: "071004",
                    xuekeName: "水生生物学"
                  },
                  label: "水生生物学"
                },
                {
                  value: {
                    xuekeID: "071005",
                    xuekeName: "微生物学"
                  },
                  label: "微生物学"
                },
                {
                  value: {
                    xuekeID: "071006",
                    xuekeName: "神经生物学"
                  },
                  label: "神经生物学"
                },
                {
                  value: {
                    xuekeID: "071007",
                    xuekeName: "遗传学"
                  },
                  label: "遗传学"
                },
                {
                  value: {
                    xuekeID: "071008",
                    xuekeName: "发育生物学"
                  },
                  label: "发育生物学"
                },
                {
                  value: {
                    xuekeID: "071009",
                    xuekeName: "细胞生物学"
                  },
                  label: "细胞生物学"
                },
                {
                  value: {
                    xuekeID: "071010",
                    xuekeName: "生物化学与分子生物学"
                  },
                  label: "生物化学与分子生物学"
                },
                {
                  value: {
                    xuekeID: "071011",
                    xuekeName: "生物物理学"
                  },
                  label: "生物物理学"
                },
                {
                  value: {
                    xuekeID: "071012",
                    xuekeName: "生态学"
                  },
                  label: "生态学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0711",
                xuekeName: "系统科学"
              },
              label: "系统科学",
              children: [
                {
                  value: {
                    xuekeID: "071101",
                    xuekeName: "系统理论"
                  },
                  label: "系统理论"
                },
                {
                  value: {
                    xuekeID: "071102",
                    xuekeName: "系统分析与集成"
                  },
                  label: "系统分析与集成"
                }
              ]
            },
            {
              value: {
                xuekeID: "0712",
                xuekeName: "科学技术史(分学科，可授理学、工学、农学、医学学位)"
              },
              label: "科学技术史(分学科，可授理学、工学、农学、医学学位)"
            }
          ]
        },
        {
          value: {
            xuekeID: "08",
            xuekeName: "工学"
          },
          label: "工学",
          children: [
            {
              value: {
                xuekeID: "0801",
                xuekeName: "力学（可授工学、理学学位）"
              },
              label: "力学（可授工学、理学学位）",
              children: [
                {
                  value: {
                    xuekeID: "080101",
                    xuekeName: "一般力学与力学基础"
                  },
                  label: "一般力学与力学基础"
                },
                {
                  value: {
                    xuekeID: "080102",
                    xuekeName: "固体力学"
                  },
                  label: "固体力学"
                },
                {
                  value: {
                    xuekeID: "080103",
                    xuekeName: "流体力学"
                  },
                  label: "流体力学"
                },
                {
                  value: {
                    xuekeID: "080104",
                    xuekeName: "工程力学"
                  },
                  label: "工程力学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0802",
                xuekeName: "机械工程"
              },
              label: "机械工程",
              children: [
                {
                  value: {
                    xuekeID: "080201",
                    xuekeName: "机械制造及其自动化"
                  },
                  label: "机械制造及其自动化"
                },
                {
                  value: {
                    xuekeID: "080202",
                    xuekeName: "机械电子工程"
                  },
                  label: "机械电子工程"
                },
                {
                  value: {
                    xuekeID: "080203",
                    xuekeName: "机械设计及理论"
                  },
                  label: "机械设计及理论"
                },
                {
                  value: {
                    xuekeID: "080204",
                    xuekeName: "车辆工程"
                  },
                  label: "车辆工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0803",
                xuekeName: "光学工程"
              },
              label: "光学工程"
            },
            {
              value: {
                xuekeID: "0804",
                xuekeName: "仪器科学与技术"
              },
              label: "仪器科学与技术",
              children: [
                {
                  value: {
                    xuekeID: "080401",
                    xuekeName: "精密仪器及机械"
                  },
                  label: "精密仪器及机械"
                },
                {
                  value: {
                    xuekeID: "080402",
                    xuekeName: "测试计量技术及仪器"
                  },
                  label: "测试计量技术及仪器"
                }
              ]
            },
            {
              value: {
                xuekeID: "0805",
                xuekeName: "材料科学与工程"
              },
              label: "材料科学与工程",
              children: [
                {
                  value: {
                    xuekeID: "080501",
                    xuekeName: "材料物理与化学"
                  },
                  label: "材料物理与化学"
                },
                {
                  value: {
                    xuekeID: "080502",
                    xuekeName: "材料学"
                  },
                  label: "材料学"
                },
                {
                  value: {
                    xuekeID: "080503",
                    xuekeName: "材料加工工程"
                  },
                  label: "材料加工工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0806",
                xuekeName: "冶金工程"
              },
              label: "冶金工程",
              children: [
                {
                  value: {
                    xuekeID: "080601",
                    xuekeName: "冶金物理化学"
                  },
                  label: "冶金物理化学"
                },
                {
                  value: {
                    xuekeID: "080602",
                    xuekeName: "钢铁冶金"
                  },
                  label: "钢铁冶金"
                },
                {
                  value: {
                    xuekeID: "080603",
                    xuekeName: "有色金属冶金"
                  },
                  label: "有色金属冶金"
                }
              ]
            },
            {
              value: {
                xuekeID: "0807",
                xuekeName: "动力工程及工程热物理"
              },
              label: "动力工程及工程热物理",
              children: [
                {
                  value: {
                    xuekeID: "080701",
                    xuekeName: "工程热物理"
                  },
                  label: "工程热物理"
                },
                {
                  value: {
                    xuekeID: "080702",
                    xuekeName: "热能工程"
                  },
                  label: "热能工程"
                },
                {
                  value: {
                    xuekeID: "080703",
                    xuekeName: "动力机械及工程"
                  },
                  label: "动力机械及工程"
                },
                {
                  value: {
                    xuekeID: "080704",
                    xuekeName: "流体机械及工程"
                  },
                  label: "流体机械及工程"
                },
                {
                  value: {
                    xuekeID: "080705",
                    xuekeName: "制冷及低温工程"
                  },
                  label: "制冷及低温工程"
                },
                {
                  value: {
                    xuekeID: "080706",
                    xuekeName: "化工过程机械"
                  },
                  label: "化工过程机械"
                }
              ]
            },
            {
              value: {
                xuekeID: "0808",
                xuekeName: "电气工程"
              },
              label: "电气工程",
              children: [
                {
                  value: {
                    xuekeID: "080801",
                    xuekeName: "电机与电器"
                  },
                  label: "电机与电器"
                },
                {
                  value: {
                    xuekeID: "080802",
                    xuekeName: "电力系统及其自动化"
                  },
                  label: "电力系统及其自动化"
                },
                {
                  value: {
                    xuekeID: "080803",
                    xuekeName: "高电压与绝缘技术"
                  },
                  label: "高电压与绝缘技术"
                },
                {
                  value: {
                    xuekeID: "080804",
                    xuekeName: "电力电子与电力传动"
                  },
                  label: "电力电子与电力传动"
                },
                {
                  value: {
                    xuekeID: "080805",
                    xuekeName: "电工理论与新技术"
                  },
                  label: "电工理论与新技术"
                }
              ]
            },
            {
              value: {
                xuekeID: "0809",
                xuekeName: "电子科学与技术（可授工学、理学学位）"
              },
              label: "电子科学与技术（可授工学、理学学位）",
              children: [
                {
                  value: {
                    xuekeID: "080901",
                    xuekeName: "物理电子学"
                  },
                  label: "物理电子学"
                },
                {
                  value: {
                    xuekeID: "080902",
                    xuekeName: "电路与系统"
                  },
                  label: "电路与系统"
                },
                {
                  value: {
                    xuekeID: "080903",
                    xuekeName: "微电子学与固体电子学"
                  },
                  label: "微电子学与固体电子学"
                },
                {
                  value: {
                    xuekeID: "080904",
                    xuekeName: "电磁场与微波技术"
                  },
                  label: "电磁场与微波技术"
                }
              ]
            },
            {
              value: {
                xuekeID: "0810",
                xuekeName: "信息与通信工程"
              },
              label: "信息与通信工程",
              children: [
                {
                  value: {
                    xuekeID: "081001",
                    xuekeName: "通信与信息系统"
                  },
                  label: "通信与信息系统"
                },
                {
                  value: {
                    xuekeID: "081002",
                    xuekeName: "信号与信息处理"
                  },
                  label: "信号与信息处理"
                }
              ]
            },
            {
              value: {
                xuekeID: "0811",
                xuekeName: "控制科学与工程"
              },
              label: "控制科学与工程",
              children: [
                {
                  value: {
                    xuekeID: "081101",
                    xuekeName: "控制理论与控制工程"
                  },
                  label: "控制理论与控制工程"
                },
                {
                  value: {
                    xuekeID: "081102",
                    xuekeName: "检测技术与自动化装置"
                  },
                  label: "检测技术与自动化装置"
                },
                {
                  value: {
                    xuekeID: "081103",
                    xuekeName: "系统工程"
                  },
                  label: "系统工程"
                },
                {
                  value: {
                    xuekeID: "081104",
                    xuekeName: "模式识别与智能系统"
                  },
                  label: "模式识别与智能系统"
                },
                {
                  value: {
                    xuekeID: "081105",
                    xuekeName: "导航、制导与控制"
                  },
                  label: "导航、制导与控制"
                }
              ]
            },
            {
              value: {
                xuekeID: "0812",
                xuekeName: "计算机科学与技术（可授工学、理学学位）"
              },
              label: "计算机科学与技术（可授工学、理学学位）",
              children: [
                {
                  value: {
                    xuekeID: "081201",
                    xuekeName: "计算机系统结构"
                  },
                  label: "计算机系统结构"
                },
                {
                  value: {
                    xuekeID: "081202",
                    xuekeName: "计算机软件与理论"
                  },
                  label: "计算机软件与理论"
                },
                {
                  value: {
                    xuekeID: "081203",
                    xuekeName: "计算机应用技术"
                  },
                  label: "计算机应用技术"
                }
              ]
            },
            {
              value: {
                xuekeID: "0813",
                xuekeName: "建筑学"
              },
              label: "建筑学",
              children: [
                {
                  value: {
                    xuekeID: "081301",
                    xuekeName: "建筑历史与理论"
                  },
                  label: "建筑历史与理论"
                },
                {
                  value: {
                    xuekeID: "081302",
                    xuekeName: "建筑设计及其理论"
                  },
                  label: "建筑设计及其理论"
                },
                {
                  value: {
                    xuekeID: "081303",
                    xuekeName: "城市规划与设计(含：风景园林规划与设计）"
                  },
                  label: "城市规划与设计(含：风景园林规划与设计）"
                },
                {
                  value: {
                    xuekeID: "081304",
                    xuekeName: "建筑技术科学"
                  },
                  label: "建筑技术科学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0814",
                xuekeName: "土木工程"
              },
              label: "土木工程",
              children: [
                {
                  value: {
                    xuekeID: "081401",
                    xuekeName: "岩土工程"
                  },
                  label: "岩土工程"
                },
                {
                  value: {
                    xuekeID: "081402",
                    xuekeName: "结构工程"
                  },
                  label: "结构工程"
                },
                {
                  value: {
                    xuekeID: "081403",
                    xuekeName: "市政工程"
                  },
                  label: "市政工程"
                },
                {
                  value: {
                    xuekeID: "081404",
                    xuekeName: "供热、供燃气、通风及空调工程"
                  },
                  label: "供热、供燃气、通风及空调工程"
                },
                {
                  value: {
                    xuekeID: "081405",
                    xuekeName: "防灾减灾工程及防护工程"
                  },
                  label: "防灾减灾工程及防护工程"
                },
                {
                  value: {
                    xuekeID: "081406",
                    xuekeName: "桥梁与隧道工程"
                  },
                  label: "桥梁与隧道工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0815",
                xuekeName: "水利工程"
              },
              label: "水利工程",
              children: [
                {
                  value: {
                    xuekeID: "081501",
                    xuekeName: "水文学及水资源"
                  },
                  label: "水文学及水资源"
                },
                {
                  value: {
                    xuekeID: "081502",
                    xuekeName: "水力学及河流动力学"
                  },
                  label: "水力学及河流动力学"
                },
                {
                  value: {
                    xuekeID: "081503",
                    xuekeName: "水工结构工程"
                  },
                  label: "水工结构工程"
                },
                {
                  value: {
                    xuekeID: "081504",
                    xuekeName: "水利水电工程"
                  },
                  label: "水利水电工程"
                },
                {
                  value: {
                    xuekeID: "081505",
                    xuekeName: "港口、海岸及近海工程"
                  },
                  label: "港口、海岸及近海工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0816",
                xuekeName: "测绘科学与技术"
              },
              label: "测绘科学与技术",
              children: [
                {
                  value: {
                    xuekeID: "081601",
                    xuekeName: "大地测量学与测量工程"
                  },
                  label: "大地测量学与测量工程"
                },
                {
                  value: {
                    xuekeID: "081602",
                    xuekeName: "摄影测量与遥感"
                  },
                  label: "摄影测量与遥感"
                },
                {
                  value: {
                    xuekeID: "081603",
                    xuekeName: "地图制图学与地理信息工程"
                  },
                  label: "地图制图学与地理信息工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0817",
                xuekeName: "化学工程与技术"
              },
              label: "化学工程与技术",
              children: [
                {
                  value: {
                    xuekeID: "081701",
                    xuekeName: "化学工程"
                  },
                  label: "化学工程"
                },
                {
                  value: {
                    xuekeID: "081702",
                    xuekeName: "化学工艺"
                  },
                  label: "化学工艺"
                },
                {
                  value: {
                    xuekeID: "081703",
                    xuekeName: "生物化工"
                  },
                  label: "生物化工"
                },
                {
                  value: {
                    xuekeID: "081704",
                    xuekeName: "应用化学"
                  },
                  label: "应用化学"
                },
                {
                  value: {
                    xuekeID: "081705",
                    xuekeName: "工业催化"
                  },
                  label: "工业催化"
                }
              ]
            },
            {
              value: {
                xuekeID: "0818",
                xuekeName: "地质资源与地质工程"
              },
              label: "地质资源与地质工程",
              children: [
                {
                  value: {
                    xuekeID: "081801",
                    xuekeName: "矿产普查与勘探"
                  },
                  label: "矿产普查与勘探"
                },
                {
                  value: {
                    xuekeID: "081802",
                    xuekeName: "地球探测与信息技术"
                  },
                  label: "地球探测与信息技术"
                },
                {
                  value: {
                    xuekeID: "081803",
                    xuekeName: "地质工程"
                  },
                  label: "地质工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0819",
                xuekeName: "矿业工程"
              },
              label: "矿业工程",
              children: [
                {
                  value: {
                    xuekeID: "081901",
                    xuekeName: "采矿工程"
                  },
                  label: "采矿工程"
                },
                {
                  value: {
                    xuekeID: "081902",
                    xuekeName: "矿物加工工程"
                  },
                  label: "矿物加工工程"
                },
                {
                  value: {
                    xuekeID: "081903",
                    xuekeName: "安全技术及工程"
                  },
                  label: "安全技术及工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0820",
                xuekeName: "石油与天然气工程"
              },
              label: "石油与天然气工程",
              children: [
                {
                  value: {
                    xuekeID: "082001",
                    xuekeName: "油气井工程"
                  },
                  label: "油气井工程"
                },
                {
                  value: {
                    xuekeID: "082002",
                    xuekeName: "油气田开发工程"
                  },
                  label: "油气田开发工程"
                },
                {
                  value: {
                    xuekeID: "082003",
                    xuekeName: "油气储运工程"
                  },
                  label: "油气储运工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0821",
                xuekeName: "纺织科学与工程"
              },
              label: "纺织科学与工程",
              children: [
                {
                  value: {
                    xuekeID: "082101",
                    xuekeName: "纺织工程"
                  },
                  label: "纺织工程"
                },
                {
                  value: {
                    xuekeID: "082102",
                    xuekeName: "纺织材料与纺织品设计"
                  },
                  label: "纺织材料与纺织品设计"
                },
                {
                  value: {
                    xuekeID: "082103",
                    xuekeName: "纺织化学与染整工程"
                  },
                  label: "纺织化学与染整工程"
                },
                {
                  value: {
                    xuekeID: "082104",
                    xuekeName: "服装设计与工程"
                  },
                  label: "服装设计与工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0822",
                xuekeName: "轻工技术与工程"
              },
              label: "轻工技术与工程",
              children: [
                {
                  value: {
                    xuekeID: "082201",
                    xuekeName: "制浆造纸工程"
                  },
                  label: "制浆造纸工程"
                },
                {
                  value: {
                    xuekeID: "082202",
                    xuekeName: "制糖工程"
                  },
                  label: "制糖工程"
                },
                {
                  value: {
                    xuekeID: "082203",
                    xuekeName: "发酵工程"
                  },
                  label: "发酵工程"
                },
                {
                  value: {
                    xuekeID: "082204",
                    xuekeName: "皮革化学与工程"
                  },
                  label: "皮革化学与工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0823",
                xuekeName: "交通运输工程"
              },
              label: "交通运输工程",
              children: [
                {
                  value: {
                    xuekeID: "082301",
                    xuekeName: "道路与铁道工程"
                  },
                  label: "道路与铁道工程"
                },
                {
                  value: {
                    xuekeID: "082302",
                    xuekeName: "交通信息工程及控制"
                  },
                  label: "交通信息工程及控制"
                },
                {
                  value: {
                    xuekeID: "082303",
                    xuekeName: "交通运输规划与管理"
                  },
                  label: "交通运输规划与管理"
                },
                {
                  value: {
                    xuekeID: "082304",
                    xuekeName: "载运工具运用工程"
                  },
                  label: "载运工具运用工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0824",
                xuekeName: "船舶与海洋工程"
              },
              label: "船舶与海洋工程",
              children: [
                {
                  value: {
                    xuekeID: "082401",
                    xuekeName: "船舶与海洋结构物设计制造"
                  },
                  label: "船舶与海洋结构物设计制造"
                },
                {
                  value: {
                    xuekeID: "082402",
                    xuekeName: "轮机工程"
                  },
                  label: "轮机工程"
                },
                {
                  value: {
                    xuekeID: "082403",
                    xuekeName: "水声工程"
                  },
                  label: "水声工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0825",
                xuekeName: "航空宇航科学与技术"
              },
              label: "航空宇航科学与技术",
              children: [
                {
                  value: {
                    xuekeID: "082501",
                    xuekeName: "飞行器设计"
                  },
                  label: "飞行器设计"
                },
                {
                  value: {
                    xuekeID: "082502",
                    xuekeName: "航空宇航推进理论与工程"
                  },
                  label: "航空宇航推进理论与工程"
                },
                {
                  value: {
                    xuekeID: "082503",
                    xuekeName: "航空宇航制造工程"
                  },
                  label: "航空宇航制造工程"
                },
                {
                  value: {
                    xuekeID: "082504",
                    xuekeName: "人机与环境工程"
                  },
                  label: "人机与环境工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0826",
                xuekeName: "兵器科学与技术"
              },
              label: "兵器科学与技术",
              children: [
                {
                  value: {
                    xuekeID: "082601",
                    xuekeName: "武器系统与运用工程"
                  },
                  label: "武器系统与运用工程"
                },
                {
                  value: {
                    xuekeID: "082602",
                    xuekeName: "兵器发射理论与技术"
                  },
                  label: "兵器发射理论与技术"
                },
                {
                  value: {
                    xuekeID: "082603",
                    xuekeName: "火炮、自动武器与弹药工程"
                  },
                  label: "火炮、自动武器与弹药工程"
                },
                {
                  value: {
                    xuekeID: "082604",
                    xuekeName: "军事化学与烟火技术"
                  },
                  label: "军事化学与烟火技术"
                }
              ]
            },
            {
              value: {
                xuekeID: "0827",
                xuekeName: "核科学与技术"
              },
              label: "核科学与技术",
              children: [
                {
                  value: {
                    xuekeID: "082701",
                    xuekeName: "核能科学与工程"
                  },
                  label: "核能科学与工程"
                },
                {
                  value: {
                    xuekeID: "082702",
                    xuekeName: "核燃料循环与材料"
                  },
                  label: "核燃料循环与材料"
                },
                {
                  value: {
                    xuekeID: "082703",
                    xuekeName: "核技术及应用"
                  },
                  label: "核技术及应用"
                },
                {
                  value: {
                    xuekeID: "082704",
                    xuekeName: "辐射防护及环境保护"
                  },
                  label: "辐射防护及环境保护"
                }
              ]
            },
            {
              value: {
                xuekeID: "0828",
                xuekeName: "农业工程"
              },
              label: "农业工程",
              children: [
                {
                  value: {
                    xuekeID: "082801",
                    xuekeName: "农业机械化工程"
                  },
                  label: "农业机械化工程"
                },
                {
                  value: {
                    xuekeID: "082802",
                    xuekeName: "农业水土工程"
                  },
                  label: "农业水土工程"
                },
                {
                  value: {
                    xuekeID: "082803",
                    xuekeName: "农业生物环境与能源工程"
                  },
                  label: "农业生物环境与能源工程"
                },
                {
                  value: {
                    xuekeID: "082804",
                    xuekeName: "农业电气化与自动化"
                  },
                  label: "农业电气化与自动化"
                }
              ]
            },
            {
              value: {
                xuekeID: "0829",
                xuekeName: "林业工程"
              },
              label: "林业工程",
              children: [
                {
                  value: {
                    xuekeID: "082901",
                    xuekeName: "森林工程"
                  },
                  label: "森林工程"
                },
                {
                  value: {
                    xuekeID: "082902",
                    xuekeName: "木材科学与技术"
                  },
                  label: "木材科学与技术"
                },
                {
                  value: {
                    xuekeID: "082903",
                    xuekeName: "林产化学加工工程"
                  },
                  label: "林产化学加工工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0830",
                xuekeName: "环境科学与工程（可授工学、理学、农学学位）"
              },
              label: "环境科学与工程（可授工学、理学、农学学位）",
              children: [
                {
                  value: {
                    xuekeID: "083001",
                    xuekeName: "环境科学"
                  },
                  label: "环境科学"
                },
                {
                  value: {
                    xuekeID: "083002",
                    xuekeName: "环境工程"
                  },
                  label: "环境工程"
                }
              ]
            },
            {
              value: {
                xuekeID: "0831",
                xuekeName: "生物医学工程（可授工学、理学、医学学位）"
              },
              label: "生物医学工程（可授工学、理学、医学学位）"
            },
            {
              value: {
                xuekeID: "0832",
                xuekeName: "食品科学与工程（可授工学、农学学位）"
              },
              label: "食品科学与工程（可授工学、农学学位）",
              children: [
                {
                  value: {
                    xuekeID: "083201",
                    xuekeName: "食品科学"
                  },
                  label: "食品科学"
                },
                {
                  value: {
                    xuekeID: "083202",
                    xuekeName: "粮食、油脂及植物蛋白工程"
                  },
                  label: "粮食、油脂及植物蛋白工程"
                },
                {
                  value: {
                    xuekeID: "083203",
                    xuekeName: "农产品加工及贮藏工程"
                  },
                  label: "农产品加工及贮藏工程"
                },
                {
                  value: {
                    xuekeID: "083204",
                    xuekeName: "水产品加工及贮藏工程"
                  },
                  label: "水产品加工及贮藏工程"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "09",
            xuekeName: "农学"
          },
          label: "农学",
          children: [
            {
              value: {
                xuekeID: "0901",
                xuekeName: "作物学"
              },
              label: "作物学",
              children: [
                {
                  value: {
                    xuekeID: "090101",
                    xuekeName: "作物栽培学与耕作学"
                  },
                  label: "作物栽培学与耕作学"
                },
                {
                  value: {
                    xuekeID: "090102",
                    xuekeName: "作物遗传育种"
                  },
                  label: "作物遗传育种"
                }
              ]
            },
            {
              value: {
                xuekeID: "0902",
                xuekeName: "园艺学"
              },
              label: "园艺学",
              children: [
                {
                  value: {
                    xuekeID: "090201",
                    xuekeName: "果树学"
                  },
                  label: "果树学"
                },
                {
                  value: {
                    xuekeID: "090202",
                    xuekeName: "蔬菜学"
                  },
                  label: "蔬菜学"
                },
                {
                  value: {
                    xuekeID: "090203",
                    xuekeName: "茶学"
                  },
                  label: "茶学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0903",
                xuekeName: "农业资源利用"
              },
              label: "农业资源利用",
              children: [
                {
                  value: {
                    xuekeID: "090301",
                    xuekeName: "土壤学"
                  },
                  label: "土壤学"
                },
                {
                  value: {
                    xuekeID: "090302",
                    xuekeName: "植物营养学"
                  },
                  label: "植物营养学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0904",
                xuekeName: "植物保护"
              },
              label: "植物保护",
              children: [
                {
                  value: {
                    xuekeID: "090401",
                    xuekeName: "植物病理学"
                  },
                  label: "植物病理学"
                },
                {
                  value: {
                    xuekeID: "090402",
                    xuekeName: "农业昆虫与害虫防治"
                  },
                  label: "农业昆虫与害虫防治"
                },
                {
                  value: {
                    xuekeID: "090403",
                    xuekeName: "农药学(可授农学、理学学位）"
                  },
                  label: "农药学(可授农学、理学学位）"
                }
              ]
            },
            {
              value: {
                xuekeID: "0905",
                xuekeName: "畜牧学"
              },
              label: "畜牧学",
              children: [
                {
                  value: {
                    xuekeID: "090501",
                    xuekeName: "动物遗传育种与繁殖"
                  },
                  label: "动物遗传育种与繁殖"
                },
                {
                  value: {
                    xuekeID: "090502",
                    xuekeName: "动物营养与饲料科学"
                  },
                  label: "动物营养与饲料科学"
                },
                {
                  value: {
                    xuekeID: "090503",
                    xuekeName: "草业科学"
                  },
                  label: "草业科学"
                },
                {
                  value: {
                    xuekeID: "090504",
                    xuekeName: "特种经济动物饲养（含：蚕、蜂等）"
                  },
                  label: "特种经济动物饲养（含：蚕、蜂等）"
                }
              ]
            },
            {
              value: {
                xuekeID: "0906",
                xuekeName: "兽医学"
              },
              label: "兽医学",
              children: [
                {
                  value: {
                    xuekeID: "090601",
                    xuekeName: "基础兽医学"
                  },
                  label: "基础兽医学"
                },
                {
                  value: {
                    xuekeID: "090602",
                    xuekeName: "预防兽医学"
                  },
                  label: "预防兽医学"
                },
                {
                  value: {
                    xuekeID: "090603",
                    xuekeName: "临床兽医学"
                  },
                  label: "临床兽医学"
                }
              ]
            },
            {
              value: {
                xuekeID: "0907",
                xuekeName: "林学"
              },
              label: "林学",
              children: [
                {
                  value: {
                    xuekeID: "090701",
                    xuekeName: "林木遗传育种"
                  },
                  label: "林木遗传育种"
                },
                {
                  value: {
                    xuekeID: "090702",
                    xuekeName: "森林培育"
                  },
                  label: "森林培育"
                },
                {
                  value: {
                    xuekeID: "090703",
                    xuekeName: "森林保护学"
                  },
                  label: "森林保护学"
                },
                {
                  value: {
                    xuekeID: "090704",
                    xuekeName: "森林经理学"
                  },
                  label: "森林经理学"
                },
                {
                  value: {
                    xuekeID: "090705",
                    xuekeName: "野生动植物保护与利用"
                  },
                  label: "野生动植物保护与利用"
                },
                {
                  value: {
                    xuekeID: "090706",
                    xuekeName: "园林植物与观赏园艺"
                  },
                  label: "园林植物与观赏园艺"
                },
                {
                  value: {
                    xuekeID: "090707",
                    xuekeName: "水土保持与荒漠化防治"
                  },
                  label: "水土保持与荒漠化防治"
                }
              ]
            },
            {
              value: {
                xuekeID: "0908",
                xuekeName: "水产"
              },
              label: "水产",
              children: [
                {
                  value: {
                    xuekeID: "090801",
                    xuekeName: "水产养殖"
                  },
                  label: "水产养殖"
                },
                {
                  value: {
                    xuekeID: "090802",
                    xuekeName: "捕捞学"
                  },
                  label: "捕捞学"
                },
                {
                  value: {
                    xuekeID: "090803",
                    xuekeName: "渔业资源"
                  },
                  label: "渔业资源"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "10",
            xuekeName: "医学"
          },
          label: "医学",
          children: [
            {
              value: {
                xuekeID: "1001",
                xuekeName: "基础医学(可授医学、理学学位)"
              },
              label: "基础医学(可授医学、理学学位)",
              children: [
                {
                  value: {
                    xuekeID: "100101",
                    xuekeName: "人体解剖与组织胚胎学"
                  },
                  label: "人体解剖与组织胚胎学"
                },
                {
                  value: {
                    xuekeID: "100102",
                    xuekeName: "免疫学"
                  },
                  label: "免疫学"
                },
                {
                  value: {
                    xuekeID: "100103",
                    xuekeName: "病原生物学"
                  },
                  label: "病原生物学"
                },
                {
                  value: {
                    xuekeID: "100104",
                    xuekeName: "病理学与病理生理学"
                  },
                  label: "病理学与病理生理学"
                },
                {
                  value: {
                    xuekeID: "100105",
                    xuekeName: "法医学"
                  },
                  label: "法医学"
                },
                {
                  value: {
                    xuekeID: "100106",
                    xuekeName: "放射医学"
                  },
                  label: "放射医学"
                },
                {
                  value: {
                    xuekeID: "100107",
                    xuekeName: "航空、航天与航海医学"
                  },
                  label: "航空、航天与航海医学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1002",
                xuekeName: "临床医学"
              },
              label: "临床医学",
              children: [
                {
                  value: {
                    xuekeID: "100201",
                    xuekeName:
                      "内科学(含：心血管病、血液病、呼吸系病、消化系病、内分泌与代谢病、肾病、风湿病、传染病)"
                  },
                  label:
                    "内科学(含：心血管病、血液病、呼吸系病、消化系病、内分泌与代谢病、肾病、风湿病、传染病)"
                },
                {
                  value: {
                    xuekeID: "100202",
                    xuekeName: "儿科学"
                  },
                  label: "儿科学"
                },
                {
                  value: {
                    xuekeID: "100203",
                    xuekeName: "老年医学"
                  },
                  label: "老年医学"
                },
                {
                  value: {
                    xuekeID: "100204",
                    xuekeName: "神经病学"
                  },
                  label: "神经病学"
                },
                {
                  value: {
                    xuekeID: "100205",
                    xuekeName: "精神病与精神卫生学"
                  },
                  label: "精神病与精神卫生学"
                },
                {
                  value: {
                    xuekeID: "100206",
                    xuekeName: "皮肤病与性病学"
                  },
                  label: "皮肤病与性病学"
                },
                {
                  value: {
                    xuekeID: "100207",
                    xuekeName: "影像医学与核医学"
                  },
                  label: "影像医学与核医学"
                },
                {
                  value: {
                    xuekeID: "100208",
                    xuekeName: "临床检验诊断学"
                  },
                  label: "临床检验诊断学"
                },
                {
                  value: {
                    xuekeID: "100209",
                    xuekeName: "护理学"
                  },
                  label: "护理学"
                },
                {
                  value: {
                    xuekeID: "100210",
                    xuekeName:
                      "外科学(含：普外、骨外、泌尿外、胸心外、神外、整形、烧伤、野战外)"
                  },
                  label:
                    "外科学(含：普外、骨外、泌尿外、胸心外、神外、整形、烧伤、野战外)"
                },
                {
                  value: {
                    xuekeID: "100211",
                    xuekeName: "妇产科学"
                  },
                  label: "妇产科学"
                },
                {
                  value: {
                    xuekeID: "100212",
                    xuekeName: "眼科学"
                  },
                  label: "眼科学"
                },
                {
                  value: {
                    xuekeID: "100213",
                    xuekeName: "耳鼻咽喉科学"
                  },
                  label: "耳鼻咽喉科学"
                },
                {
                  value: {
                    xuekeID: "100214",
                    xuekeName: "肿瘤学"
                  },
                  label: "肿瘤学"
                },
                {
                  value: {
                    xuekeID: "100215",
                    xuekeName: "康复医学与理疗学"
                  },
                  label: "康复医学与理疗学"
                },
                {
                  value: {
                    xuekeID: "100216",
                    xuekeName: "运动医学"
                  },
                  label: "运动医学"
                },
                {
                  value: {
                    xuekeID: "100217",
                    xuekeName: "麻醉学"
                  },
                  label: "麻醉学"
                },
                {
                  value: {
                    xuekeID: "100218",
                    xuekeName: "急诊医学"
                  },
                  label: "急诊医学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1003",
                xuekeName: "口腔医学"
              },
              label: "口腔医学",
              children: [
                {
                  value: {
                    xuekeID: "100301",
                    xuekeName: "口腔基础医学"
                  },
                  label: "口腔基础医学"
                },
                {
                  value: {
                    xuekeID: "100302",
                    xuekeName: "口腔临床医学"
                  },
                  label: "口腔临床医学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1004",
                xuekeName: "公共卫生与预防医学(可授医学、理学学位)"
              },
              label: "公共卫生与预防医学(可授医学、理学学位)",
              children: [
                {
                  value: {
                    xuekeID: "100401",
                    xuekeName: "流行病与卫生统计学"
                  },
                  label: "流行病与卫生统计学"
                },
                {
                  value: {
                    xuekeID: "100402",
                    xuekeName: "劳动卫生与环境卫生学"
                  },
                  label: "劳动卫生与环境卫生学"
                },
                {
                  value: {
                    xuekeID: "100403",
                    xuekeName: "营养与食品卫生学"
                  },
                  label: "营养与食品卫生学"
                },
                {
                  value: {
                    xuekeID: "100404",
                    xuekeName: "少儿卫生与妇幼保健学"
                  },
                  label: "少儿卫生与妇幼保健学"
                },
                {
                  value: {
                    xuekeID: "100405",
                    xuekeName: "卫生毒理学"
                  },
                  label: "卫生毒理学"
                },
                {
                  value: {
                    xuekeID: "100406",
                    xuekeName: "军事预防医学"
                  },
                  label: "军事预防医学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1005",
                xuekeName: "中医学"
              },
              label: "中医学",
              children: [
                {
                  value: {
                    xuekeID: "100501",
                    xuekeName: "中医基础理论"
                  },
                  label: "中医基础理论"
                },
                {
                  value: {
                    xuekeID: "100502",
                    xuekeName: "中医临床基础"
                  },
                  label: "中医临床基础"
                },
                {
                  value: {
                    xuekeID: "100503",
                    xuekeName: "中医医史文献"
                  },
                  label: "中医医史文献"
                },
                {
                  value: {
                    xuekeID: "100504",
                    xuekeName: "方剂学"
                  },
                  label: "方剂学"
                },
                {
                  value: {
                    xuekeID: "100505",
                    xuekeName: "中医诊断学"
                  },
                  label: "中医诊断学"
                },
                {
                  value: {
                    xuekeID: "100506",
                    xuekeName: "中医内科学"
                  },
                  label: "中医内科学"
                },
                {
                  value: {
                    xuekeID: "100507",
                    xuekeName: "中医外科学"
                  },
                  label: "中医外科学"
                },
                {
                  value: {
                    xuekeID: "100508",
                    xuekeName: "中医骨伤科学"
                  },
                  label: "中医骨伤科学"
                },
                {
                  value: {
                    xuekeID: "100509",
                    xuekeName: "中医妇科学"
                  },
                  label: "中医妇科学"
                },
                {
                  value: {
                    xuekeID: "100510",
                    xuekeName: "中医儿科学"
                  },
                  label: "中医儿科学"
                },
                {
                  value: {
                    xuekeID: "100511",
                    xuekeName: "中医五官科学"
                  },
                  label: "中医五官科学"
                },
                {
                  value: {
                    xuekeID: "100512",
                    xuekeName: "针灸推拿学"
                  },
                  label: "针灸推拿学"
                },
                {
                  value: {
                    xuekeID: "100513",
                    xuekeName: "民族医学(含：藏医学、蒙医学等)"
                  },
                  label: "民族医学(含：藏医学、蒙医学等)"
                }
              ]
            },
            {
              value: {
                xuekeID: "1006",
                xuekeName: "中西医结合"
              },
              label: "中西医结合",
              children: [
                {
                  value: {
                    xuekeID: "100601",
                    xuekeName: "中西医结合基础"
                  },
                  label: "中西医结合基础"
                },
                {
                  value: {
                    xuekeID: "100602",
                    xuekeName: "中西医结合临床"
                  },
                  label: "中西医结合临床"
                }
              ]
            },
            {
              value: {
                xuekeID: "1007",
                xuekeName: "药学(可授医学、理学学位)"
              },
              label: "药学(可授医学、理学学位)",
              children: [
                {
                  value: {
                    xuekeID: "100701",
                    xuekeName: "药物化学"
                  },
                  label: "药物化学"
                },
                {
                  value: {
                    xuekeID: "100702",
                    xuekeName: "药剂学"
                  },
                  label: "药剂学"
                },
                {
                  value: {
                    xuekeID: "100703",
                    xuekeName: "生药学"
                  },
                  label: "生药学"
                },
                {
                  value: {
                    xuekeID: "100704",
                    xuekeName: "药物分析学"
                  },
                  label: "药物分析学"
                },
                {
                  value: {
                    xuekeID: "100705",
                    xuekeName: "微生物与生化药学"
                  },
                  label: "微生物与生化药学"
                },
                {
                  value: {
                    xuekeID: "100706",
                    xuekeName: "药理学"
                  },
                  label: "药理学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1008",
                xuekeName: "中药学"
              },
              label: "中药学"
            }
          ]
        },
        {
          value: {
            xuekeID: "11",
            xuekeName: "军事学"
          },
          label: "军事学",
          children: [
            {
              value: {
                xuekeID: "1101",
                xuekeName: "军事思想及军事历史"
              },
              label: "军事思想及军事历史",
              children: [
                {
                  value: {
                    xuekeID: "110101",
                    xuekeName: "军事思想"
                  },
                  label: "军事思想"
                },
                {
                  value: {
                    xuekeID: "110102",
                    xuekeName: "军事历史"
                  },
                  label: "军事历史"
                }
              ]
            },
            {
              value: {
                xuekeID: "1102",
                xuekeName: "战略学"
              },
              label: "战略学",
              children: [
                {
                  value: {
                    xuekeID: "110201",
                    xuekeName: "军事战略学"
                  },
                  label: "军事战略学"
                },
                {
                  value: {
                    xuekeID: "110202",
                    xuekeName: "战争动员学"
                  },
                  label: "战争动员学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1103",
                xuekeName: "战役学"
              },
              label: "战役学",
              children: [
                {
                  value: {
                    xuekeID: "110301",
                    xuekeName: "联合战役学"
                  },
                  label: "联合战役学"
                },
                {
                  value: {
                    xuekeID: "110302",
                    xuekeName: "军种战役学(含∶第二炮兵战役学)"
                  },
                  label: "军种战役学(含∶第二炮兵战役学)"
                }
              ]
            },
            {
              value: {
                xuekeID: "1104",
                xuekeName: "战术学"
              },
              label: "战术学",
              children: [
                {
                  value: {
                    xuekeID: "110401",
                    xuekeName: "合同战术学"
                  },
                  label: "合同战术学"
                },
                {
                  value: {
                    xuekeID: "110402",
                    xuekeName: "兵种战术学"
                  },
                  label: "兵种战术学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1105",
                xuekeName: "军队指挥学"
              },
              label: "军队指挥学",
              children: [
                {
                  value: {
                    xuekeID: "110501",
                    xuekeName: "作战指挥学"
                  },
                  label: "作战指挥学"
                },
                {
                  value: {
                    xuekeID: "110502",
                    xuekeName: "军事运筹学"
                  },
                  label: "军事运筹学"
                },
                {
                  value: {
                    xuekeID: "110503",
                    xuekeName: "军事通信学"
                  },
                  label: "军事通信学"
                },
                {
                  value: {
                    xuekeID: "110504",
                    xuekeName: "军事情报学"
                  },
                  label: "军事情报学"
                },
                {
                  value: {
                    xuekeID: "110505",
                    xuekeName: "密码学"
                  },
                  label: "密码学"
                },
                {
                  value: {
                    xuekeID: "110506",
                    xuekeName: "军事教育训练学(含∶军事体育学)"
                  },
                  label: "军事教育训练学(含∶军事体育学)"
                }
              ]
            },
            {
              value: {
                xuekeID: "1106",
                xuekeName: "军制学"
              },
              label: "军制学",
              children: [
                {
                  value: {
                    xuekeID: "110601",
                    xuekeName: "军事组织编制学"
                  },
                  label: "军事组织编制学"
                },
                {
                  value: {
                    xuekeID: "110602",
                    xuekeName: "军队管理学"
                  },
                  label: "军队管理学"
                }
              ]
            },
            {
              value: {
                xuekeID: "1107",
                xuekeName: "军队政治工作学"
              },
              label: "军队政治工作学"
            },
            {
              value: {
                xuekeID: "1108",
                xuekeName: "军事后勤学与军事装备学"
              },
              label: "军事后勤学与军事装备学",
              children: [
                {
                  value: {
                    xuekeID: "110801",
                    xuekeName: "军事后勤学"
                  },
                  label: "军事后勤学"
                },
                {
                  value: {
                    xuekeID: "110802",
                    xuekeName: "后方专业勤务"
                  },
                  label: "后方专业勤务"
                },
                {
                  value: {
                    xuekeID: "110803",
                    xuekeName: "军事装备学"
                  },
                  label: "军事装备学"
                }
              ]
            }
          ]
        },
        {
          value: {
            xuekeID: "12",
            xuekeName: "管理学"
          },
          label: "管理学",
          children: [
            {
              value: {
                xuekeID: "1201",
                xuekeName: "管理科学与工程(可授管理学、工学学位)"
              },
              label: "管理科学与工程(可授管理学、工学学位)"
            },
            {
              value: {
                xuekeID: "1202",
                xuekeName: "工商管理"
              },
              label: "工商管理",
              children: [
                {
                  value: {
                    xuekeID: "120201",
                    xuekeName: "会计学"
                  },
                  label: "会计学"
                },
                {
                  value: {
                    xuekeID: "120202",
                    xuekeName:
                      "企业管理（含：财务管理、市场营销、人力资源管理）"
                  },
                  label: "企业管理（含：财务管理、市场营销、人力资源管理）"
                },
                {
                  value: {
                    xuekeID: "120203",
                    xuekeName: "旅游管理"
                  },
                  label: "旅游管理"
                },
                {
                  value: {
                    xuekeID: "120204",
                    xuekeName: "技术经济及管理"
                  },
                  label: "技术经济及管理"
                }
              ]
            },
            {
              value: {
                xuekeID: "1203",
                xuekeName: "农林经济管理"
              },
              label: "农林经济管理",
              children: [
                {
                  value: {
                    xuekeID: "120301",
                    xuekeName: "农业经济管理"
                  },
                  label: "农业经济管理"
                },
                {
                  value: {
                    xuekeID: "120302",
                    xuekeName: "林业经济管理"
                  },
                  label: "林业经济管理"
                }
              ]
            },
            {
              value: {
                xuekeID: "1204",
                xuekeName: "公共管理"
              },
              label: "公共管理",
              children: [
                {
                  value: {
                    xuekeID: "120401",
                    xuekeName: "行政管理"
                  },
                  label: "行政管理"
                },
                {
                  value: {
                    xuekeID: "120402",
                    xuekeName: "社会医学与卫生事业管理(可授管理学、医学学位)"
                  },
                  label: "社会医学与卫生事业管理(可授管理学、医学学位)"
                },
                {
                  value: {
                    xuekeID: "120403",
                    xuekeName: "教育经济与管理（可授管理学、教育学学位）"
                  },
                  label: "教育经济与管理（可授管理学、教育学学位）"
                },
                {
                  value: {
                    xuekeID: "120404",
                    xuekeName: "社会保障"
                  },
                  label: "社会保障"
                },
                {
                  value: {
                    xuekeID: "120405",
                    xuekeName: "土地资源管理"
                  },
                  label: "土地资源管理"
                }
              ]
            },
            {
              value: {
                xuekeID: "1205",
                xuekeName: "图书馆、情报与档案管理"
              },
              label: "图书馆、情报与档案管理",
              children: [
                {
                  value: {
                    xuekeID: "120501",
                    xuekeName: "图书馆学"
                  },
                  label: "图书馆学"
                },
                {
                  value: {
                    xuekeID: "120502",
                    xuekeName: "情报学"
                  },
                  label: "情报学"
                },
                {
                  value: {
                    xuekeID: "120503",
                    xuekeName: "档案学"
                  },
                  label: "档案学"
                }
              ]
            }
          ]
        }
      ],

      zhichengData: [
        {
          value: "教师系列",
          label: "教师系列",
          children: [
            {
              value: "助教",
              label: "助教"
            },
            {
              value: "讲师",
              label: "讲师"
            },
            {
              value: "副教授",
              label: "副教授"
            },
            {
              value: "教授",
              label: "教授"
            }
          ]
        },
        {
          value: "实验系列",
          label: "实验系列",
          children: [
            {
              value: "实验员",
              label: "实验员"
            },
            {
              value: "实验师",
              label: "实验师"
            },
            {
              value: "高级实验师",
              label: "高级实验师"
            }
          ]
        },
        {
          value: "教育管理研究系列",
          label: "教育管理研究系列",
          children: [
            {
              value: "研究实习员",
              label: "研究实习员"
            },
            {
              value: "助理研究员",
              label: "助理研究员"
            },
            {
              value: "副研究员",
              label: "副研究员"
            },
            {
              value: "研究员",
              label: "研究员"
            }
          ]
        },
        {
          value: "思政系列",
          label: "思政系列",
          children: [
            {
              value: "思政助教",
              label: "思政助教"
            },
            {
              value: "思政讲师",
              label: "思政讲师"
            },
            {
              value: "思政副教授",
              label: "思政副教授"
            },
            {
              value: "思政教授",
              label: "思政教授"
            }
          ]
        }
      ],
      ruleValidate: {
        gonghao: [{ required: true, message: "请输入工号！", trigger: "blur" }],
        xingming: [
          {
            required: true,
            message: "请输入姓名！",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (
          valid &&
          this.formDate.xueke.length != 0 &&
          this.formDate.zhicheng.length == 2
        ) {
          console.log(this.formDate);
          this.$Message.success("Success!");
        } else {
          this.$Message.error("请选择申报学科与拟报职称");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
