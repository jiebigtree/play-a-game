<template>
  <div>
    <div>
      <button @click="back">返回</button>
    </div>
    <h1>蔬菜</h1>
    <input type="text" v-model="thirdPage" />
    <div>{{ thirdPage }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thirdPage: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
