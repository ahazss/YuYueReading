<template>
<div>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between" style="margin-top:2%;">
      <el-col :span="4" style="margin-left:3%;">
        <el-button icon="el-icon-back" @click="goBack" circle></el-button>
      </el-col>
      <el-col :span="16">
        <el-input v-model="keywords" placeholder="请输入搜索内容"></el-input>
      </el-col>
      <el-col :span="4" style="margin-left:3%;">
        <el-button icon="el-icon-search" @click="search(keywords)" circle></el-button>
      </el-col>
    </el-row>
  </div>
  <div v-for="(item,index) in items" :key="index">
    <BookItem :item=item></BookItem>
  </div>
</div>
</template>

<script>
import BookItem from "../components/BookItem"
export default {
    name:'ResultShow',
    components:{
        BookItem,
    },
    data(){
        return{
            items:[],
            keywords:null,
            scanisbn:null,
        }
    },
    methods:{
      goBack() {
          this.$router.go(-1);
          console.log('go back')
          },
      search(keywords){
          var self=this
          console.log(this.keywords)
           this.$axios.get('/books/search?words='+this.keywords)
          .then(response =>{self.items = response.data; console.log(self.items);})
        },
    },
    created(){
       var self=this
       this.scanisbn = this.$route.params.scanisbn
          if(this.scanisbn){
          this.$axios.get('/books/information/'+this.scanisbn)
              .then(response =>{
                  self.items.push(response.data)
                  console.log(self.items)
              })      
          }else{
              console.log("no result")
          }
    }
}
</script>

<style lang="scss" scoped>

</style>