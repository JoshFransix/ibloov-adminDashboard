<template v-cloak>
  <v-app>
    <SideBar />
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
                <UserBox />
              </div>
              <div class="hidden md:block">
                <SideBarMobile />
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
                  {{ totalRating() }}
                </h1>
                <div class="star">
                  <h2 class="">
                    <v-rating
                      v-model="totalRatingValue"
                      color="starfilled"
                      background-color="starempty"
                      empty-icon="$ratingFull"
                      half-increments
                      dense
                      readonly
                      length="5"
                      size="23"
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

              <!-- Card Filter -->
              <LazyCardFilter @check-filter="updateDataByFilter" />
            </div>
            <!-- Review Body -->
            <div class="reviewBody mt-10 w-full">
              <div class="reviewContainer">
                <transition-group
                  name="fade"
                  tag="div"
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
                  <FeedbackCardDisplay
                    v-for="cardinfo in feedback"
                    :key="cardinfo.id"
                    :cardsSection="cardinfo"
                  />
                </transition-group>
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
// import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      feedbackData,
      totalRatingValue: 0,
      filteredOptions: "All",
      newRating: [],
    };
  },
  computed: {
    feedback() {
      const feedData = this.$store.state.feedback.feedbackData2;
      // console.log(feedData);

      return feedData.filter((feedback) => {
        // Time Filters
        if (
          feedback.time === "yesterday" &&
          this.filteredOptions == "Yesterday"
        ) {
          return true;
        }
        if (feedback.time === "today" && this.filteredOptions == "Today") {
          return true;
        }
        if (
          feedback.time === "tomorrow" &&
          this.filteredOptions == "Tomorrow"
        ) {
          return true;
        }

        // Star Filter
        if (feedback.star === this.filteredOptions) {
          return true;
        }

        if (feedback.all === "all" && this.filteredOptions == "All") {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    updateDataByFilter(updatedOptions) {
      this.filteredOptions = updatedOptions;
      console.log(this.filteredOptions);
      // this.feedbackData = data;
      // return data;
    },
    totalReviews() {
      const count = this.feedback.filter((item) => item.id).length;
      return count;
    },
    totalRating() {
      var rating = this.feedback;
      var sum = 0;
      var total = 0;
      for (var i = 0; i < rating.length; i++) {
        sum += rating[i].star;
      }
      total = sum;
      const finalTotal = total / this.totalReviews();
      this.totalRatingValue = finalTotal;
      return finalTotal.toFixed(1);
    },
  },

  // computed: mapState(["feedbackData2"]),
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
  /* transition: opacity 0.5s; */
}
.selected {
  display: none;
}

[v-cloak] {
  display: none;
}

h1,
div {
  transition: all 0.3s ease-in-out;
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
