<template>
    <div id="box">
        <span>{{booklist_name}}</span>
        <span>发布时间：{{booklist_time}}</span>
        <!--ADD Here:BookItemComponents -->
        <div v-for="(item,index) in items" :key="index">
            <BookItem :item=item :status=1></BookItem>
        </div>
    </div>
</template>

<script>
import BookItem from "../components/BookItem"

export default {
    name:'BookList',
    components:{
        BookItem
    },
    data(){
       return{
           booklist_id:"0",
           booklist_name:"",
           booklist_time:"",
           booklist_introduction:"",
           items:'',
       };
    },
    created(){
        this.booklist_id=this.$route.params.booklist_id;
        this.getBookList();
    },
    methods:{
        getBookList(){
            var self=this;
            this.$axios.get('booklists/information/'+this.booklist_id)
            .then(response=>{
                self.booklist_name=response.data.name;
                self.booklist_time=response.data.time;
                self.booklist_introduction=response.data.introduction;
                self.items=response.data.books;
                console.log(self.books);
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#box{
    display: flex;
    flex-direction: column;
    padding: 15px;
}
</style>