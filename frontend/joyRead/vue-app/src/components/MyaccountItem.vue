<template>
  <div class="item-box">
      <el-image :src='imgUrl(item.pic)' style="width:60px;height: 80px;margin-right:15px;"></el-image>
      <div class="item-info">
          <div class="item-title">{{item.name}}</div>
          <div class="item-text">{{item.writer}}</div>
          <div class="item-text">最后阅读于{{item.lastTime}}</div>
          <div class="item-point">个人评分{{item.point}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MyaccountItem',
    props: [
        'item',
    ],
    data() {
        return {

        }
    },
    methods:{
        imgUrl( _url ){
          if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
            }
          },
    }
}
</script>

<style lang="scss" scoped>
.item-box {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
}

.item-info {
    display: flex;
    flex-direction: column;
}

.item-title {
    margin-bottom: 2px;
    font-size: 15px;
}
.item-text {
    color: #696767;
    font-size: 13px;
    margin-bottom: 2px;
}
.item-point {
    color: #feb353;
    font-size: 15px;
}
</style>>