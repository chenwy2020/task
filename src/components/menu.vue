<template>
  <div class="header">
    <Menu
      active-name="1-2" theme="dark" width="auto"
      
      :class="menuItemClasse"
    >    
    <div class="layout-logo"></div> 
      <Submenu
        :name="items.path"
        :index="items"
        v-for="(items, index) in menu"
        :key="index"
      >
        <template slot="title">
          
          <span @click="select(items)">  <Icon :type="items.icon"/> {{ items.label }}</span>
        </template>
        <MenuItem 
            :name="children_items.label"
            v-for="children_items in items.children"
            :key="children_items.label" 
            style="vertical-align:middle"
        > 
           
            <span @click="selectChildren(children_items)">
               <Icon :type="children_items.icon" 
                  style="vertical-align:middle;position:absolute;left:10%;top:35%"/>
                   {{children_items.label}}
            </span>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
import AdminHome from '../views/adminHome'
export default {
    components:{
         AdminHome
    },
    props:[
        'collapsed'
    ],
  data() {
    return {
    // isCollapsed:false,
      menu: [
        { label: "人员信息",path:"",icon:"ios-people",
          children:[
            {
              label:  "个人信息",path:"/personalInfor",icon:"md-people"
            },{
              label: "成员信息",path:"/userInfor", icon:"ios-analytics"
            }
          ]},
         {
          label: "工时信息",path:"", icon:"ios-analytics-outline",
          children: [
            { label: "工时信息汇总" ,path:"/taskTimeInfor", icon:"md-browsers"},
            { label: "工时信息登记" ,path:"/deRegistOfTimeWorkInfor", icon:"ios-beaker"},
          ],
        },
        { label: "用户信息管理",path:"/userInforManage" , icon:"ios-body"},
      ],
    };
  },
  methods: {
    select(items){
       this.$router.replace(items.path)
    },
    selectChildren(children_items){   
        this.$router.replace(children_items.path);
    }

    
  },
  computed:{
menuItemClasse(){
        return[
            'menu-item',
            this.collapsed ? 'collapsed-menu' : ''
        ]
    } 
  },
  watch:{
      collapsed(val){
          console.log(val)
      }
  }
};
</script>
<!--
<style>
span {
  color: #fff;
}
</style>
-->


<style>
.header
  .ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #333;
}

.rotate-icon{
        transform: rotate(-90deg);
    }

     .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 120px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .menu-icon{
        transition: all .3s;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
 .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>