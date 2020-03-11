<template>
<div>

    <div id="box_book" style="margin-top:5px">
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
    <div id="box_details">
        <div v-if="status==3||status==4">
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
            <ReadingRecords></ReadingRecords>
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

  name: 'Bookdetails',
  components:{
      ReadingRecords,
  },
  data () {
    return {
        bookname:"白夜行",//book name
        writer:"东野圭吾",//Book writer
        month:"3",//Last read month
        date:"5",//Last read date
        percentage:40,//Percentage of reading progress
        status:3,//Book status returned by api/books/information/detail
        score:4,//The number of star
        description:"《白夜行》是日本作家东野圭吾创作的长篇小说，也是其代表作。该小说于1997年1月至1999年1月间连载于期刊，单行本1999年8月在日本发行。故事围绕着一对有着不同寻常情愫的小学生展开。1973年，大阪的一栋废弃建筑内发现了一具男尸，此后19年，嫌疑人之女雪穗与被害者之子桐原亮司走上截然不同的人生道路，一个跻身上流社会，一个却在底层游走，而他们身边的人，却接二连三地离奇死去，警察经过19年的艰苦追踪，终于使真相大白。小说将无望却坚守的凄凉爱情和执著而缜密的冷静推理完美结合。2006年，小说被改编成同名电视连续剧，一举囊括第48届日剧学院赏四项大奖。"
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