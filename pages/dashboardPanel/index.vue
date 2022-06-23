<template>
  <div class="dashboardContainer relative">
    <SideBar />
    <div class="px-6 py-4 dashboardContent absolute bg-white">
      <div
        class="
          relative
          h-full
          w-full
          rounded-sm
          bg-slate-200
          flex flex-col
          items-center
          px-8
          py-8
        "
      >
        <div
          class="topContent w-full flex items-center justify-between font-bold"
        >
          <h1 class="text-3xl text-black">Admin Dashboard</h1>
          <UserBox />
        </div>
        <div class="bottomContent w-full flex justify-between flex-wrap mt-28">
          <SmallCardDisplay
            v-for="cardInfo in dashboardData"
            :key="cardInfo.id"
            :cardsSection="cardInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dashboardData } from "@/assets/data.js";
export default {
  data() {
    return {
      dashboardData,
    };
  },
};
</script>

<style scoped>
.dashboardContainer .dashboardContent {
  width: 80vw;
  height: 100vh;
  right: 0;
}
</style>