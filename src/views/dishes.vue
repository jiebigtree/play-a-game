<template>
  <div class="home">
    <h1>炒菜</h1>
    <button @click="viewDishes">看看菜系</button>
    <div>
      <ul>
        <li v-for="(item, index) in formList" :key="index">
          <div>{{ item.title }}</div>
          <input type="text" v-model="item.value" />
        </li>
      </ul>
    </div>
    <button @click="submit">提交</button>
    <div v-show="btnClickFlag">可以了</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formList: [
        { title: "name", value: "", needFlag: true },
        { title: "age", value: "", needFlag: true },
        { title: "phone", value: "" }
      ]
    };
  },
  computed: {
    btnClickFlag() {
      return false;
    }
  },
  methods: {
    viewDishes() {
      this.$router.push({
        name: "dishes-list"
      });
    },
    submit() {
      this.btnClickFlag = true;
      console.log(JSON.stringify(this.formList));
    }
  },
  render() {
    return <span>Hello</span>;
  }
};
</script>
