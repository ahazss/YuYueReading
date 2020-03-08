<template>
  <div>
    <div style="text-align:center;">—  共 {{num}} 本  —</div>
    <BookItem></BookItem>
    <BookItem></BookItem>
    <BookItem></BookItem>
    <BookItem></BookItem>
    <BookItem></BookItem>
        <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../components/FooterBar"
import BookItem from "../components/BookItem"
export default {
  name: 'HaveRead',
  components: {
        FooterBar,
        BookItem,
    },
  data () {
    return {
      num:'',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
