<template>
  <v-app>
    <v-main>
      <div
        class="
          dashboardContainer
          relative
          d-flex
          w-screen
          h-screen
          overflow-hidden
        "
      >
        <SideBar />
        <div
          class="
            px-6
            py-4
            dashboardContent
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
              d-flex
              flex-col
              px-8
              py-0
              md:py-2 md:justify-start md:px-6 md:pt-4
            "
          >
            <div
              class="
                topContent
                w-full
                d-flex
                align-center
                justify-space-between
                font-bold
                pt-4
                pb-4
              "
            >
              <h1 class="text-3xl text-black lg:text-2xl md:text-xl md:mt-2">
                Admin Dashboard
              </h1>
              <div class="md:hidden">
                <UserBox />
              </div>
              <div class="hidden md:block">
                <SideBarMobile />
              </div>
            </div>
            <div
              class="
                bottomContent
                w-full
                overflow-x-hidden
                grid grid-cols-4
                gap-x-10
                mt-28
                xl:grid-cols-2 xl:gap-y-10
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
    </v-main>
  </v-app>
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
[v-cloak] {
  display: none;
}
.dashboardContainer .dashboardContent {
  width: 100%;
}
div {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
  transition: 0.6s;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#00237b, #ddd);
  border-radius: 6px;
  transition: 0.6s;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#ddd, #00237b);
  transition: 0.6s;
}
</style>