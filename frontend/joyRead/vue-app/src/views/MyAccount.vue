<template>
  <div class="myaccount-container">
      <div class="myaccount-top">
          <el-button icon="el-icon-setting" class="settings"  @click="routeTo('Settings')"></el-button>
          <el-button icon="el-icon-message" class="settings"></el-button>
      </div>
      <div v-if="login()">
      <div class="myaccount-user">
          <el-avatar :src='imgUrl()' style="height:90px; width: 90px;"></el-avatar>
          <div style="font-size:22px;margin-left:7%;">{{user.name}}</div>
      </div>
      <div class="myaccount-inform">
          <div class="myaccount-item">
              <span>阅读天数</span><br/>
              <span style="font-size: 28px; color:#fd9b1c;">{{data.days}}</span>
              <span>天</span>
          </div>
          <div class="myaccount-item">
              <span>总图书数</span><br/>
              <span style="font-size: 28px; color:#fd9b1c">{{data.books}}</span>
              <span>本</span>
          </div>
          <div class="myaccount-item">
              <span>总阅读数</span><br/>
              <span style="font-size: 28px; color:#fd9b1c">{{data.reads}}</span>
              <span>本</span>
          </div>
          <div class="myaccount-item">
              <span>记录书摘</span><br/>
              <span style="font-size: 28px; color:#fd9b1c">{{data.notes}}</span>
              <span>条</span>
          </div>           
      </div>
      </div>
      <div v-else class="visitor">
          <div class="myaccount-user">
             <el-avatar :src='imgUrl()' style="height:90px; width: 90px;"></el-avatar>
             <div style="font-size:22px;margin-left:7%;">未登录</div>
           </div>
          <el-button type="primary" class="myaccount-login" @click="routeTo('Login')">前往登录/注册</el-button>
      </div>
      <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../components/FooterBar"

export default {
    name: 'MyAccount',
      components: {
        FooterBar,
    },
    data() {
        return {
            user: {
                name: '张是是',
            },
            data: {
                days: '36',
                books: '14',
                reads: '6',
                notes:'15',
            }
        }
    },
    methods: {
        login() {
            console.log('local id', localStorage.getItem('id'))
            var res = localStorage.getItem('id')
            if(res == null) return false;
            else {
                this.user.name = localStorage.getItem('name')
                return true;
            }
        },
        routeTo(name, params) {
            this.$router.push({name,params})
        },
        imgUrl() {
            var res = localStorage.getItem('avatar')
            if(res == null) return 'http://q6vr3uv5e.bkt.clouddn.com/avatar.png'
            else return res;
        }
    }
}
</script>

<style lang="scss" scoped>
.myaccount-container {
    background: url('~@/../src/assets/img/myaccountbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height:100%;
    width:100%;
    position: fixed;
}

.myaccount-top {
    display:flex;
    justify-content: space-between;
}

.myaccount-user {
    display: flex;
    margin-top: 6%;
    margin-left: 4%;
}

.settings {
    padding:0;
    background: rgba(0,0,0,0);
    margin-top: 16px;
    width: 15%;
    height: 5%;
    border: 0px;
    font-size: 24px;
}

.myaccount-inform {
    display: flex;
    justify-content: space-around;
}

.myaccount-item {
    margin-top: 12px;
    font-size: 16px;
    color: #7a7878;
}

.myaccount-login {
    margin-top: 45%;
    margin-left:30%;
    font-size: 18px;
}

</style>