const cookieparser = process.server ? require('cookieparser') : undefined

// 为了防止数据冲突，把state定义成一个函数，返回数据对象
export const state = () => {
  return {
      //当前登录用户的登录状态
      user: null
  }

}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}
export const actions = {
    //  nuxtServerInit 会在服务端渲染期间自动调用 用来初始化容器数据，传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null

    // 如果请求头中有cookie
    if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        try {
            user = JSON.parse(parsed.user)
        } catch (error) {
            // no valid cookie found 
        }
    }
    commit('setUser', user)
  }
}

