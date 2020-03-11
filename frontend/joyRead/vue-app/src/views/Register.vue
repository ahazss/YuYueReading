<template>
<div class="register-container">
   <el-button plain icon="el-icon-arrow-left" class="return" @click="routeTo('Login')">返回</el-button>
   <div style="font-size:22px;color:#feb353; margin-left:38%; margin-top: 3%;">用户注册</div>
   <el-form ref="registerForm" :model="registerForm" label-width="70px" class="register-card">
      <el-form-item label="用户名">
         <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="账户">
         <el-input v-model="registerForm.phone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
         <div class="register-code">
             <el-input style="flex-grow:2" v-model="registerForm.code" placeholder="请输入验证码"></el-input>
             <el-button type="primary" class="getcode" @click="verification()">获取验证码</el-button>
         </div>
      </el-form-item>
      <el-form-item label="设置密码">
         <el-input v-model="registerForm.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <div class="register-button">
         <el-button style="flex-grow:2" type="primary" @click="onSubmit">确定</el-button>
         <el-button style="flex-grow:1"  @click="routeTo('Login')">取消</el-button>
      </div>
    </el-form>
</div>
</template>

<script>
import qs from 'qs'

export default {
    name: 'Register',
    data() {
        return {
            registerForm: {
                username: '',
                phone: '',
                code: '',
                password: '',
            },
            verificationCode: '',
        }
    },
    methods: {
        onSubmit() {

        },
        routeTo(name, params) {
           this.$router.push({name, params});
        },
        verification() {
            var self = this
            console.log(`phone:`, this.registerForm.phone)
            this.$axios.get('/users//verification/'+ this.registerForm.phone)
            .then(response => {
                self.verificationCode = response.data
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.register-container {
    background: url('~@/../src/assets/img/registerbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height:100%;
    width:100%;
    position: fixed;
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

.register-card {
    width: 85%;
    margin-left: 6%;
    margin-top: 12%;
}

.register-code {
    display: flex;
}

.getcode {
    padding:2px;
    height: 30px;
    margin-top: 5px;
    margin-left: 2px;
}

.register-button {
    display: flex;
    margin-top: 15%;
    margin-left: 15%;
    width: 70%;
}
</style>

<style>
.el-input__inner {
	border:0px;
}
</style>