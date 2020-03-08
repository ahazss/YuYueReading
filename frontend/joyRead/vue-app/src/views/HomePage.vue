<template>

<div id="homepage-container">
  <div id="box_sign">
    <div id="box_date">
      <div id="date_font"  style="margin-right:50px;">{{nowDate}}</div>

      <div id="week_font" style="margin-left:20px;">{{nowWeek}}</div>
    </div>
    <img src="./../assets/img/sign_pic.png" style="height:75%;width:75%;margin-top:10px;margin-bottom:5px">
    <span id="sign_1">它们像人一样，生命中更多时间是用来等待的。</span>
    <span id="sign_2">—— 《羊道 春牧场》李娟</span>
  </div>
  <div id="box_recommendation">
    <div id="box_recommendation_book">
      <div id="box_book">
        <img src="./../assets/img/book_pic_1.png" style="height:60%;width:60%"> 
        <el-button style="padding:3px 3px" type="text" id="book_name">葡萄牙的高山</el-button>
      </div>
      <div id="box_book">
        <img src="./../assets/img/book_pic_2.png" style="height:60%;width:60%">
        <el-button style="padding:3px 3px" type="text" id="book_name">白夜行</el-button>
      </div>
      <div id="box_book">
        <img src="./../assets/img/book_pic_3.png" style="height:60%;width:60%">
        <el-button style="padding:3px 3px" type="text" id="book_name">挪威的森林</el-button>
      </div>
    </div>
    <span style="margin-top:3px;margin-bottom:3px;margin-left:10px;margin-right:10px;">——————————————</span>
    <div id="box_list">
      
      <el-button :span=14   id="list_name">茅盾文学奖获奖书单</el-button>
      <el-button :span=14 style="margin-left:0;margin-top:3px;"  id="list_name">诺贝尔文学奖获奖书单</el-button>
      
    </div>
  </div>
</div>
    
</template>

<script>
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
      lists:""
    };
  },
  created(){
      var _this=this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let weekday = ["","星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
      this.nowWeek = weekday[week];
      this.nowDate = yy + "." + mm + "." + dd;
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
  margin-top: 16px;
}
#box_book{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  font-size: 11px;
  font-weight: 100;
}
#list_name{
  font-size:17px;
  font-weight:600;
}
#date_font{
  font-family: "Times New Roman", Times, serif;
}
#week_font{
  font-family: "微软雅黑","宋体";
}

</style>
