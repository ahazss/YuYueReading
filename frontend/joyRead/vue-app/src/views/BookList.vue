<template>
    <div>
      <div class="head-title">
        <el-card id="item-detail" style="height:44px;">
            <el-button plain icon="el-icon-arrow-left" class="return" @click="routeTo('Homepage')">返回</el-button>
            书单详情
        </el-card>
      </div>
      <div style="margin-top:50px;">
        <div class="booklist-title">{{booklist_name}}</div>
        <el-divider>书单信息</el-divider>
        <div class="booklist-text">发布时间：{{booklist_time}}</div>
        <div class="booklist-text">描述：{{booklist_introduction}}</div>
        <el-divider>图书列表</el-divider>
        <div id="box">
        <!--ADD Here:BookItemComponents -->
        <div v-for="(item,index) in items" :key="index">
            <BookItem :item=item :status=1></BookItem>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import BookItem from "../components/BookItem"

export default {
    name:'BookList',
    components:{
        BookItem
    },
    data(){
       return{
           booklist_id:"0",
           booklist_name:"",
           booklist_time:"",
           booklist_introduction:"",
           items:'',
       };
    },
    created(){
        this.booklist_id=this.$route.params.booklist_id;
        this.getBookList();
    },
    methods:{
        getBookList(){
            var self=this;
            this.$axios.get('booklists/information/'+this.booklist_id)
            .then(response=>{
                self.booklist_name=response.data.name;
                self.booklist_time=response.data.time;
                self.booklist_introduction=response.data.introduction;
                self.items=response.data.books;
                console.log(self.books);
                
            })
        },
        routeTo(name, params) {
           this.$router.push({name, params});
        },
    }
}
</script>

<style lang="scss" scoped>
.head-title {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
}

#box{
    display: flex;
    flex-direction: column;
    //padding-left: 15px;
    //padding-right: 15px;
}

#item-detail{
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    border-top:0;
    border-left: 0;
    border-right:0;
    padding: 0;
    font-size: 18px;
}

.return {
    padding:0;
    background: rgba(0,0,0,0);
    margin-right: 25%;
    margin-top: 6px;
    width: 15%;
    height: 5%;
    border: 0px;
}

.booklist-title {
    text-align: center;
    font-size: 18px;
    color: #feb353;
    margin-top: 6px;
    margin-bottom: 4px;
}

.booklist-text {
    margin-left: 10px;
    margin-right: 10px;
    color: gray;
    font-size: 15px;
    line-height: 24px;
}
</style>

<style>
.el-card__body {
    padding:10px;
}
</style>