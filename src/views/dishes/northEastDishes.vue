<template>
  <div>
    <button @click="back">返回</button>
    <h1>东北菜</h1>
    <button @click="testFunc">test array.fill</button>
    <button @click="test">测试mixin</button>
    <input type="text" v-focus v-change:foo="message" />
    <!-- <div class="positionBox" v-pin:[changeFoo]="fooValue">我在哪</div> -->
    <button @click="testStoreSetter">测试store存值</button>
    <button @click="testStoreGetter">测试store取值</button>
    <hello></hello>
    <button @click="testObjFunc">testFunc</button>
    <button @click="sayHello">say hello</button>
  </div>
</template>
<script>
import { mixin } from "@/mixin/index.js";
import hello from "@/components/HelloWorld";
export default {
  mixins: [mixin],
  data() {
    return {
      message: { name: "jerry" },
      changeFooIndex: 0,
      fooValueArray: ["left", "right", "bottom", "top"],
      fooValue: 200,
      changeFoo: "left",
      saySomething: {
        sayHello() {
          alert("hello");
        }
      }
    };
  },
  created() {
    console.log("我是页面里面的创建");
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter钩子的from:", from);
    console.log("beforeRouteEnter钩子的to:", to);
    next();
  },
  methods: {
    back() {
      this.$router.back();
    },
    testFunc() {
      let testArray = [1, 2, 3, 4];
      let item = { name: "jay" };
      testArray.fill(item, 1, 3);
      console.log("testArray:", testArray);
      let autoFillArray = Array(5).fill(item);
      console.log("autoFillArray:", autoFillArray);
    },
    test() {
      console.log("我在里面呢");
    },
    changeFooValue() {
      this.changeFooIndex++;
      this.changeFoo = this.fooValueArray[this.changeFooIndex];
    },
    testStoreSetter() {
      this.$store.commit("setHeadInfo", { name: "jay" });
      this.$store.commit("setLineInfo", { age: 99 });
    },
    testStoreGetter() {
      console.log(JSON.stringify(this.$store.getters.getHeadInfo));
      console.log(JSON.stringify(this.$store.state.lineInfo));
    },
    testObjFunc() {
      let user = {};
      user.func = this.test;
      user.func();
    },
    sayHello() {
      this.saySomething.sayHello();
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    },
    change: {
      inserted(el, binding) {
        console.log("binding:", JSON.stringify(binding));
        console.log(binding.name);
      }
    },
    pin: {
      update(el, binding) {
        el.style[binding.arg] = "200px";
      }
    }
  },
  components: { hello }
};
</script>
<style scoped>
.positionBox {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid rebeccapurple;
}
</style>
