<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{ article.title}}</h1>
      <ArticleMeta :article="article"></ArticleMeta>
     
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
        
      </div>
    </div>

    <hr />

    <div class="article-actions">
     <ArticleMeta :article="article"></ArticleMeta>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">
        <ArticleComment :article="article"></ArticleComment>     
      </div>

    </div>

  </div>

</div>
</template>

<script>
import { getArticleDetail } from '@/api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta'
import ArticleComment from './components/article-comment'
export default {
  // middleware: ['authenticated'],
  name: 'Article',
  async asyncData ({params}) {
    const { data } = await getArticleDetail(params.slug)
    const { article } = data
    const md =  new MarkdownIt()
    article.body = md.render(data.article.body)
    return {
      article
    }

  },
  components: {
    ArticleMeta,
    ArticleComment
  },
  head () {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: 'diescription',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>

<style>

</style>