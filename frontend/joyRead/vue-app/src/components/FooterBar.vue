<template>
  <el-container>
      <el-footer>
          <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="4">
                  <div class="item" @click="clickItem('/')" :class="{active: $route.path==='/'}">
                  <i class="el-icon-house"></i><p>首页</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item" @click="clickItem('/want')" :class="{active: $route.path==='/want'}">
                  <i class="el-icon-collection-tag"></i><p>想读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item" @click="clickItem('/reading')" :class="{active: $route.path==='/reading'}">
                  <i class="el-icon-reading"></i><p>在读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item"  @click="clickItem('/have')" :class="{active: $route.path==='/have'}">
                  <i class="el-icon-collection"></i><p>已读</p></div>
                </el-col>
              <el-col :span="4">
                  <div class="item"><i class="el-icon-user"></i><p>我的</p></div>
                  </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>
 
<script>
    export default {
      name: "bottom",
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
    text-align: center;
  }

  .el-footer>.el-row{
      margin-top: 10px;
  }
  .item{
    float:center;
  }
  .item p{
    margin:0;
    font-size: 12px;
  }
  .active{
    color: #feb353;
  }
</style>