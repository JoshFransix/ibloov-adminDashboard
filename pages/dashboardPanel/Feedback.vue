<template>
  <v-app>
    <v-main>
      <div
        class="
          feedbackContainer
          relative
          d-flex
          w-screen
          h-screen
          overflow-hidden
        "
      >
        <SideBar />
        <div
          class="px-6 py-4 dashboardContent h-screen bg-white md:px-0 md:py-0"
        >
          <div
            class="
              h-full
              w-full
              rounded-sm
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
                Manage Feedback
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
                totalRating
                mt-2
                d-flex
                justify-space-between
                align-center
                w-full
                md:mt-6
              "
            >
              <div class="ratingReview d-flex align-center">
                <h1
                  class="
                    text-8xl text-[#00237B]
                    w-40
                    font-bold
                    md:text-4xl md:mr-5 md:w-max
                  "
                >
                  {{ totalRating.toFixed(1) }}
                </h1>
                <div class="star">
                  <h2 class="">
                    <v-rating
                      v-model="totalRating"
                      color="yellow"
                      half-increments
                      dense
                      hover
                      length="5"
                      size="20"
                      value="5"
                    ></v-rating>
                  </h2>
                  <span class="number w-max text-base text-[#00237B] md:text-sm"
                    >{{ totalRating.toFixed(2) }} Reviews
                  </span>
                </div>
              </div>
              <div class="filter">
                <label for="filter" class="text-[#999]">Filter By:</label>
                <select
                  name="filter"
                  id="filter"
                  class="
                    bg-transparent
                    appearance-none
                    px-2
                    py-2
                    rounded-lg
                    cursor-pointer
                    text-[#00237B]
                  "
                >
                  <option value="">Date</option>
                  <option value="">Time</option>
                  <option value="">Event</option>
                </select>
              </div>
            </div>

            <!-- Review Body -->
            <div class="reviewBody mt-10 w-full">
              <div class="reviewContainer">
                <div
                  class="
                    cardContainer
                    grid grid-cols-2
                    gap-16
                    pb-24
                    pt-12
                    pr-12
                    overflow-y-scroll
                    m-auto
                    w-full
                    h-full
                    xl:grid-cols-1
                    lg:gap-x-0 lg:pr-0
                  "
                >
                  <FeedbackCardDisplay
                    v-for="cardinfo in feedbackData"
                    :key="cardinfo.id"
                    :cardsSection="cardinfo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { feedbackData } from "@/assets/data.js";

export default {
  data() {
    return {
      totalRating: 3,
      feedbackData,
    };
  },
};
</script>

<style scoped>
.feedbackContainer .feedbackContent {
  width: 100%;
}

.cardContainer {
  height: 410px;
  /* width: 100%; */
}

@media screen and (max-width: 768px) {
  .cardContainer {
    height: 480px;
  }
}
</style>