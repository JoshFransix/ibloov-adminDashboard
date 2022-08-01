<template>
  <div class="flex items-center sm:mb-4">
    <i
      ><v-icon
        transition="scale-transition"
        @click="active = !active"
        color="#fff"
        class="cursor-pointer mr-2 transition"
        >{{
          active ? "mdi-checkbox-marked-circle" : "mdi-checkbox-blank-circle"
        }}</v-icon
      ></i
    >
    <label
      for="checkbox"
      class="cursor-pointer text-slate-300"
      @click="active = !active"
      >Remember me</label
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
div,
span,
label,
i v-icon,
i,
v-icon {
  transition: all 0.3s ease-in-out;
}
</style>