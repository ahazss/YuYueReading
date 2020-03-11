<template>
<div class="login-container">
    <el-button plain icon="el-icon-arrow-left" class="return" @click="routeTo('Myaccount')">返回</el-button>
    <el-form class="login-card">
      <el-form-item label="账号" prop="phone">
        <el-input v-model="loginForm.phone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="phone">
        <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <div class="login-button">
        <el-button style="flex-grow:2" @click="routeTo('Register')">注 册</el-button>
        <el-button style="flex-grow:2" type="primary" id="button2" v-on:click="login">登 录</el-button>
      </div>
    </el-form>     
</div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                phone:'',
                password:''
            },
            responseResult: [],
        }
    },
    methods: {
        routeTo(name, params) {
           this.$router.push({name, params});
        },
        login() {
            const form = {
                phone: this.loginForm.phone,
                password: this.loginForm.password
            }
            this.$store.dispatch('profile/getAuthority', form)
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    background: url('~@/../src/assets/img/loginbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height:100%;
    width:100%;
    position: fixed;
}

.login-card {
    margin-top:40%;
    margin-left:13%;
    width:75%;
    background-color: rgba(0,0,0,0)
}

.login-button {
    margin-top:15%;
    display: flex;
    justify-content: center;
}

.return {
    padding:0;
    background: rgba(0,0,0,0);
    margin-left: 4px;
    margin-top: 6px;
    width: 15%;
    height: 5%;
    border: 0px;
}

</style>

<style>
.el-input__inner {
	border:0px;
}

.el-form-item {
    margin-bottom: 14px;
}

</style>