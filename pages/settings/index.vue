<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">设置</h1>

        <form>
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="我的头像...">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="我叫...">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="关于我..."></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="邮箱">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="密码">
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
export default {
  middleware: ['authenticated'],
  name: 'Settings'
}
</script>

<style>

</style>