// 组件调用action, action再调用mutation, mutation改变数据
// actions: {
//   changeCity (ctx, city) {
//     ctx.commit('changeCity', city)
//   }
// },
// 换一种写法，不必调用action
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
