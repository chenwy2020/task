<template>
  <div class="container" style="min-vh-100;align-items-center">
     <Card  style="
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        "
        class="login">
         
      <p class="title" style="margin-bottom:15px">登录</p>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            type="text"
            v-model="formInline.user"
            placeholder="请输入您的用户名"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="请输入您的密码"
          >
            <Icon  type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="checking">
         <Input v-model="formInline.checking" placeholder="请输入验证码" clearable style="width: 135px" />
         <span
                type="button"
                id="checkCode"
                class="code"
                style="user-select: none;margin-left:14px;width:32%;text-align:center;background-color: #a794a4;color: aliceblue; font-size: large;"
                @click="createCode()"
              >{{code}}</span>
        </FormItem>
        <FormItem style="display: flex;justify-content: center; margin-bottom: 15px; flex-wrap: wrap">
          <Button
            type="primary"
            @click="handleSubmit('formInline')"
            style="margin: 20px"
            >登录</Button
          >
          <Button type="primary" @click="handleSubmit('formInline')"
            >注册</Button
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
      code:"",
      formInline: {
        user: "",
        password: "",
        checking:"",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "用户名为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码为空",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "请输入长度为6的密码",
            trigger: "blur",
          },
          
          
        ],
        checking:[
            {
            
            min:5,
            required: true,
            message:"请输入正确的验证码",
            trigger: "blur",
          }
          ]
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  createCode() {
      this.code = "";
      var codeLength = 5; //验证码的长度
     
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var charIndex = Math.floor(Math.random() * 10); //取得随机数的索引
        this.code += random[charIndex]; //根据索引取得随机数加到code上
      }
      
   },
// checkCode(){
//   if(){

//   }
// }

  },
  mounted(){
    this.createCode()
  }
};
</script>
<style>
.container {
  background: url("../assets/xk.jpg") no-repeat;
  max-width: 100vw;
  height: 100vh;
  justify-content: center;
}
.login{
    position: relative;
    top: 35%;
    left: 37%;
    padding: 10px;
    /* border: 1px solid #38383821; */
    width: 400px;
    /* background-color: #d5d9dc17; */
    /* border-radius: 10px; */
   
}
.title{
    text-align: center;
    color: #606266;
    font-weight: bold;
    font-size: 18px;
    
}
</style>