<template>
  <div class="dashboardContainer relative flex w-screen h-screen">
    <SideBar />
    <div
      class="
        px-6
        py-4
        dashboardContent
        flex
        h-screen
        bg-white
        m-auto
        md:px-2 md:py-2
      "
    >
      <div
        class="
          h-full
          w-full
          rounded-sm
          m-auto
          bg-slate-200
          flex flex-col
          items-center
          px-8
          pt-8
          md:py-2 md:justify-start md:px-6 md:pt-4
        "
      >
        <div
          class="topContent w-full flex items-center justify-between font-bold"
        >
          <h1 class="text-3xl text-black md:text-xl">Admin Dashboard</h1>
          <UserBox />
        </div>
        <div
          class="
            bottomContent
            w-full
            overflow-x-hidden
            grid grid-cols-4
            gap-x-10
            mt-28
            lg:grid-cols-2 lg:gap-y-10
            md:mt-16
            sm:grid-cols-1 sm:gap-y-5 sm:px-8 sm:pb-10
          "
        >
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

<style>
.dashboardContainer .dashboardContent {
  width: 100%;
}
div {
  font-family: "Poppins", sans-serif;
}

[v-cloak] {
  display: none;
}
</style>