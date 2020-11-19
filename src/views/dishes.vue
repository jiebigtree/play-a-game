<template>
  <div class="home">
    <div @click="testKey">键是否存在</div>
    <div @click="testShowKey">查看键值</div>
    <div @click="comAmount">求和</div>
    <div @click="objecta">对象</div>
    <div @click="testObssign">对象复制</div>
    <div @click="delCloneObj">深度克隆</div>
    <div>手写深度克隆</div>
    <!-- 原：
    <div v-for="(item, index) in titleNameArray" :key="index">
      {{ index + 1 }}:{{ deepObj[item] }}
    </div>
    新：
    <div v-for="(item, index) in titleNameArray" :key="index">
      {{ index + 1 }}:{{ handleDeepClone(deepObj)[item] }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      testKeyObj: {
        testKey: undefined
      },
      titleNameArray: [
        "oneTitle",
        "twoTitle",
        "threeTitle",
        "fourTitle",
        "fiveTitle",
        "sixTitle",
        "subTitle"
      ],
      testMulObj: {
        oneTitle: "第一个",
        twoTitle: [1, 2, 1],
        threeTitle: { name: "aha", age: 99, others: { address: "there" } }
      },
      emptyObj: {},
      comAmountObj: [
        { name: "aiby", amount: 1 },
        { name: "belly", amount: 2 },
        { name: "calling", amount: 3.4 }
      ],
      comAmounter: {
        dolley: 123,
        emmiy: 223,
        frigge: 983
      },
      deepObj: {
        oneTitle: "第一个",
        twoTitle: [1, 2, 1],
        threeTitle: { name: "aha", age: 99, others: { address: "there" } },
        fourTitle: undefined,
        fiveTitle: [{ name: "one" }, ["jerry", { calling: 90 }]],
        sixTitle: function() {
          return 89;
        }
      }
    };
  },
  methods: {
    testKey() {
      console.log("直接查看", this.testKeyObj.testKey); // undefined
      console.log("使用in方法", "testKey" in this.testKeyObj); // true
    },
    testShowKey() {
      // eslint-disable-next-line no-unused-vars
      for (let key in this.testMulObj) {
        console.log("yes");
        // console.log("key:", key);
        // console.log("value:", this.testMulObj[key]);
        // this.testMulObj[key.toUpperCase()] = this.testMulObj[key];
        // delete this.testMulObj[key];
      }
    },
    comAmount() {
      let resultAmount = 0;
      // for (let i in this.comAmountObj) {
      //   console.log(i);
      // }
      this.comAmountObj.forEach(item => {
        resultAmount += item.amount;
        // console.log(item);
      });
      console.log(resultAmount);
      console.log("=====================");
      let amounter = 0;
      for (let key in this.comAmounter) {
        amounter += this.comAmounter[key];
      }
      console.log(amounter);
    },
    objecta() {
      // let test = this.testKeyObj;
      // test.testKey = "have";
      // console.log(this.testKeyObj);
      let objOne = { name: "aha" };
      let objTwo = { age: 18 };
      let objThree = { name: "aha" };
      let objFour = objOne;
      console.log(objOne == objTwo);
      console.log(objOne == objThree);
      console.log(objOne == objFour);
    },
    testObssign() {
      let originObj = { name: "jerry", gender: "female" };
      // let newObj = Object.assign({}, originObj);
      // newObj.love = "hotpot";
      // console.log("原对象：", originObj);
      // console.log("新对象：", newObj);
      let newObj = {};
      for (let key in originObj) {
        newObj[key] = originObj[key];
      }
      newObj[0] = { hh: 9 };
      console.log(newObj);
      console.log(originObj);
    },
    delCloneObj() {
      let originObj = {
        oneTitle: "第一个",
        twoTitle: [1, 2, 1],
        threeTitle: { name: "aha", age: 99, others: { address: "there" } }
      };
      let copyObj = JSON.parse(JSON.stringify(originObj));
      copyObj.newTest = { try: "aha" };
      console.log("原对象：", originObj);
      console.log("拷贝对象:", copyObj);
    },
    handleDeepClone(obj) {
      let newObj = obj.constructor === Array ? [] : {};
      if (typeof obj != "object") {
        return;
      }
      for (let key in obj) {
        newObj[key] =
          typeof obj[key] === "object"
            ? this.handleDeepClone(obj[key])
            : obj[key];
      }
      return newObj;
    }
  }
};
</script>
