<template>
  <el-container style="margin-bottom: 20px;">
    <el-aside style="width:150px;">
      <img src="https://img3.doubanio.com/view/subject/l/public/s4610502.jpg" class="image"></el-aside>
    <el-container>
    <el-header style="text-align: left;">
      <span class="title">{{ title }}</span>
      <p class="author"> {{ author }}</p>
    </el-header>
    <el-container>
    <el-header>
      <p id="detail_percent">{{ detail_percent }}</p>
      <el-button id="turn_detail" size="mini" type='primary'>详情</el-button>
    </el-header>
    </el-container>
    <el-footer>
      <p id="detail_time">{{detail_time}}</p>
    </el-footer>
    </el-container>
  </el-container>
</template>

<script>
    export default {
      name: "BookItem",
      props: [
        'item',
      ],
      data(){
        return{
          title:'标题',
          author:'作者',
          detail_percent:'',
          detail_time:'',
        }
      },
      methods:{
        
        }
    }
</script>

<style lang="scss" scoped>
.image {
  height: 150px;
  margin-top: 5px;
  margin-left: 12%;
  display: flex;
  }

.title{  
  margin-top: 0px;
}

.author{
  font-size: 15px;
  margin-top: 8px;
}

#detail_time{
  font-size: 15px;
  text-align: bottom;
  float: left;
}

#detail_percent{
  font-size: 13px;
  float: left;
  color: gray;
}
  
#turn_detail{
  line-height:15px;
  font-size: 12px;
  float:right;
  margin-right: 5%;
  position: relative;
}
</style>