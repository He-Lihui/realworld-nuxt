//  验证是否的登录的中间件

export default function ({ store, redirect }) {
  if(!store.state.user) {
    return redirect('/login')
  }
}