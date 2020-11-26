<template>
  <div>
    <button @click="back">返回</button>
    <h1>底料</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
