// 全局变量
let data = {
  age: '28',
};

// 创建全局组件
Vue.component("greeting", {
  //html模板
  template: `
  <div>
  <p>这是全局组件，可以再任何实例的容器中使用</p>
  <ul>
  <li>我的名字是：{{name}}</li>
  <li>我的学号是：{{num}}</li>
  <li>我的年龄是：{{age}}</li>
  </ul>
  <button @click='changeName'>改名字</button>
  <button @click='changeAge'>改年龄</button>
  </div>
  `,
  // 属性
  data() {
    return {
      name: '米斯特姜',
      num: '007',
    };
  },
  // 方法
  methods: {
    changeName() {
      this.name = "大内密探"
    },
    changeAge() {
      this.age = "60"
    },
  },
})

const one = new Vue({
  //创建根元素，容器element
  el: '#app-one',
  //data内的属性内容只作用于#app的内部
  data() {
    return {};
  },
  //方法
  methods: {},
  computed: {}
});

const two = new Vue({
  //创建根元素，容器element
  el: '#app-two',
  //data内的属性内容只作用于#app的内部
  data() {
    return {};
  },
  //方法
  methods: {},
  computed: {}
});