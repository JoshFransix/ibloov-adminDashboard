<template>
  <div class="logoutContainer relative">
    <SideBar />
    <div class="px-6 py-4 logoutContent absolute bg-white">
      <div
        class="
          relative
          h-full
          w-full
          rounded-sm
          bg-slate-200
          flex flex-col
          justify-center
          items-center
        "
      >
        <h1 class="text-3xl text-black">Hello Logout</h1>
        <img src="@/assets/img/logout.svg" alt="" class="w-48 h-48" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logoutContainer .logoutContent {
  width: 80vw;
  height: 100vh;
  right: 0;
}
</style>