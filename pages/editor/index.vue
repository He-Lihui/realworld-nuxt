<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="标题">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="摘要">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder=" 你有什么想说的都可以写在这里，当然你也可以使用markdown的方式~)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="标签"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                发布我的文章
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
  name: 'Editor'
}
</script>

<style>

</style>