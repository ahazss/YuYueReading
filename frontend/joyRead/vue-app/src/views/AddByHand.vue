<template>
<div id="body">
    <el-container>
    <el-header style="border-bottom:1px solid #d2d2d2;background-color: #f8a232;">
    <center><p style="margin-top:4%;color:#ffffff;">填写详情</p></center>
    </el-header>
    </el-container>
    <el-form ref="bookForm" :model="bookForm" label-width="70px">
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
        <el-form-item style="margin-bottom:45%;">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button style="margin-left:18%;" @click="$router.back(-1)">取消</el-button>
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
        goBack() {
        this.$router.go(-1);
        console.log('go back');
        },
    }
};
</script>

<style lang="scss" scoped>
.el-form{
    margin-top: 8%;
}

.el-input{
    margin-right: 5%;
    width: 80%;
}
#body{
    background: url('../assets/img/scan-bg.png');
    background-repeat:no-repeat;
    background-position: absolute;;
    background-size:100% 100%;
}
</style>