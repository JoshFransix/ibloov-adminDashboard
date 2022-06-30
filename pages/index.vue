<template>
  <div class="overflow-hidden h-screen" v-cloak>
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

<style >
div {
  font-family: "Poppins", sans-serif;
}

[v-cloak] {
  display: none;
}

v-btn {
  font-family: "Poppins", sans-serif;
}
</style>
