<template>
  <NuxtLink to="/">
    <div
      class="
        container
        bg-[#00237B]
        text-white
        w-60
        h-36
        rounded-xl
        px-5
        py-8
        flex
        items-center
        justify-between
      "
    >
      <div class="cardLeft">
        <h1 class="text-sm mb-2">{{ cardsSection.title }}</h1>
        <h1 class="text-5xl">{{ cardsSection.number }}</h1>
      </div>
      <div class="cardRight">
        <img
          :src="require(`@/assets/img/${cardsSection.image}`)"
          alt=""
          class="w-14 h-14"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
</style>