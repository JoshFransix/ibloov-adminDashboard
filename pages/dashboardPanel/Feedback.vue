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
              flex-col
              lgPadding
              md:py-2 md:justify-start
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
              "
            >
              <h1
                class="
                  text-3xl text-black
                  lg:text-2xl
                  md:text-xl md:mt-2 md:hidden
                "
              >
                Manage Feedback
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
                Manage Feedback
              </h1>
            </div>

            <div
              class="
                totalRating
                ratingPadding
                flex
                justify-between
                align-center
                w-full
                md:mt-6
                sm:block
              "
            >
              <div class="ratingReview d-flex align-center">
                <h1
                  class="
                    text-6xl text-[#00237B]
                    w-32
                    font-black
                    tracking-[0.3rem]
                    lg:text-5xl
                    md:text-4xl
                    lg:w-20 lg:mr-5
                    md:mr-5 md:w-max
                  "
                >
                  {{ totalRating.toFixed(1) }}
                </h1>
                <div class="star">
                  <h2 class="">
                    <v-rating
                      v-model="totalRating"
                      color="starfilled"
                      background-color="starempty"
                      empty-icon="$ratingFull"
                      half-increments
                      dense
                      hover
                      length="5"
                      size="23"
                      value="5"
                    ></v-rating>
                  </h2>
                  <span
                    class="
                      number
                      w-max
                      text-xl text-[#00237B]
                      md:text-sm
                      font-extrabold
                    "
                    >{{ totalReviews() }} Reviews
                  </span>
                </div>
              </div>
              <div class="sm:mt-4" transition="scale-transition">
                <label for="filter" class="text-[#999]">Filter By:</label>
                <select
                  name="filter"
                  id="filter"
                  class="
                    px-2
                    py-2
                    cursor-pointer
                    text-[#00237B]
                    outline-none
                    border-2 border-[#ccc]
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
                    gap-x-8 gap-y-14
                    m-auto
                    w-full
                    h-full
                    xl:grid-cols-1
                    lg:gap-x-0
                  "
                >
                  <LazyFeedbackCardDisplay
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
      totalRating: 5,
      feedbackData,
      items: ["Date", "Time", "Event"],
    };
  },

  methods: {
    totalReviews() {
      const count = feedbackData.filter((item) => item.id).length;
      return count;
    },
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.feedbackContainer .feedbackContent {
  width: 100%;
}

.cardContainer {
  padding: 0rem 0rem 6rem 0;
}

.topContent {
  padding: 3rem 0 1rem 0;
}

.ratingPadding {
  margin: 2.5rem 0 3rem 0;
}

@media screen and (max-width: 1023px) {
  .cardContainer {
    padding: 3rem 0rem 6rem 0;
  }

  .topContent {
    padding: 2rem 0 1rem 0;
  }

  .ratingPadding {
    margin: 2.5rem 0 0rem 0;
  }
}

@media screen and (max-width: 767px) {
  .topContent {
    padding: 1rem 0;
  }
}
</style>