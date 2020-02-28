<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog">
      请检查你的支付状态！
      <div class="button" @click="succed">
        支付成功
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccess" @on-change="blank">
      购买成功！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog.vue'
export default {
  components: {
    thisDialog: Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    isShowSuccess: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    succed () {
      this.$emit('on-change')
    },
    blank () {
      this.$parent.isShowSuccess = false
    }
  }
}
</script>
<style scoped>

</style>
