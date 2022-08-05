<template>
  <aside class="loginTexts overflow-hidden">
    <div
      class="
        w-auto
        h-full
        px-14
        py-12
        mx-auto
        my-auto
        flex flex-col
        justify-center
        items-center
      "
    >
      <img src="@/assets/img/ibloov.svg" alt="" />

      <h3 class="text-xl mt-2 text-black/75">Your next event in an instant</h3>
      <img
        src="@/assets/img/landingImage.png"
        alt="landingImage"
        class="my-6 select-none pointer-events-none w-5/6"
      />
      <h3 class="text-3xl font-medium text-[#00237B]">Admin Platform</h3>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.loginTexts {
  position: absolute;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
}

@media screen and (max-width: 800px) {
  .loginTexts {
    display: none;
  }
}
</style>