<template>
  <div>
    <div>
      <button @click="back">返回</button>
    </div>
    <h1>肉肉肉</h1>
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
