<template>
  <div>
    <div>
      <button @click="back">返回</button>
    </div>
    <h1>水果</h1>
    <input type="text" v-model="secondPage" />
    <div>{{ secondPage }}</div>
    <button @click="toNextPage">去蔬菜</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      secondPage: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toNextPage() {
      this.$router.push({ name: "vegetable-list" });
    }
  }
};
</script>
