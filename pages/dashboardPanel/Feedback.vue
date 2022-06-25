<template>
  <div class="feedbackContainer relative flex w-screen h-screen">
    <SideBar />
    <div
      class="
        px-6
        py-4
        feedbackContent
        flex
        justify-center
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
          justify-center
          items-center
          px-8
          py-0
          md:py-2 md:justify-start md:px-6 md:pt-4
        "
      >
        <div
          class="topContent w-full flex items-center justify-between font-bold"
        >
          <h1 class="text-3xl text-black md:text-xl">Manage Feedback</h1>
          <UserBox />
        </div>

        <div class="totalRating mt-10 flex justify-between items-center w-full">
          <div class="ratingReview flex items-center">
            <h1
              class="text-8xl text-[#00237B] mr-8 font-bold md:text-6xl md:mr-5"
            >
              5.0
            </h1>
            <div class="star">
              <h2 class="">
                <i class="fa-solid fa-star text-yellow-300"></i>
                <i class="fa-solid fa-star text-yellow-300"></i>
                <i class="fa-solid fa-star text-yellow-300"></i>
                <i class="fa-solid fa-star-half-stroke text-yellow-300"></i>
                <i class="fa-regular fa-star text-yellow-300"></i>
              </h2>
              <span class="number text-base text-[#00237B]">300 Reviews </span>
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
                md:grid-cols-1 md:gap-x-0 md:pr-2
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
</template>

<script>
import { feedbackData } from "@/assets/data.js";

export default {
  data() {
    return {
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