<template>
  <div>
    <div>
      <button @click="back">返回</button>
    </div>
    <h1>肉肉肉</h1>
    <input type="text" v-model="firstPage" />
    <div>{{ firstPage }}</div>
    <button @click="toFruit">去水果</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstPage: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toFruit() {
      this.$router.push({ name: "fruit-list" });
    }
  }
};
</script>
