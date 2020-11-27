<template>
   <div>
       <Breadcrumb/>
       <div>
           <p>姓名：{{name}}</p>
           <p>邮箱：{{mail}}</p>
           <p>微信：{{weChat}}</p>
           <p>手机号：{{phoneNum}}</p>
           <p>加班小时：{{overtime}}小时</p>
           <p>倒休小时：{{restHour}}小时</p>
           <p>剩余工时：{{remainWork}}小时</p>
        
    </div>
   </div>
        
  
</template>
<script>
import Breadcrumb from '../../components/breadcrumb.vue'
export default {
    data(){
        return{
            name:"张三",
            mail:"WW_Q",
            weChat:"zhangs2020@qq.com",
            phoneNum:"12222344589",
            overtime:"100",
            restHour:"80",
            remainWork:"20"
        }
    },components:{
        Breadcrumb
    },
}
</script>