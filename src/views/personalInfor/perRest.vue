<template>
<div>
<Breadcrumb/>
<div style=";padding: 20px" >
        <div class="all" style="border-bottom:1px solid #ccc;padding:15px">
            倒休详细登记表
        </div>
    
        <div>    
                <div class="m_header_content">
                    <span class="item-tag">倒休时间</span>
                    <Input v-model="tagNumberModel" placeholder="请输入倒休时间" style="width:200px;margin:0 10px;" />  <Button type="primary" @click="search()">查询</Button>
                </div>
                
            <Table border :columns="columns1" :data="data1"></Table>
        
        </div>
        <div class="pageNum">
            <Page/>
        </div>
    </div>
</div>
        

</template>
<script>
import Breadcrumb from '../../components/breadcrumb.vue'
import Page from '../../components/page'
export default {
    data(){
        return{
             columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
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
    },components:{
        Breadcrumb,
        Page
    },
}
</script>