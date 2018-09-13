<template>
  <div class="hello-word" @longpress="onlongpress">
    <text>hello-word</text>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')
export default {
  data () {
    return {
    }
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
    }
  }
}
</script>
<style scoped>
</style>
