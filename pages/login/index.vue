<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{ isLogin ? '登录' : '注册'}}</h1>
        <p class="text-xs-center">
          <!-- <a href="">{{ isLogin ? '我已经有账号了' : '我还没有账号'}}</a> -->
          <nuxt-link v-if="!isLogin" to="/login">我已经有账号了</nuxt-link>
          <nuxt-link v-else to="/register">我还没有账号</nuxt-link>
        </p>

        <ul class="error-messages">
          <!-- <li v-show="warn"> 邮箱或者密码不正确</li> -->
          <template v-for="(messages, field) in errors">
            <li
              v-for="(message, index) in messages"
              :key="index"
            >{{ field }} {{ message}}</li>

          </template>
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset v-if="!isLogin" class="form-group">
            <input 
            v-model="user.username"
            class="form-control form-control-lg" 
            type="text" 
            placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input 
            v-model="user.email"
            class="form-control form-control-lg" 
            type="email" 
            placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input 
            v-model="user.password"
            class="form-control form-control-lg" 
            type="password" 
            placeholder="Password" required minlength="8">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? '登录' : '注册'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login, register } from '@/api/user'
export default {
  name: 'LoginIndex',
  computed: {
      isLogin () {
          return this.$route.name === 'login'
      }
  },
  data () {
    return {
      warn: false,
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}  // 保存错误信息
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 提交表单请求登录
        const { data } = this.isLogin
        ? await login({
          user: this.user
        })
        : await register({
          user: this.user
        })
        // console.log(data)

        this.$router.push('/')
      } catch (error) {
        this.warn = true
        this.errors = error.response.data.errors
      }
    
    }
  }
}
</script>

<style>

</style>