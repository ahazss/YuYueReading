<template>
  <div>
    <div id="count-head">—  共 {{items.length}} 本  —</div>
    <div v-for="(item,index) in items" :key="index">
      <BookItem :item=item :status=2></BookItem>
    </div>

     <el-button id="addbtn" type="primary" icon="el-icon-plus" size="large"
     circle @click="centerDialogVisible = true"></el-button>

    <el-dialog title="录入方式"
    :visible.sync="centerDialogVisible"
    width="70%" center>
    <el-row><i class="el-icon-camera" style="font-size:20px;margin:5%;"
              @click="routeTo('Scan')"> 扫码录入</i></el-row>
    <el-row><i class="el-icon-search" style="font-size:20px;margin:5%;"
              @click="routeTo('ResultShow')"> 搜索书籍</i></el-row>
    <el-row><i class="el-icon-edit" style="font-size:20px;margin:5%;"
              @click="routeTo('AddByHand')"> 手动录入</i></el-row>
    </el-dialog>
    <FooterBar></FooterBar>
  </div>
  
</template>

<script>
import FooterBar from "../components/FooterBar"
import BookItem from "../components/BookItem"
export default {
  name: 'WantToRead',
  components: {
        FooterBar,
        BookItem
    },
  data () {
    return {
      items:'',
      centerDialogVisible: false,
    }
  },
  methods:{
    routeTo(name, params) {
        this.$router.push({name, params});
      },
    
  },
  created(){
    var self = this
    var id = localStorage.getItem('userId')
    console.log('local id', localStorage.getItem('userId'))
    this.$axios.get('/books/userbooks?status=2&id='+id)
    .then(response =>{self.items = response.data})
  }
}
</script>

<style >
#addbtn{
  bottom: 13%;
  right: 7%;
  position: fixed;
}

#count-head{
  text-align:center;
  margin-bottom:2%;
  font-size: 13px;
  color:gray ;
}

i{
  text-align: center;
}
</style>
