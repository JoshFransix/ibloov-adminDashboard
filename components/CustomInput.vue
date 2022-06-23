<template>
  <div
    class="
      input-style
      bg-white
      flex
      items-center
      rounded-lg
      mt-4
      transition
      duration-200
      border-2 border-[#c5c5c5]
      w-full
    "
  >
    <img :src="require(`@/assets/img/${input.image}`)" alt="" class="mr-4" />
    <input
      class="transition duration-200 outline-none w-full"
      :placeholder="placeholder"
      :type="type"
      v-model="inputValue"
      required
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type", "modelValue", "input"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update", value);
        console.log(value);
      },
    },
  },
};
</script>

<style scoped>
.input-style {
  /* outline: none; */
  /* border: none; */
  padding: 0.8rem 1rem;
}
</style>