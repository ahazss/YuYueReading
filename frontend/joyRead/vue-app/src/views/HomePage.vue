<template>
<div id="homepage-container">
  <div id="box_sign">
    <div id="box_date">
      <div id="date_font"  style="margin-right:50px;">{{nowDate}}</div>

      <div id="week_font" style="margin-left:20px;">{{nowWeek}}</div>
    </div>
    <div id="day_card">
    <img src="./../assets/img/sign_pic.png" style="height:150px;width:300px;margin-top:16px;margin-bottom:10px">
    <span id="sign_1">它们像人一样，生命中更多时间是用来等待的。</span>
    <span id="sign_2">—— 《羊道 春牧场》李娟</span>
    </div>
  </div>
  <div id="box_recommendation">
    <div id="box_recommendation_book">
      <div id="box_book">
        <img :src=book1.book_pic style="height:80px;width:60px"> 
        <el-button style="padding:3px 3px" type="text" id="book_name" @click="$router.push({name:'BookDetails',params:{isbn: book1.isbn}})">{{book1.book_name}}</el-button>
        <div id="book_writer">{{book1.book_writer}}</div>
      </div>
      <div id="box_book">
        <img :src=book2.book_pic style="height:80px;width:60px">
        <el-button style="padding:3px 3px" type="text" id="book_name" @click="$router.push({name:'BookDetails',params:{isbn: book2.isbn}})">{{book2.book_name}}</el-button>
        <div id="book_writer">{{book2.book_writer}}</div>
      </div>
      <div id="box_book">
        <img :src=book3.book_pic style="height:80px;width:60px">
        <el-button style="padding:3px 3px" type="text" id="book_name" @click="$router.push({name:'BookDetails',params:{isbn: book3.isbn}})">{{book3.book_name}}</el-button>
        <div id="book_writer">{{book3.book_writer}}</div>
      </div>
    </div>
    <hr style="width:90%; margin-top:10px; margin-bottom:6px;"/>
    <div id="box_list">
      <el-button :span=14   id="list_name" @click="$router.push({name:'BookList',params:{booklist_id:booklist1.booklist_id}})">{{booklist1.booklist_name}}</el-button>
      <el-button :span=14 style="margin-left:0;margin-top:3px;"  id="list_name" @click="$router.push({name:'BookList',params:{booklist_id:booklist2.booklist_id}})">{{booklist2.booklist_name}}</el-button>
    </div>
  </div>
  <FooterBar></FooterBar>
</div>
    
</template>

<script>
class book{
  constructor(isbn,book_name,book_pic,book_writer){
    this.isbn=isbn;
    this.book_name=book_name;
    this.book_pic=book_pic;
    this.book_writer=book_writer;
  }
}
class booklist{
  constructor(booklist_id,booklist_name){
    this.booklist_id=booklist_id;
    this.booklist_name=booklist_name;
  }
}
import FooterBar from "../components/FooterBar"
export default {
  name: 'Homepage',
  components: {
        FooterBar,
    },
  data () {
    return {
      nowDate:"",
      nowWeek:"",
      books:"",
      lists:"",
      book1:"",
      book2:"",
      book3:"",
      user_id:"1",
      booklist1:"",
      booklist2:""
    };
  },
  created(){
      //Load the date
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let weekday = ["","星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
      this.nowWeek = weekday[week];
      this.nowDate = yy + "." + mm + "." + dd;
      this.book1=new book("9787535688255","鸟瞰古文明","https://img3.doubanio.com/view/subject/l/public/s33475751.jpg" ,"[法]让-克劳德·戈尔万");
      this.book2=new book("9787544276986","你当像鸟飞往你的山","https://img9.doubanio.com/view/subject/l/public/s33492346.jpg","[美]塔拉·韦斯特弗");
      this.book3=new book("9787108018809","我们仨","https://img3.doubanio.com/view/subject/l/public/s1015872.jpg","杨绛");
      this.booklist1=new booklist(1,"2020奥斯卡提名作品原著");
      this.booklist2=new booklist(2,"豆瓣2019最受关注图书");
      this.user_id=localStorage.getItem('userId');
      if (this.login()){
        this.getRecBook();
        this.getRecBookList();
      }

      
  },
  methods:{
    getRecBook(){
        var self=this;
        this.$axios.get('/books//recommended_books/'+this.user_id)
        .then(response=>{
            self.book1.isbn= response.data[0].isbn;
            self.book1.book_name=response.data[0].name;
            self.book1.book_pic=response.data[0].pic;
            self.book1.writer=response.data[0].writer;
            self.book2.isbn= response.data[1].isbn;
            self.book2.book_name=response.data[1].name;
            self.book2.book_pic=response.data[1].pic;
            self.book2.writer=response.data[1].writer;
            self.book3.isbn= response.data[2].isbn;
            self.book3.book_name=response.data[2].name;
            self.book3.book_pic=response.data[2].pic;
            self.book3.writer=response.data[2].writer;
        })
    },
    getRecBookList(){
      var self=this;
      this.$axios.get('/booklists//recommended_booklists/'+this.user_id)
      .then(response=>{
        self.booklist1.booklist_id=response.data[0].id;
        self.booklist1.booklist_name=response.data[0].name;
        self.booklist2.booklist_id=response.data[1].id;
        self.booklist2.booklist_name=response.data[1].name;
      })
    },
    login() {
        console.log('local id', localStorage.getItem('userId'))
        var res = localStorage.getItem('userId')
        if(res == null) return false;
        else {
            
            return true;
        }
    },
      routeTo(name, params) {
       this.$router.push({name, params});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#homepage-container{
    background: url('../assets/img/homepagebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: fixed;
}
#day_card {
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
#box_sign{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  justify-content: space-around;
}
#box_recommendation{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
#box_recommendation_book{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 22px;
}
#box_book{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 120px;
}
#box_list{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  
}
#box_date{
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
#sign_1{
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  text-align: right;
  font-family:"等线","微软雅黑","宋体";
}
#sign_2{
  font-size: 12px;
  font-weight: 500;
  margin-bottom:5px;
  text-align: right;
  font-family:"等线","微软雅黑","宋体";
}
#book_name{
  margin-top:2px;
  font-size: 14px;
  font-weight: 500;
  color: #464543;
}
#book_writer {
  font-size: 12px;
  font-weight: 100;
  color: #696767;
}
#list_name{
  border:0;
  background-color: rgba(0,0,0,0);
  font-size:16px;
}
#date_font{
  font-family: "Times New Roman", Times, serif;
}
#week_font{
  font-family: "微软雅黑","宋体";
}
</style>