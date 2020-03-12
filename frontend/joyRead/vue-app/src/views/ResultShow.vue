<template>
<div>
<el-row type="flex" class="row-bg" justify="space-around" style="margin-top:2%;">
<el-col :span="4"><el-button icon="el-icon-back" @click="goBack" circle></el-button></el-col>
<el-col :span="16"><el-input v-model="keywords" placeholder="请输入内容"></el-input></el-col>
<el-col :span="4"><el-button icon="el-icon-search" circle></el-button></el-col>
</el-row>
</div>
</template>

<script>
export default {
    name:'ResultShow',
    components:{

    },
    data(){
        return{
            keywords:'',
        }
    },
    methods:{
        goBack() {
        this.$router.go(-1);
        console.log('go back');
      }
    }
}
</script>

<style lang="scss" scoped>

</style>