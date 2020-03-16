<template>
  <div>
    <div id="count-head">—  共 {{items.length}} 本  —</div>
    <div v-for="(item,index) in items" :key="index">
      <BookItem :item=item :status=3></BookItem>
    </div>
        <FooterBar></FooterBar>
  </div>
  
</template>

<script>
import FooterBar from "../components/FooterBar"
import BookItem from "../components/BookItem"
export default {
  name: 'Reading',
  components: {
        FooterBar,
        BookItem,
    },
  data () {
    return {
      items:'',
    }
  },
  created(){
    var self = this
    var id = localStorage.getItem('userId')
    console.log('local id', localStorage.getItem('userId'))
    this.$axios.get('/books/userbooks?status=3&id='+id)
    .then(response =>{self.items = response.data})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 #count-head{
  text-align:center;
  margin-bottom:2%;
  font-size: 13px;
  color:gray ;
}

</style>