
<template>
     <div class="layout">
        <Layout>
            <Header :style="{padding: 0}" class="layout-header-bar" >
                    <Menu mode="horizontal"  active-name="1" :theme="theme1">
                    <div class="layout-logo">
                        <img src="../assets/tubiao.png" style="width: calc(100% - 10px);margin: 5px;">
                    </div>
                    <div class="layout-nav">
                       
                       <Submenu name="3">
            <template slot="title">
               <Icon type="ios-contacts" style="font-size:30px;position:relative;top:5px"/>
                
            </template>
            <MenuGroup title="admin">
                <MenuItem name="3-1">退出登陆</MenuItem>   
            </MenuGroup>
            
        </Submenu>
                    </div>
                </Menu>
                </Header>
            
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" style="height:785px">    
               <Menus :collapsed="isCollapsed"/>   
            </Sider>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>      
</template>
<script>
import Menus from "../components/menu"
export default {
    components:{
        Menus
    },
    data(){
        return{
             isCollapsed: false,
             theme1: 'light'
        }
    },
     computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
    methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
    }
}
</script>
<<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
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
    .layout-logo{
    width: 200px;
    height: 65px;
    background: #515a6e;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 0;
    left: 0;
}
.layout-nav{
    width: 120px;
    float:right;
    

    
    
}

</style>
<style>
.layout .ivu-menu-horizontal.ivu-menu-light:after{
    width: 0;
}
</style>