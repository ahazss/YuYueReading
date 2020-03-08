<template>
<div>
    <el-form ref="bookForm" :model="bookForm" label-width="70px">
        <el-form-item label="书名">
            <el-input v-model="bookForm.bookname"></el-input>
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
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="$router.back(-1)">取消</el-button>
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
                bookname:'',
                isbn:'',
                writer:'',
                publisher:'',
            },
        };
    },
    methods:{
        onSubmit(){
            console.log(this.bookForm);
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
</style>