<template>
  <div>
    <home-header></home-header>
  </div>
</template>
<script>
// 引入一个局部组件，使用的时候，必须在components中声明局部组件
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
