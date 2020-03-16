<template>
  <el-container>
      <el-footer style ="height:50px;">
          <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="4">
                  <div class="item" @click="clickItem('/')" :class="{active: $route.path==='/'}">
                  <i class="el-icon-house" style="font-size:20px;"></i><p>首页</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item" @click="clickItem('/want')" :class="{active: $route.path==='/want'}">
                  <i class="el-icon-collection-tag" style="font-size:20px;"></i><p>想读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item" @click="clickItem('/reading')" :class="{active: $route.path==='/reading'}">
                  <i class="el-icon-reading" style="font-size:20px;"></i><p>在读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item"  @click="clickItem('/have')" :class="{active: $route.path==='/have'}">
                  <i class="el-icon-collection" style="font-size:20px;"></i><p>已读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item"  @click="clickItem('/myaccount')" :class="{active: $route.path==='/myaccount'}">
                  <i class="el-icon-user" style="font-size:20px;"></i><p>我的</p></div>
              </el-col>
            </el-row>
        </el-footer>
    </el-container>
    
</template>
 
<script>
    export default {
      name: "FooterBar",
      methods:{
        clickItem:function(path){
            this.$router.push(path);
            }
        }
    }
</script>
 
<style lang="scss" scoped>
  .el-footer{
    position: fixed;
    width: 100%;
    bottom:0px;
    border-top:1px solid #d2d2d2;
    background-color: #ffffff;
    text-align: center;
  }

  .el-footer>.el-row{
      margin-top: 7px;
  }
  .item{
    float:center;
  }
  .item p{
    margin:0;
    font-size: 13px;
  }
  .active{
    color: #feb353;
  }
</style>
