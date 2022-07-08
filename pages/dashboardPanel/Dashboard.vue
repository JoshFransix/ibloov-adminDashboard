<template v-cloak>
  <v-app>
    <LazySideBar />
    <v-main class="feedbackContainer bg-slate-200">
      <div
        class="
          dashboardContainer
          relative
          d-flex
          pl-[20rem]
          lg:pl-[19rem]
          md:pl-0
        "
      >
        <div class="mobilePadding dashboardContent md:bg-slate-200">
          <div
            class="
              w-full
              rounded-sm
              bg-slate-200
              d-flex
              lgPadding
              flex-col
              md:py-2 md:justify-start
            "
          >
            <div
              class="
                topSection
                w-full
                d-flex
                align-center
                justify-space-between
                font-bold
              "
            >
              <h1
                class="
                  text-3xl text-black
                  lg:text-2xl
                  md:text-xl md:mt-2 md:hidden
                "
              >
                Admin Dashboard
              </h1>
              <div class="hidden md:block w-1/5 h-1/5">
                <img src="@/assets/img/ibloov.svg" alt="" />
              </div>
              <div class="md:hidden">
                <LazyUserBox />
              </div>
              <div class="hidden md:block">
                <LazySideBarMobile />
              </div>
            </div>
            <div class="mobileHeader">
              <h1 class="hidden md:block text-xl mt-6 mb-4 font-black">
                Admin Dashboard
              </h1>
            </div>
            <div
              class="
                bottomSection
                w-full
                m-auto
                overflow-x-hidden
                grid grid-cols-4
                gap-x-10
                mt-28
                xl:grid-cols-2 xl:gap-y-10
                md:mt-16
                sm:grid-cols-1 sm:gap-y-5 sm:px-0 sm:pr-0 sm:pb-10 sm:mt-12
              "
            >
              <LazySmallCardDisplay
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

v-app {
  height: 100vh;
}

.dashboardContainer .dashboardContent {
  width: 100%;
}
div {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 14px;
  transition: 0.6s;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#00237b, #ddd);
  border-radius: 0px;
  transition: 0.6s;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#ddd, #00237b);
  transition: 0.6s;
}

.mobilePadding {
  padding: 0 3rem 0 2rem;
}

.topSection {
  padding: 3rem 0 1rem 0;
}

@media screen and (max-width: 1023px) {
  .mobilePadding {
    padding: 0 2rem 0 2rem;
  }
  .topSection {
    padding: 2rem 0 1rem 0;
  }
}

@media screen and (max-width: 767px) {
  .mobilePadding {
    padding: 0 3rem 0 2rem;
  }
  .topSection {
    padding: 1rem 0;
  }
}
@media screen and (max-width: 539px) {
  .mobilePadding {
    padding: 0 1rem 0 1rem;
  }
}
</style>