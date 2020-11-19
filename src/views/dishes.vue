<template>
  <div class="home">
    <h1>炒菜</h1>
    <button @click="viewDishes">看看菜系</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewDishes() {
      this.$router.push({
        name: "dishes-list"
      });
    }
  }
};
</script>
