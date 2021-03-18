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
          <li>邮箱已经被占用啦</li>
        </ul>

        <form>
          <fieldset v-if="!isLogin" class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password">
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
export default {
  name: 'LoginIndex',
  computed: {
      isLogin () {
          return this.$route.name === 'login'
      }
  }
}
</script>

<style>

</style>