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
    <hr>
    <h1>表达式</h1>
    <h4>直接进行数字的加减运算：4+4= {{4+4}}</h4>
    <h4>直接进行数字的加减运算：9-4= {{9-4}}</h4>
    <h4>直接进行数字的加减运算：4*4= {{4*4}}</h4>
    <h4>直接进行数字的加减运算：16/4= {{16/4}}</h4>
    <h4>三元运算：{{ ok ? 'yes' : 'no'}}</h4>
    <h4>直接进行js的二次操作：（逆转字符串）{{ message.split('').reverse().join('') }}</h4>
    <div v-bind:id="'list'+id" v-bind:title="'id = list'+id">给元素绑定不同的id</div>
    <hr><br>
    <h1>给元素绑定事件</h1>
    <h3><button v-on:click="alert_tip">点我</button></h3>
    <hr><br>
    <h1>用户输入，双向绑定</h1>
    <input type="text" name="" id="" v-model="input_val"> + 
    <input type="text" v-model="input_val1"> = 
    <input type="text" readonly :value="parseInt(input_val) + parseInt(input_val1)">
    <hr><br>
    
  </div>
</template>

<script>
export default {
  name: 'content_box',
  data () {       //数据（变量（常量））
    return {
      title : '这是依照菜鸟教程来做的',
      home_url : "www.zhangheteng.com",
      blog_url : "blog.zhangheteng.com",
      v_html : "这是通过v-html模板输出的",
      class1 : false,
      ok : true ,
      message : 'RUNOOB',
      id : 1,
      input_val : 12,
      input_val1 : 5
    }
  },
  methods :{          //方法
    function_name : function(){
      return "这是我的blog地址："+this.blog_url;
    },
    alert_tip :function(){
      let h = confirm("点我你高兴吗？");
      if(h == true){
        alert("是的，我很高兴");
      }else{
        alert("不，我不高兴");
      }
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
