<template>
    <div style=";padding: 20px" >
        <div class="all" style="border-bottom:1px solid #ccc;padding:15px">
            成员信息表
        </div>
    
        <div>    
                <div class="m_header_content">
                    <span class="item-tag">用户姓名</span>
                    <Input v-model="tagNumberModel" placeholder="请输入用户姓名" style="width:200px;margin:0 10px;" />  <Button type="primary" @click="search()">查询</Button>
                </div>
                
            
            <Table border :columns="columns1" :data="data1"></Table>
        
        </div>
        <div class="pageNum">
            <Page/>
        </div>
    </div>
</template>
<script>
import Page from '../components/page'
    export default {
          data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '部门',
                        key: 'depart',
                        align: 'center'
                    },
                    {
                        title: '岗位',
                        key: 'station',
                        align: 'center'
                    },
                    {
                        title:'手机号',
                        key:'phoneNum',
                        align: 'center'
                    },
                    {
                        title: '邮箱',
                        key: 'mail',
                        align: 'center'
                    },
                    {
                        title: '微信',
                        key: 'weChat',
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        components:{
            Page
        }
    }
</script>
<style>

.m_header_content {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin:15px;
      
      }
.pageNum{
    
}
</style>