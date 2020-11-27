<template>
  <div style="padding: 20px">
    <div class="all" style="border-bottom: 1px solid #ccc; padding: 15px">
      用户信息管理表
    </div>
    <div>
      <div class="m_header_content">
        <span class="item-tag">用户姓名</span>
        <Input
          placeholder="请输入用户姓名"
          style="width: 200px; margin: 0 10px"
        />
        <Button type="primary" @click="search()">查询</Button>
      </div>
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="modal1 = true"
            >编辑</Button
          >
          <Modal
            v-model="modal1"
            title="用户信息编辑"
            @on-ok="ok"
            @on-cancel="cancel"
          >
            <Form :model="formLeft" label-position="left:10px" :label-width="100" style="height:120px;margin:15px">
              <FormItem label="密码">
                <Input v-model="formLeft.input1"></Input>
              </FormItem>
              <FormItem label="部门">
                <Input v-model="formLeft.input2"></Input>
              </FormItem>
              <FormItem label="岗位">
                <Input v-model="formLeft.input3"></Input>
              </FormItem>
               <FormItem label="手机号">
                <Input v-model="formLeft.input4"></Input>
              </FormItem>
              <FormItem label="邮箱">
                <Input v-model="formLeft.input5"></Input>
              </FormItem>
              <FormItem label="微信">
                <Input v-model="formLeft.input6"></Input>
              </FormItem>
              冻结状态
                <Select v-model="model8" clearable style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
             
            </Form>
          </Modal>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
    </div>

    <div class="pageNum">
      <Page />
    </div>
  </div>
</template>
<script>
import Page from "../components/page";
export default {
  data() {
    return {
       cityList: [
                    {
                        value: 'frozen',
                        label: '冻结'
                    },
                    {
                        value: 'inUse',
                        label: '正在使用'
                    }
                ],
                model8: '',
      formLeft: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
      },
      modal1: false,

      columns12: [
        {
          title: "姓名",
          key: "name",
          align: 'center'
        },
        {
          title: "账号",
          key: "age",
          align: 'center'
        },
        {
          title: "密码",
          key: "password",
          align: 'center'
        },
        {
          title: "部门",
          key: "depart",
          align: 'center'
        },
        {
          title: "岗位",
          key: "gw",
          align: 'center'
        },
        {
          title: "手机号",
          key: "phoneNumber",
          align: 'center'
        },
        {
          title: "邮箱",
          key: "mail",
          align: 'center'
        },
        {
          title: "微信",
          key: "wechat",
          align: 'center'
        },

        {
          title: "冻结状态",
          key: "type",
          align: 'center'
        },
        {
          title: "账号管理",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          password: "",
          depart: "",
          gw: "",
          phoneNumber: "",
          mail: "",
          wechat: "",
          type: "",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          password: "",
          depart: "",
          gw: "",
          phoneNumber: "",
          mail: "",
          wechat: "",
          type: "",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          password: "",
          depart: "",
          gw: "",
          phoneNumber: "",
          mail: "",
          wechat: "",
          type: "",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          password: "",
          depart: "",
          gw: "",
          phoneNumber: "",
          mail: "",
          wechat: "",
          type: "",
        },
      ],
    };
  },
  methods: {
    remove(index) {
      this.data6.splice(index, 1);
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
  components: {
    Page,
  },
};
</script>
<style>
.m_header_content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 15px;
}
</style>