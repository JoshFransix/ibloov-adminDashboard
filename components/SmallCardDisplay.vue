<template>
  <div
    class="
      bg-[#00237B]
      text-white
      w-full
      h-max
      rounded-xl
      px-5
      py-9
      flex
      items-center
      justify-between
      md:py-10 md:px-3
    "
  >
    <div class="cardLeft">
      <h1 class="text-sm mb-2">{{ cardsSection.title }}</h1>
      <h1 class="text-5xl sm:text-3xl">{{ cardsSection.number }}</h1>
    </div>
    <div class="cardRight">
      <img
        :src="require(`@/assets/img/${cardsSection.image}`)"
        alt=""
        class="w-14 h-14"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
</style>