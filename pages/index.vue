<template>
  <div class="overflow-hidden" v-cloak>
    <LazyLoginForm
      v-for="inputInfo in formInput"
      :key="inputInfo.id"
      :inputSection="inputInfo"
    />
    <LazyLoginTexts />
  </div>
</template>

<script>
import { formInput } from "@/assets/data.js";

export default {
  name: "IndexPage",
  data() {
    return {
      formInput,
    };
  },
};
</script>

<style >
template,
div,
v-btn,
span {
  font-family: "Poppins", sans-serif !important;
}

[v-cloak] {
  display: none;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
