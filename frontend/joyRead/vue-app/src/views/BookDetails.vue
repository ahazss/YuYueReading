<template>
<div>

    <div id="box_book">
        <img src="./../assets/img/book_pic_2.png" style="height:30%;width:30%;margin-left:10px">
        <div id="book_info">
            <div id="book_name">{{bookname}} </div>
            <div id="writer_name">{{writer}}</div>
            <div id="box_read_time">
                <div id="read_time" style="margin-right:10px">上次阅读时间</div> 
                <div id="number">{{month}}</div>
                <div id="read_time">月</div>
                <div id="number">{{date}}</div>
                <div id="read_time">日</div>
            </div>
            <el-progress :text-inside="true" :stroke-width="19" :percentage="percentage"  style="width:195px;margin-bottom:3px" v-if="status==3"></el-progress>
            <div v-if="status==0||status==1||status==2||status==4" style="margin-bottom:21px"></div>
            
            <el-button-group v-if="status==2 || status==3">
                <el-button type="primary">阅读完成</el-button>
                <el-button type="primary">添加记录</el-button>
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
            <el-button v-else-if="status==0||status==1" type="primary">
                加入想读
            </el-button>
        </div>
    </div>
    
    <el-divider content-position="center" v-if="status==3||status==4">书 摘</el-divider>
    <el-divider content-position="center" v-if="status==0||status==1||status==2">图 书 简 介</el-divider>


    
</div>
</template>

<script>
export default {
  name: 'Bookdetails',
  data () {
    return {
        bookname:"白夜行",//book name
        writer:"东野圭吾",//Book writer
        month:"3",//Last read month
        date:"5",//Last read date
        percentage:40,//Percentage of reading progress
        status:3,//Book status returned by api/books/information/detail
        score:4,//The number of star
    };
  },
  computed:{

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
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
</style>