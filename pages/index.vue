<template>
  <div class="overflow-hidden h-screen" v-cloak>
    <LazyLoginForm
      v-for="inputInfo in formInput"
      :key="inputInfo.id"
      :inputSection="inputInfo"
    />
    <LazyLoginTexts />
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
template,
div {
  font-family: "Poppins", sans-serif !important;
}

[v-cloak] {
  display: none;
}

v-btn {
  font-family: "Poppins", sans-serif;
}
</style>
