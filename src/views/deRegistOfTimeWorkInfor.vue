<template>
    <div style=";padding: 20px" >
        <div class="all" style="border-bottom:1px solid #ccc;padding:15px">
           工时信息登记表
        </div>
        <div>    
                <div class="m_header_content">
                    <span class="item-tag">用户姓名</span>
                    <Input  placeholder="请输入用户姓名" style="width:200px;margin:0 10px;" />  <Button type="primary" @click="search()">查询</Button>
                </div>
            <Table border :columns="columns12" :data="data6" >
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="modal1 = true">编辑</Button>
                     <Modal
                            v-model="modal1"
                            title="工时登记编辑"
                            @on-ok="ok"
                            @on-cancel="cancel">
                            <Form :model="formLeft" label-position="left" :label-width="100" >
                                <FormItem label="姓名">
                                    <Input v-model="formLeft.input1"></Input>
                                </FormItem>
                                <FormItem label="加班时间">
                                    <Input v-model="formLeft.input2"></Input>
                                </FormItem>
                                <FormItem label="加班事项">
                                    <Input v-model="formLeft.input3"></Input>
                                </FormItem>
                                <FormItem label="加班小时">
                                    <Input v-model="formLeft.input4"></Input>
                                </FormItem>
                                <FormItem label="倒休时间">
                                    <Input v-model="formLeft.input5"></Input>
                                </FormItem>
                                <FormItem label="倒休小时">
                                    <Input v-model="formLeft.input6"></Input>
                                </FormItem>
                            </Form>
                        </Modal>
                    <Button type="error" size="small" @click="remove(index)">删除</Button>
                </template>
            </Table>
        
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
                 modal1: false,
                 formLeft: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: '',
                    input6: ''
                },
                
                columns12: [
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '加班时间',
                        key: 'station',
                        align: 'center'
                    },
                    {
                        title: '加班事项',
                        key: 'phoneNum',
                        align: 'center'
                    }, 
                    {
                        title: '加班小时',
                        key: 'overtime',
                        align: 'center'
                    },
                    {
                        title: '倒休时间',
                        key: 'restTime ',
                        align: 'center'
                    }, 
                    {
                        title: '倒休小时',
                        key: 'restHour',
                        align: 'center'
                    }, 
                    {
                        title: '登记管理',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        station:'',
                        phoneNum:'',
                        overtime:'',
                        restTime:'',
                        restHour:'',
                        
                    },
                    {
                       name: 'John Brown',
                        station:'',
                        phoneNum:'',
                        overtime:'',
                        restTime:'',
                        restHour:'',
                    },
                    {
                        name: 'John Brown',
                        station:'',
                        phoneNum:'',
                        overtime:'',
                        restTime:'',
                        restHour:'',
                    },
                    {
                        name: 'John Brown',
                        station:'',
                        phoneNum:'',
                        overtime:'',
                        restTime:'',
                        restHour:'',
                    }
                ]
            }
        },
        methods:{
            remove (index) {
                this.data6.splice(index, 1);
            }, 
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
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

</style>