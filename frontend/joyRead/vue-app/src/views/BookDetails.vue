<template>
<div>
    <el-card id="item-detail">图书详情</el-card>
    <div id="box_book" style="margin-top:5px">
        <img :src='imgUrl(book_pic)' style="height:30%;width:30%;margin-left:10px">
        <div id="book_info">
            <div id="book_name">{{bookname}} </div>
            <div id="writer_name">{{writer}}</div>
            <div v-if="status==3||status==4" id="box_read_time">
                <div id="read_time" style="margin-right:10px">上次阅读时间</div> 
                <div id="number">{{month}}</div>
                <div id="read_time">月</div>
                <div id="number">{{date}}</div>
                <div id="read_time">日</div>
            </div>

            <el-progress :text-inside="true" :stroke-width="19" :percentage="(percentage*100).toFixed(2)"  style="width:195px;margin-bottom:3px" v-if="status==3"></el-progress>
            <div v-if="status==0||status==1||status==2||status==4" style="margin-bottom:21px"></div>
            
            <el-button-group v-if="status==2 || status==3">
                <el-button type="primary" @click="addHaveRead()">阅读完成</el-button>
                <el-button type="primary" @click="$router.push({name:'AddRecord',params:{isbn:isbn}})">添加记录</el-button>
            </el-button-group>
            <el-rate
                v-model="score"
                :max="5"
                :show-score="true"
                text-color="#ff9900"
                aria-valuenow="tmp_score"
                score-template="{value}"
                :allow-half="true"
                v-else-if="status==4"
                style="margin-bottom:1px"
                >
            </el-rate>
            <el-button v-else-if="status==0" @click="routeTo('Login')" type="primary">
                加入想读
            </el-button>
            <el-button v-else-if="status==1" @click="addWantToRead()"   type="primary">
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
        user_id:"1",
        isbn:"",
        bookname:"你当像鸟飞往你的山",//book name
        book_pic:"https://img9.doubanio.com/view/subject/l/public/s33492346.jpg",
        writer:"[美]塔拉·韦斯特弗",//Book writer
        month:"3",//Last read month
        date:"5",//Last read date
        percentage:0,//Percentage of reading progress
        status:0,//Book status returned by api/books/information/detail
        score:4,//The number of star
        description:"★ 奇迹！一部新人处女作，上市第一周即登上《纽约时报》畅销榜，至今已累计80周，仍高居Top1，全美销量破百万册，作者因此书被《时代周刊》评为“年度影响力人物”\r\n★ 比尔•盖茨年度荐书 第一名\r\n★ 美国亚马逊年度编辑选书 第一名\r\n★《纽约时报》《华尔街日报》《波士顿环球报》畅销书排行 第一名\r\n★ Goodreads读者票选超越米歇尔《成为》，获年度最佳图书\r\n★《洛杉矶时报》最佳传记奖\r\n★《纽约时报》《卫报》《华盛顿邮报》《泰晤士报》《星期日泰晤士报》《经济学人》《奥普拉杂志》、美国国家公共广播电台等二十多家权威媒体 年度图书\r\n一个惊人的故事，真正鼓舞人心。我在阅读她极端的童年故事时，也开始反思起自己的生活。《你当像鸟飞往你的山》每个人都会喜欢。它甚至比你听说的还要好。\r\n——比尔•盖茨\r\n教育意味着获得不同的视角，理解不同的人、经历和历史。接受教育，但不要让你的教育僵化成傲慢。教育应该是思想的拓展，同理心的深化，视野的开阔。它不应该使你的偏见变得更顽固。如果人们受过教育，他们应该变得不那么确定，而不是更确定。他们应该多听，少说，对差异满怀激情，热爱那些不同于他们的想法。\r\n——塔拉•韦斯特弗，《福布斯杂志》访谈\r\n你可以用很多说法来称呼这个全新的自我：转变，蜕变，虚伪，背叛。而我称之为：教育。\r\n——塔拉•韦斯特弗\r\n------------------------------------------------------------------\r\n★作者亲定中文版书名《你当像鸟飞往你的山》\r\n人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。\r\n只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。\r\n哈佛大学，剑桥大学，哲学硕士，历史博士……我知道，像我这样从垃圾堆里爬出来的无知女孩，能取得如今的成就，应当感激涕零才对。但我丝毫提不起热情。\r\n我曾怯懦、崩溃、自我怀疑，内心里有什么东西腐烂了，恶臭熏天。\r\n直到我逃离大山，打开另一个世界。\r\n那是教育给我的新世界，那是我生命的无限可能。"
    };
  },
  computed:{

  },
  methods:{
    routeTo(name, params) {
        this.$router.push({name, params});
    },
    imgUrl( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
        }
    },
    getBookDetails(){
        var self=this;
        this.$axios.get('/books/information/detail?id='+this.user_id+'&isbn='+this.isbn)
        .then(response=>{
            self.isbn=response.data.isbn;
            self.bookname=response.data.name;
            self.book_pic=response.data.pic;
            self.writer=response.data.writer;
            self.description=response.data.introduction;
            self.percentage=response.data.percentage;
            self.status=response.data.status;
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
#item-detail{
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    border-top:0;
    border-left: 0;
    border-right:0;
    text-align: center;
    padding: 0;
    font-size: 20px;
}
#box_book{
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
    margin-bottom: 10px;
}
#book_info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 20px;
}
#book_name{
    font-size: 20px;
    font-weight: 500;
    margin-bottom:5px;
    text-align: right;
    font-family:"微软雅黑","宋体";
}
#writer_name{
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 4px;
    font-family:"楷体","宋体";
}
#read_time{
    font-size:16px;
    font-weight: 500;
    font-family: "等线","宋体";
}
#number{
    font-size: 17px;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(248, 162, 50);
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
</style>