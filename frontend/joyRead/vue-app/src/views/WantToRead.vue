<template>
  <div>
    <div>Welcome to WantToRead page of Joy Read!</div>
    
     <el-button id="addbtn" type="primary" icon="el-icon-plus" 
     circle @click="centerDialogVisible = true"></el-button>

    <el-dialog title=" "
    :visible.sync="centerDialogVisible"
    width="70%" center>
    <el-row><i class="el-icon-camera" style="font-size:20px;"> 扫码录入</i></el-row>
    <el-row><i class="el-icon-search" style="font-size:20px;"
              @click="routeTo('ResultShow')"> 搜索书籍</i></el-row>
    <el-row><i class="el-icon-edit" style="font-size:20px;"
              @click="routeTo('AddByHand')"> 手动录入</i></el-row>
    </el-dialog>

        <FooterBar></FooterBar>
  </div>
  
</template>

<script>
import FooterBar from "../components/FooterBar"

export default {
  name: 'WantToRead',
  components: {
        FooterBar,
    },
  data () {
    return {
       centerDialogVisible: false
    }
  },
  methods:{
    routeTo(name, params) {
        this.$router.push({name, params});
      },
  }
}
</script>

<style >
#addbtn{
  bottom: 13%;
  right: 7%;
  position: fixed;
}

i{
  text-align: center;
}
</style>
