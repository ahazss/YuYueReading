<template>
<div>
  <el-container id="total">
    <el-aside style="width:130px;">
      <el-image :src=item.pic class="image"></el-image></el-aside>
    <el-container>
    <el-header style="text-align: left;">
      <span class="title">{{ item.name }}</span>
      <p class="author"> {{ item.writer }}</p>
    </el-header>
    <el-container>
    <el-header>
      <p v-if="status === 3" id="detail_percent">阅读至 {{(item.percentage*100).toFixed(2)}}%</p>
      <p v-else id="detail_percent">{{detail_percent}}</p>
      <el-button id="turn_detail" size="mini" type='primary' @click="$router.push({name:'BookDetails',params:{isbn:item.isbn}})">详情</el-button>
    </el-header>
    </el-container>
    <el-footer> 
      <p v-if="status === 2" id="detail_time">加入书架时间 {{item.beginTime}}</p>
      <p v-else-if="status === 3" id="detail_time">最近一次阅读 {{item.lastTime}}</p>
      <p v-else-if="status === 4" id="detail_time">结束阅读时间 {{item.lastTime}}</p>
      <p v-else id="detail_time">{{detail_time}}</p>
    </el-footer>
    </el-container>
  </el-container>
  <hr style="width:94%; margin-top:12px; margin-bottom:4px;
             margin-left:3%;margin-right:3%;"/>
</div>
</template>

<script>
    export default {
      name: "BookItem",
      props: [
        'item',
        'status',
      ],
      data(){
        return{
          title:'',
          author:'',
          detail_percent:'',
          detail_time:'',
        }
      },
      methods:{
        }
    }
</script>

<style lang="scss" scoped>
#total{
  margin-top: 10px;
  margin-left: 6%;
  margin-right: 4%;
  height: 145px;
}

.image {
  height: 140px;
  margin-top: 5px;
  margin-left: 15%;
  margin-right: 3%;
  display: flex;
  }

.title{  
  margin-top: 2px;
}

.author{
  font-size: 14px;
  margin-top: 8px;
}

#detail_time{
  font-size: 10px;
  text-align: bottom;
  float: left;
}

#detail_percent{
  font-size: 12px;
  float: left;
  color: gray;
}
  
#turn_detail{
  line-height:15px;
  font-size: 11px;
  float:right;
  margin-right: 0px;
  position: relative;
}
</style>