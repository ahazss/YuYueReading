<template>
<div>
    <div class="head-title">
        <el-card id="item-detail" style="height:44px;">
            <el-button plain icon="el-icon-arrow-left" class="return" v-if="status==2" @click="routeTo('WantToRead')">返回</el-button>
            <el-button plain icon="el-icon-arrow-left" class="return" v-if="status==3" @click="routeTo('Reading')">返回</el-button>
            <el-button plain icon="el-icon-arrow-left" class="return" v-if="status==4" @click="routeTo('HaveRead')">返回</el-button>
            图书详情
        </el-card>
    </div>
    <div id="box_book">
        <img :src=book_pic style="height:30%;width:30%;margin-left:20px">
        <div id="book_info">
            <div id="book_name">{{bookname}} </div>
            <div id="writer_name">{{writer}}</div>
            <div id="publisher">{{publisher}}</div>
            <div v-if="status==3||status==4" id="box_read_time">
                <div v-if="status==3">
                  <div id="read_time" style="margin-right:10px">上次阅读时间</div>
                </div>
                <div v-else-if="status==4">
                  <div id="read_time" style="margin-right:10px">最后阅读时间</div>
                </div> 
                <div id="last-date">{{date}}</div>
            </div>
            <div v-else style="height:30px;"></div>
            <el-progress :text-inside="true" :stroke-width="19" :percentage="(percentage*100).toFixed(2)"  style="width:195px;" v-if="status==3"></el-progress>
            <div v-if="status==0||status==1||status==2||status==4" style="margin-bottom:21px"></div>
            
            <div v-if="status==2 || status==3" style="margin-top:8px;">
                <el-button type="primary" plain class="detail-button" @click="addHaveRead()">阅读完成</el-button>
                <el-button type="primary" class="detail-button" @click="$router.push({name:'AddRecord',params:{isbn:isbn}})">添加记录</el-button>
            </div>
            <div v-else-if="status==4">
              <div style="height:15px; font-size: 13px;">个人评分:</div>
              <el-rate style="float:left; width:130px; margin-top: 8px;"
                v-model="score" disabled  show-score text-color="#ff9900"
                :colors="colors">
              </el-rate>
            </div>
            <el-button v-else-if="status==0" @click="routeTo('Login')" type="primary">
                加入想读
            </el-button>
            <el-button v-else-if="status==1" @click="addWantToRead()" type="primary" class="detail-button">
                加入想读
            </el-button>
        </div>
    </div>
    
    <el-divider content-position="center" v-if="status==3||status==4">书 摘</el-divider>
    <el-divider content-position="center" v-if="status==0||status==1||status==2">图 书 简 介</el-divider>
    <div id="box_details">
        <div v-if="status==3||status==4">
            <div v-for="(item,index) in items" :key=index>
            <ReadingRecords :item=item></ReadingRecords>
            </div>
        </div>
        <div id="box_description" v-if="status==0||status==1||status==2">
            <div>{{description}}</div>
        </div>
    </div>

    
</div>
</template>

<script>
import ReadingRecords from "../components/ReadingRecords" 
export default {

  name: 'BookDetails',
  components:{
      ReadingRecords,
  },
  data () {
    return {
        items:'',
        user_id:'',
        isbn:'',
        bookname:'',//book name
        book_pic:'',
        writer:'',//Book writer
        publisher:'',
        month:'',//Last read month
        date:'',//Last read date
        percentage:0,//Percentage of reading progress
        status:0,//Book status returned by api/books/information/detail
        score:4,//The number of star
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        description:''
    };
  },
  computed:{

  },
  methods:{
    routeTo(name, params) {
        this.$router.push({name, params});
    },
    goBack() {
        this.$router.go(-1)
    },
    getBookDetails(){
        var self=this;
        this.$axios.get('/books/information/detail?id='+this.user_id+'&isbn='+this.isbn)
        .then(response=>{
            self.isbn=response.data.isbn;
            self.bookname=response.data.name;
            self.book_pic=response.data.pic;
            self.writer=response.data.writer;
            self.publisher = response.data.publisher;
            self.description=response.data.introduction;
            self.percentage=response.data.percentage;
            self.status=response.data.status;
            self.score = response.data.point;
            self.date = response.data.lastTime;
        })
        
    },
    addWantToRead(){
        var self=this;
        var params={
            id:self.user_id,
            isbn:self.isbn
        }
        this.$axios.put('api/books/change/',params)
    },
    addHaveRead(){
        var self=this;
        var params={
            user_id:self.user_id,
            isbn:self.isbn,
            point:self.score
        }
        this.$axios.put('api/books/end',params)
    }
  },
  created(){
      var self = this
      this.user_id=localStorage.getItem('userId');
      if(self.isbn==""){
        this.isbn=this.$route.params.isbn;
      }
      this.getBookDetails();
      console.log("status:",self.status)
      if(self.status==0||self.status==4){
          this.$axios.get('/records/all?id='+this.user_id+'&isbn='+this.isbn)
          .then(response=>{
              console.log("data:",response.data)
              self.items=response.data
              console.log("items:",self.items)
          })
      }
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
#box_book{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

}
#box_read_time{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:center;
    margin-top: 4px;
    margin-bottom: 4px;
}
#book_info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 20px;
}
#book_name{
    font-size: 18px;
    font-weight: 500;
    margin-bottom:5px;
    text-align: right;
    font-family:"微软雅黑","宋体";
}
#writer_name{
    font-size: 17px;
    font-weight: 500;
    margin-bottom:4px;
    font-family:"楷体","宋体";
}
#publisher {
    font-size:15px;
    color:gray;
    margin-bottom:4px;
    font-family:"楷体","宋体";
}
#read_time{
    font-size:15px;
    font-weight: 500;
    font-family: "等线","宋体";
}

#last-date {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(248, 162, 50);
}

.detail-button {
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 16px;
    padding-right: 16px;
}
#box_details{
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
}
#box_description{
    padding: 5px;
    font-size: 15px;
    overflow: scroll;
    text-align:justify;
}

</style>

<style>
.el-card__body {
    padding:10px;
}

.el-progress-bar__outer {
    height:14px !important;
}

.el-progress-bar__innerText {
    font-size:11px;
    font-weight: 100;
    margin-bottom: 4px;
}
</style>