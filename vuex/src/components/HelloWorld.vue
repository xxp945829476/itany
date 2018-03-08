<template>
  <div class="hello">
      <h2>{{count}}</h2>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
      <button @click="decrementAs">增加</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{...mapGetters([
          'count'
      ])},
  methods:{
      ...mapActions([
          'increment',
          'decrement'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
