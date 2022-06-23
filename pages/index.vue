<template>
  <div class="overflow-hidden" v-cloak>
    <LoginForm
      v-for="inputInfo in formInput"
      :key="inputInfo.id"
      :inputSection="inputInfo"
    />
    <LoginTexts />
  </div>
</template>

<script>
import { formInput, dashboardData } from "@/assets/data.js";

export default {
  name: "IndexPage",
  data() {
    return {
      formInput,
      dashboardData,
    };
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
}

[v-cloak] {
  display: none;
}
</style>
