<template>
<div>
    <el-button plain icon="el-icon-arrow-left" class="return" @click="routeTo('BookDetails')">返回</el-button>
    <el-form class="record-card">
        <el-form-item label="阅读时间">
            <el-col :span="11">
             <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;">
             </el-date-picker>
             </el-col>
        </el-form-item>
        <el-form-item label="起始页码">   
            <el-input v-model="form.startpage" style="width: 20%;"></el-input>          
         </el-form-item>
        <el-form-item label="终止页码">
          <el-input v-model="form.endpage" style="width: 20%;"></el-input>
        </el-form-item>
        <el-form-item label="书摘内容">
             <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-button style="flex-grow:2;" type="primary" id="button2" v-on:click="addRecord" >添加</el-button>
    </el-form>
    
</div>
    
</template>

<script>
export default {
    name:'AddRecord',
    data(){
        return{
            form:{
            startpage:"",
            endpage:"",
            date:"",
            text:""
            }
        }
    },
    methods:{
        routeTo(name, params) {
           this.$router.push({name, params});
        },
        addRecord() {
            const form = {
                startpage: this.form.startpage,
                endpage: this.form.endpage,
                date:this.form.date,
                text:this.form.text
            }
            //this.$store.dispatch('profile/getAuthority', form)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.record-card {
    margin-top:20%;
    margin-left:13%;
    width:80%;
    background-color: rgba(0,0,0,0)
}
</style>