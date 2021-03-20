import request from '@/utils/request'

// 获取公共文章列表

export const getArticles = params => {
  return request({
      method: 'GET',
      url: '/api/articles',
      params
  })
}

//获取关注文章列表
export const getFeedArticles = params => {
  return request({
      method: 'GET',
      url: '/api/articles/feed',
      headers: {
        // Authorization: Token jwt.token.here
        Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTUwOTIwLCJ1c2VybmFtZSI6ImhsaCIsImV4cCI6MTYyMTQxODAzN30.---NLhFjYM7HQFERzP7u-RC8hIlhi0MXAmZYxISFaAQ`
      },
      params
  })
}