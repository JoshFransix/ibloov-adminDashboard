<template>
  <div class="sideBar fixed bg-white h-screen px-4 pt-12">
    <div
      class="
        topContent
        mx-auto
        text-center
        flex flex-col
        align-center
        justify-center
      "
    >
      <img src="@/assets/img/ibloov.svg" alt="" class="mx-auto w-1/2" />
      <h3 class="text-sm mt-2 text-black">Your next event in an instant</h3>
    </div>
    <div class="bottomContent mt-20 ml-4 toggle">
      <!-- Dashboard -->
      <NuxtLink to="/dashboardPanel">
        <div class="dashboard flex items-center mb-12 active">
          <span class="mr-4"
            ><img src="@/assets/img/dashboard.svg" alt=""
          /></span>
          <span>Dashboard</span>
        </div>
      </NuxtLink>

      <!-- Manage Feedback -->
      <NuxtLink to="/dashboardPanel/Feedback">
        <div class="feedback toggle flex items-center mb-12">
          <span class="mr-4"
            ><img src="@/assets/img/comment.svg" alt=""
          /></span>
          <span>Manage Feedback</span>
        </div>
      </NuxtLink>

      <!-- Logout -->
      <NuxtLink to="/dashboardPanel/Logout">
        <div class="logout toggle flex items-center mb-12">
          <span class="mr-4"><img src="@/assets/img/logout.svg" alt="" /></span>
          <span>Logout</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sideBar {
  width: 20vw;
  transition: all 0.3s ease-in-out;
}
.toggle span {
  filter: grayscale(100%);
}
.toggle .active span {
  filter: grayscale(0%);
  font-weight: bolder;
}
</style>