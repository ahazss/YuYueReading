<template>
<div>
  <el-container id="total">
    <el-aside style="width:100px;">
      <el-image :src=item.pic class="image"></el-image></el-aside>
    <el-container>
    <el-header style="text-align: left;">
      <span class="title">{{ item.name }}</span>
      <p class="author"> {{ item.writer }}</p>
    </el-header>
    <el-container>
    <el-header style="height: 24px;">
      <p v-if="status === 2" id="detail_time">加入书架时间 {{item.beginTime}}</p>
      <p v-else-if="status === 3" id="detail_time">最近一次阅读 {{item.lastTime}}</p>
      <p v-else-if="status === 4" id="detail_time">结束阅读时间 {{item.lastTime}}</p>
      <p v-else id="detail_time">{{detail_time}}</p>
    </el-header>
    </el-container>
    <el-footer class="item-footer"> 
      <p v-if="status === 3" id="detail_percent">阅读至 {{(item.percentage*100).toFixed(2)}}%</p>
      <p v-else-if="status === 4">
        <el-rate style="float:left; width:130px; margin-top: 8px;"
          v-model=item.point disabled  show-score text-color="#ff9900"
          :colors="colors">
        </el-rate>
      </p>
      <el-button id="turn_detail" size="mini" type='primary' @click="$router.push({name:'BookDetails',params:{isbn:item.isbn}})">详情</el-button>
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
          colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
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
  height: 120px;
}

.image {
  height: 120px;
  margin-left: 5%;
  margin-right: 3%;
  display: flex;
  }

.author{
  font-size: 14px;
  margin-top: 8px;
}


#detail_time{
  font-size: 12px;
  color: gray;
  float: left;
  margin-bottom: 10px;
}

#detail_percent{
  font-size: 13px;
  float: left;
  color: #feb353;
  margin-top: 8px;
}
  
#turn_detail{
  line-height:15px;
  font-size: 11px;
  float:right;
  margin-right: 0px;
  position: relative;
  margin-top: 2%;
}
</style>

<style>
.el-footer {
  padding-right:0;
}

.el-rate__icon {
  font-size: 19px;
  margin-right: 2px;
}
</style>