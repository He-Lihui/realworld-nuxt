<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <fieldset class="form-group">
                <input 
                v-model="article.title"
                type="text" 
                class="form-control form-control-lg" 
                placeholder="标题">
            </fieldset>
            <fieldset class="form-group">
                <input
                v-model="article.description" 
                type="text" 
                class="form-control" 
                placeholder="摘要">
            </fieldset>
            <fieldset class="form-group">
                <textarea 
                v-model="article.body"
                class="form-control" 
                rows="8" 
                placeholder=" 你有什么想说的都可以写在这里，当然你也可以使用markdown的方式~"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input 
                v-model="article.tagList"
                type="text"
                class="form-control" 
                placeholder="标签"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">
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
import { createArticle } from '@/api/article'
export default {
  middleware: ['authenticated'],
  name: 'Editor',
  data () {
    return {
      article :{
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  methods: {
    async onSubmit () {

      try {
        await createArticle({
           article: this.article
        })
         this.$router.push('/')
        
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>