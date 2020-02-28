<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
         placeholder="请输入用户名" v-model="usernameModel">
        </div>
        <span class="g-form-error">{{userTest.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
          placeholder="请输入密码" v-model="passwordModel">
        </div>
        <span class="g-form-error">{{passTest.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onReg">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: ''
    }
  },
  computed: {
    userTest () {
      let errorText, status
      if ( !/@/g.test(this.usernameModel )) {
        status = false,
        errorText = '不包含@'
      } else {
        status = true,
        errorText = ''
      }
      if (!this.userflag) {
        errorText = ''
        this.userflag = true
      }
      return {
        status,
        errorText
      }
    },
    passTest () {
      let errorText, status
      if ( !/^\w{1,6}$/g.test(this.passwordModel )) {
        status = false,
        errorText = '密码不是1-6位'
      } else {
        status = true,
        errorText = ''
      }
      if (!this.passflag) {
        errorText = ''
        this.passflag = true
      }
      return {
        status,
        errorText
      }
    }
  },
   methods: {
    onReg () {
      if ( !this.userTest.status || !this.passTest.status ) {
        alert('用户名或者密码不正确')
      } else {
        alert('注册成功')
        this.$emit('has-reg')
      }
    }
  }
}
</script>
<style scoped>
a {
  padding: 4px 20px;
}
</style>

