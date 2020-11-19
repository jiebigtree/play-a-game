<template>
  <div>
    <h1>烤烤烤</h1>
    <button @click="viewBarbecueDetail">去看看详情</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewBarbecueDetail() {
      this.$router.push({ name: "meat-list" });
    }
  }
};
</script>
