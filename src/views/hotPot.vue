<template>
  <div>
    <h1>
      火锅世界
    </h1>
    <button @click="viewCondiment">去看看锅底</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewCondiment() {
      this.$router.push({ name: "hotpot-list" });
    }
  }
};
</script>
