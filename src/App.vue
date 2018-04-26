<template>
  <div id="content_box">
    <h3>{{ title }}</h3>
    <h3>这是我的这人网站{{ home_url }}</h3>
    <h3>{{function_name()}}</h3>
    <h3 v-html="v_html"></h3>
    <h1>v-bind指令</h1>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="class1" id="r1">
    <br><br>
    <div v-bind:class = "{'class1' : class1}">
        directiva v-bind:class
    </div>
  </div>
</template>

<script>
export default {
  name: 'content_box',
  data () {
    return {
      title : '这是依照菜鸟教程来做的',
      home_url : "www.zhangheteng.com",
      blog_url : "blog.zhangheteng.com",
      v_html : "这是通过v-html模板输出的",
      class1 : false
    }
  },
  methods :{
    function_name : function(){
      return "这是我的blog地址："+this.blog_url;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
.class1{
  background: #444;
  color: #eee;
}
</style>
