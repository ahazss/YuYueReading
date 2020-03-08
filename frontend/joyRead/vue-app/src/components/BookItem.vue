<template>
  <el-container style="margin-bottom: 20px;">
    <el-aside style="width:150px;">
      <img src="https://img3.doubanio.com/view/subject/l/public/s4610502.jpg" class="image"></el-aside>
    <el-main style="text-align: left;">
      <span class="title">{{ title }}</span>
      <p class="author"> {{ author }}</p>
      <p class="detail1">{{ detail1 }}</p>
      <p class="detail2">{{detail2}}</p>
    </el-main>
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
          detail1:' ',
          detail2:'阅读huihu',
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

  .detail2{
    font-size: 15px;
    text-align: bottom;
  }
  
</style>