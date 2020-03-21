<template>
    <el-container style="height:60px;margin-bottom:20px" >
        <el-aside style="width:100px;height:50px" >
            <div class="border_weekday" style="height:20px">
                {{item.date}}
            </div>

            <div  class="border_range" style="height:27px">
                {{item.startPage}}-{{item.endPage}}
            </div>
        </el-aside>
        
        <el-main class="border_record" style="width:200px;height:50px;padding:2px">
                {{item.note}}
        </el-main>
        
    </el-container>
</template>

<script>
export default {
    name:"ReadingRecords",
    props:[
        'item'
    ],
    data(){
        return{
            data:'12.21',
            startpage:100,
            endpage:200,
            text:"我的未来已经无法和你再走在一起了，就算我们相遇了，对你而言也不会是幸福吧，所以我想要活下去，只是想要守护着你，像幽灵一般的存在。"
        }
    },
    methods:{

    }

}
</script>

<style lang="scss" scoped>
.border_weekday{
    border-radius: 0px;
    border: 1px;
    border-style: solid;
    text-align: center;
    font-size: 15px;
}
.border_record{
    border-radius: 0px;
    border: 1px;
    border-style: solid;
    border-left-style: none;
    line-height: 46px;
    text-align: left;
    line-height: 110%;
    font-size: 14px;
    font-family:"微软雅黑","宋体";
}
.border_range{
    border-radius: 0px;
    border: 1px;
    border-style: solid;
    border-top-style: none;
    line-height: 27px;
    text-align: center;
    font-size: 15px;
}


</style>