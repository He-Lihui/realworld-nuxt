<template>
  <div>
    <form 
      class="card comment-form"
      @submit.prevent="onSubComment"
    >
        <div class="card-block">
        <textarea 
          class="form-control" 
          placeholder="Write a comment..." 
          rows="3"
          v-model="comment.body"
        ></textarea>
        </div>
        <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
            Post Comment
        </button>
        </div>
    </form>
    
    <div 
    class="card"
    v-for="item in comments"
    :key="item.id"
    >
        <div class="card-block">
        <p class="card-text">{{ item.body}}</p>
        </div>
        <div class="card-footer">
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: item.author.username
            }
        }" class="comment-author">
            <img :src="item.author.image" />
        </nuxt-link>
        &nbsp;
        <a href="" class="comment-author">Jacob Schmidt</a>
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: item.author.username
            }
        }" class="comment-author">
            {{ item.author.username}}
        </nuxt-link>
        <span class="date-posted">{{item.createAt | date('MMM DD')}}</span>
        <span class="mod-options" >
              <i 
                @click="delComments(item)"
                class="ion-trash-a"
              ></i>
        </span>
        </div>
    </div>

  </div>
</template>

<script>
import { getArticleComments, createArticleComments, delComment } from '@/api/article'
export default {
  name: 'ArticleComment',
  props: {
    article:{
      type: Object,
      required: true
    }
  },
  data () {
      return {
        comments: [],
        comment:{
          body : ''
        }
      }
  },
  async mounted () {
    //   获取评论
    const { data } = await getArticleComments(this.article.slug)
    console.log(data.comments)
    console.log(this.article)
    this.comments = data.comments
  },
  methods: {
    async onSubComment() {
      try {
        // 发布评论
         await createArticleComments(this.article.slug, {
          comment: this.comment
        })
        this.comment.author = this.article.author
        this.comment.createdAt = new Date()
        this.comment.updatedAt = new Date()
        this.comment.id = this.comments[this.comments.length -1].id - 1
        this.comments.unshift(this.comment)
      } catch (error) {
        console.log(error)
      }
     
    },
    delComments (item) {
      console.log(item.id)
        delComment(this.article.slug, item.id)
        this.comments.shift(this.comment)

    }
  }
}
</script>

<style>

</style>