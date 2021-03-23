<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge~~</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li v-if="user" class="nav-item">
              <nuxt-link 
              exact
              class="nav-link" 
              :class="{
                active: tab === 'your_feed'
              }"
              :to="{
                name: 'home',
                query: {
                  tab: 'your_feed'
                }
              }">你的订阅</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              exact
              class="nav-link" 
              :class="{
                active: tab === 'global_feed'
              }"
              :to="{
                name: 'home',
                query: {
                  tab: 'global_feed'
                }
              }">所有内容</nuxt-link>
            </li>
            <li v-if="tag" class="nav-item">
              <nuxt-link 
              exact
              class="nav-link" 
              :class="{
                active: tab === 'tag'
              }"
              :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: tag
                }
              }">#{{ tag}}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview"
             v-for="article in articles"
             :key="article.slug" 
        >
          <div class="article-meta">
            <nuxt-link :to="{ name: 'profile',
                             params: {
                               username: article.author.username
                             }}">
              <img :src="article.author.image" />
              </nuxt-link>
            <div class="info">
              <nuxt-link :to="{ name: 'profile',
                             params: {
                               username: article.author.username
                             }}" class="author">
               {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
                    :class="{ 
                      active: article.favorited
                    }"
                    @click="onFavorite(article)"
                    :disabled='article.favoriteDisabled'
            >
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link 
           class="preview-link"
           :to="{
             name: 'article',
             params: {
               slug: article.slug
             }
           }"
           >
            <h1>{{ article.title }}</h1>
            <p>{{ article.description}}</p>
            <span>更多...</span>
          </nuxt-link>
        </div>
        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">
            <li class="page-item"
              :class="{
                active: item === page
              }"
              v-for="item in totalPage"
              :key="item" 
            >
              <nuxt-link class="page-link" 
              :to="{ name: 'home',
                     query: {
                       page: item,
                       tag: $route.query.tag,
                       tab: tab
                     } 
                   }">{{ item }}</nuxt-link>
            </li>
            
          </ul>
        </nav>
        <!-- /分页列表 -->


      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>热门内容</p>

          <div class="tag-list">
            <nuxt-link :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }" 
            class="tag-pill tag-default"
            v-for="item in tags"
            :key="item"
            >{{ item}}</nuxt-link>
            
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from '@/api/article'
import { getTags} from '@/api/tag'
import { mapState } from 'vuex'
export default {
  watchQuery: ['page','tag','tab'],
  name: 'HomeIndex',
  async asyncData ({ query, store}) {
    const page = Number.parseInt(query.page|| 1)
    const limit = 25
    const { tag } = query
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed'
    ? getFeedArticles 
    : getArticles 
    const [ articleRes, tagRes ] = await Promise.all([
      loadArticles ({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
      }),
      getTags () 
    ])
    const {articles, articlesCount} = articleRes.data
    const { tags } = tagRes.data
    
    articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab: query.tab || 'global_feed'
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite (article) {
      article.favoriteDisabled = true
      if(article.favorited) {
        //  取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false

    }
  }
}
</script>

<style>

</style>