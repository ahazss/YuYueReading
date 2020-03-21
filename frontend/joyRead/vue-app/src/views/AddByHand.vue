<template>
<div id="body">
    <div class="head-title">
        <el-card id="item-detail" style="height:44px;">
            <el-button plain icon="el-icon-arrow-left" class="return" @click="routeTo('WantToRead')">返回</el-button>
            添加图书
        </el-card>
    </div>
    <el-form ref="bookForm" :model="bookForm" label-width="80px">
        <el-form-item label="书名">
            <el-input v-model="bookForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者">
            <el-input v-model="bookForm.writer"></el-input>
        </el-form-item>
        <el-form-item label="ISBN">
            <el-input v-model="bookForm.isbn"></el-input>
        </el-form-item>
        <el-form-item label="出版社">
            <el-input v-model="bookForm.publisher"></el-input>
        </el-form-item>
        <el-form-item label="页数">
            <el-input v-model="bookForm.page"></el-input>
        </el-form-item>
        <el-form-item style="margin-top:15%;">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button style="margin-left:10%;" @click="$router.back(-1)">取消</el-button>
        </el-form-item>
    </el-form>
    <FooterBar></FooterBar>
</div>
</template>

<script>
import FooterBar from "../components/FooterBar"
export default {
    name:'AddByHand',
    components:{
        FooterBar,
    },
    data(){
        return{
            bookForm:{
                name:'',
                isbn:'',
                writer:'',
                publisher:'',
                page:'',
            },
        };
    },
    methods:{
        onSubmit(){
            console.log(this.bookForm);
            var params = {
                isbn:this.bookForm.isbn,
                name:this.bookForm.name,
                writer:this.bookForm.writer,
                publisher:this.bookForm.publisher,
                introduction:"暂无简介",
                pages:this.bookForm.page,
            }
            console.log('params',params)
            this.$axios.post('/books/add?', params)
            this.$message({
                message: '添加成功',
                type: 'success'
            })
            this.$router.go(-1)
        },
        routeTo(name, params) {
           this.$router.push({name, params});
        },
    }
};
</script>

<style lang="scss" scoped>
#item-detail{
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    border-top:0;
    border-left: 0;
    border-right:0;
    padding: 0;
    font-size: 18px;
}

.return {
    padding:0;
    background: rgba(0,0,0,0);
    margin-right: 25%;
    margin-top: 6px;
    width: 15%;
    height: 5%;
    border: 0px;
}

.el-form{
    margin-top: 8%;
}

.el-input{
    margin-right: 5%;
    width: 80%;
}
#body{
    background: url('../assets/img/listbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: fixed;
}
</style>