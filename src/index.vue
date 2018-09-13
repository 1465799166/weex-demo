<template>
  <div class="hello-word">
    <text @longpress="onlongpress">hello-word</text>
    <a href="./components/slider.vue">
      <!-- <text>a标签跳转（暂时无效）</text> -->
    </a>
    <slider auto-play :interval="1000" infinite show-indicators scrollable class="slider">
      <image
      v-for="(item,index) in 4"
      :key="index"
      class="image"
       resize="stretch"
       ref="img"
       src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg" />
       <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    onlongpress (event) {
      console.log('onlongpress:', event)
      // modal.toast({
      //   message: 'toast',
      //   duration: 0.8
      // })

      // modal.alert({
      //   message: 'alert',
      //   duration: 0.8,
      //   okTitle: 'okkkk'
      // }, function () {
      //   console.log('close alert')
      // })

      // modal.confirm({
      //   message: 'confirm',
      //   duration: 0.8,
      //   okTitle: 'okkkk',
      //   cancleTitle: 'cancleee'
      // }, function () {
      //   console.log('close confirm')
      // })

      modal.prompt({
        message: 'prompt',
        duration: 0.3,
        okTitle: 'okkk',
        cancleTitle: 'cancleee'
      }, function (str) {
        // str为一个对象，有两个属性：result: okTitle || cancleTitle data: 输入的内容
        console.log(str)
      })
    },
    save () {
      // 移动端有效
      this.$refs['img'].save(result => {
        modal.toast({message: 'Img save' + result.success + ',' + result.errorDesc})
      })
    }

  }
}
</script>

<style lang="less" scoped>
.slider {
  width: 400px;
  height: 200px;
}
  .image {
    border-width: 6px;
    border-style: solid;
    border-color: rgb(0, 180, 255);
    background-color: #BBB;
    width: 400px;
    height: 200px;
  }
</style>
