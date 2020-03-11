<template>
  <div class="v-body">
    <video
      ref="video"
      id="video"
      width="300"
      height="300"
      style="margin-top:27%;margin-bottom:50%;"
    ></video>
  <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../components/FooterBar"
// eslint-disable-next-line no-unused-vars
import adapter from 'webrtc-adapter';
// WebRTC适配器 只需要引入就ok
import { BrowserMultiFormatReader } from '@zxing/library';
/**
 * zxing demo
 */
export default {
  name:'Scan',
  components: {
        FooterBar,
    },
  data: () => ({
    codeReader: new BrowserMultiFormatReader(),
    textContent: undefined
  }),
  async created () {
    this.codeReader.getVideoInputDevices()
      .then((videoInputDevices) => {
        const selectedDeviceId = videoInputDevices[0].deviceId;

        this.codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'video', (result, err) => {
          if (result) {
            console.log(result);
            this.textContent = result.text;
          }
          if (err && !(err)) {
            console.error(err);
          }
        });
        console.log(`Started continous decode from camera with id ${selectedDeviceId}`);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    goBack() {
        this.$router.go(-1);
        console.log('go back');
        },
  }
};
</script>

<style lang="scss" scoped>
#back{
  position: relative;
  float: left;
  margin-left: 3%;
  margin-top: 0px;
}
.v-body{
    background: url('../assets/img/scan-bg.png');
    background-repeat:no-repeat;
    background-position: absolute;;
    background-size:100% 100%;
}
</style>