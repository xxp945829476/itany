<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button round>圆形按钮</el-button>
     <Time></Time>
  </div>

</template>

<script>
import Time from './time.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '下回分解的师傅'
    }
  },
  components:{
    Time
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@color:red;
h1, h2 {
  font-weight: normal;
  color: @color
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
