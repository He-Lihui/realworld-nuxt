<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">设置</h1>

        <form @submit="submitInfo">
          <fieldset>
              <fieldset class="form-group">
                <input 
                v-model="user.image"
                class="form-control" 
                type="text" 
                placeholder="我的头像...">
              </fieldset>
              <fieldset class="form-group">
                <input 
                v-model="user.username"
                class="form-control form-control-lg" 
                type="text" 
                value="oldUser.username"
                placeholder="我叫...">
              </fieldset>
              <fieldset class="form-group">
                <textarea 
                v-model="user.bio"
                class="form-control form-control-lg" 
                rows="8" 
                placeholder="关于我..."></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input 
                v-model="user.email"
                class="form-control form-control-lg" 
                type="text" 
                placeholder="邮箱">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="新密码">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                保存设置
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { updateUser, currentUser } from '@/api/user'
export default {
  middleware: ['authenticated'],
  name: 'Settings',
  data () {
    return {
      user: {
        email:'',
        bio:'',
        image:''
      },
    }
  },
  async mounted () {
    const { data }  = await currentUser()
    this.user = data.user
  },
  methods: {
    async submitInfo () {
      await updateUser({
        user: this.user
      })
       this.$router.push('/settings')
    }
  }
}
</script>

<style>

</style>