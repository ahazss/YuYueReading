<template>
<div>
   <el-button plain icon="el-icon-arrow-left" class="return"  @click="routeTo('Myaccount')">设置</el-button>
   <el-menu class="setting-form">
      <div class="setting-title">个人资料</div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-arrow-right"></i>
          <span style="font-size:16px;">基本信息</span>
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-arrow-right"></i>
          <span style="font-size:16px;">账户与安全</span>
        </template>
      </el-submenu>
      <div class="setting-title">阅读模式</div>
      <div class="settings-radio">
        <el-radio v-model="radio" label="1" class="radio">自由阅读</el-radio>
        <el-radio v-model="radio" label="2" class="radio">计划阅读</el-radio>
      </div>
      <div class="setting-title">通知设置</div>
      <div class="settings-inform">
          <div>开启全局推送</div>
          <div>
              <el-switch v-model="value1"
                  active-color="#feb353" inactive-color="#c0bbbb">
              </el-switch>
          </div>
      </div>
      <div class="setting-title">关于与帮助</div>
      <el-menu-item index="3">
        <i class="el-icon-arrow-right"></i>
        <span slot="title" style="font-size:16px;">关于</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-arrow-right"></i>
        <span slot="title" style="font-size:16px;">帮助与反馈</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-arrow-right"></i>
        <span slot="title" style="font-size:16px;">版本更新</span>
        <span style="float:right;">当前版本(0.0.1)</span>
      </el-menu-item>
      <el-button type="danger" class="settings-out" @click="doClear()">退出登录</el-button>
    </el-menu>
</div>
</template>

<script>
export default {
    inject:['reload'],
    name: "Settings",
    data() {
        return {
            radio:'1',
            value1:'false',
        }
    },
    methods: {
      routeTo(name, params) {
           this.$router.push({name, params});
      },
      doClear() {
        localStorage.clear();
        this.reload();
      }
    }
}
</script>

<style lang="scss" scoped>
.return {
    padding:0;
    background: rgba(0,0,0,0);
    margin-left: 6px;
    margin-top: 16px;
    width: 15%;
    height: 5%;
    border: 0px;
    font-size: 18px;
}

.setting-form {
    margin-top: 5%;
}

.setting-title {
    color: #feb353;
    font-size: 15px;
    margin-left: 4%;
    margin-bottom: 4px;
}

.settings-radio {
    display: flex;
    flex-direction: column;
    margin-left: 7%;
    margin-top: 5%;
}

.radio {
    margin-top: 2%;
    margin-bottom: 5%;
}

.settings-inform {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 8%;
    margin-bottom: 5%;
}

.settings-out {
    margin-top: 6px;
    margin-left: 35%;
    font-size: 16px;
}
</style>

<style>
.el-radio__label {
    font-size: 16px;
}
</style>