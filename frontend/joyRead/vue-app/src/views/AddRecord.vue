<template>
<div class="addRecord-container">
    <div class="head-title">
        <el-card id="item-detail" style="height:44px;">
            <el-button plain icon="el-icon-arrow-left" class="return" @click="$router.push({name:'BookDetails',params:{isbn:isbn}})">返回</el-button>
            添加书摘
        </el-card>
    </div>
    <el-form class="record-card">
        <el-form-item label="起始页码">   
            <el-input v-model="form.startpage" placeholder="请输入阅读起始页码" style="width: 70%;"></el-input>          
         </el-form-item>
        <el-form-item label="终止页码">
          <el-input v-model="form.endpage"  placeholder="请输入阅读结束页码" style="width: 70%;"></el-input>
        </el-form-item>
        <el-form-item label="书摘内容">
          <el-input type="textarea" :rows="9" v-model="form.text" class="input"></el-input>
        </el-form-item>
        <div class="register-button">
         <el-button style="flex-grow:2" type="primary" @click="addRecord()">确定</el-button>
         <el-button style="flex-grow:1"  @click="$router.push({name:'BookDetails',params:{isbn:isbn}})">取消</el-button>
      </div>
    </el-form>
    
</div>
    
</template>

<script>
export default {
    name:'AddRecord',
    data(){
        return{
            user_id:"0",
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
                id:this.user_id,
                isbn:this.isbn,
                startPage: this.form.startpage,
                endPage: this.form.endpage,
                note:this.form.text
            }
            this.$axios.put('api/records/add/',form)
            //this.$store.dispatch('profile/getAuthority', form)
        }
    },
    created(){
        this.user_id=localStorage.getItem('userId');
        this.isbn=this.$route.params.isbn;

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

.return {
    padding:0;
    background: rgba(0,0,0,0);
    margin-right: 25%;
    margin-top: 6px;
    width: 15%;
    height: 5%;
    border: 0px;
}

#item-detail{
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    border-top:0;
    border-left: 0;
    border-right:0;
    padding: 0;
    font-size: 18px;
}

.addRecord-container {
     background: url('../assets/img/scan-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: fixed;
}

.input {
    width: 70%;
}

.register-button {
    display: flex;
    margin-top: 10%;
    margin-left: 15%;
    width: 70%;
}
</style>
