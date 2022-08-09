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
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-card>
                <v-card-text class="mt-4"
                  >There's no result for this filter</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="allFeedbacks">
                    Go back
                  </v-btn>
                  <!-- <v-btn color="green darken-1" text @click="dialog = false">
                    Agree
                  </v-btn> -->
                </v-card-actions>
              </v-card>
            </v-dialog>
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
                    >{{ totalReviews() }}
                    {{ reviewCount ? "Review" : "Reviews" }}
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
      dialog: false,
      feedbackData,
      reviewCount: false,
      feedbackValues: [],
      totalRatingValue: 0,
      filteredOptions: "All",
      newRating: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  computed: {
    feedback() {
      const feedData = this.$store.state.feedback.feedbackData2;

      return feedData.filter((feedback) => {
        const feedbackDate = new Date(feedback.date);
        if (
          // Custom Date Filter
          (feedbackDate >= new Date(this.filteredOptions[0]) &&
            feedbackDate <= new Date(this.filteredOptions[1])) ||
          // 7 days
          (feedbackDate >=
            new Date(new Date().setDate(new Date().getDate() - 7)) &&
            feedbackDate <= new Date() &&
            this.filteredOptions == "7 days") ||
          // 15 days
          (feedbackDate >=
            new Date(new Date().setDate(new Date().getDate() - 15)) &&
            feedbackDate <= new Date() &&
            this.filteredOptions == "15 days") ||
          // 1 month
          (feedbackDate >=
            new Date(new Date().setMonth(new Date().getMonth() - 1)) &&
            feedbackDate <= new Date() &&
            this.filteredOptions == "1 month") ||
          // 6 months
          (feedbackDate >=
            new Date(new Date().setMonth(new Date().getMonth() - 6)) &&
            feedbackDate <= new Date() &&
            this.filteredOptions == "6 months") ||
          // 1 year
          (feedbackDate >=
            new Date(new Date().setFullYear(new Date().getFullYear() - 1)) &&
            feedbackDate <= new Date() &&
            this.filteredOptions == "1 year") ||
          // Star rating
          feedback.star === this.filteredOptions ||
          // All
          (feedback.all === "all" && this.filteredOptions == "All")
        ) {
          return true;
        }
      });
    },
  },
  methods: {
    updateDataByFilter(updatedOptions) {
      this.filteredOptions = updatedOptions;
    },
    totalReviews() {
      const count = this.feedback.filter((item) => item.id).length;
      if (count <= 1) {
        this.reviewCount = true;
      } else {
        this.reviewCount = false;
      }
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
      if (finalTotal > 0) {
        const firstResult = finalTotal.toFixed(1);
        return firstResult;
      } else {
        this.dialog = true;
        return "0.0";
      }
    },
    allFeedbacks() {
      this.filteredOptions = "All";
      this.dialog = false;
    },
  },

  // computed: mapState(["feedbackData2"]),
};
</script>

<style scoped>
.show {
  opacity: 1;
  pointer-events: all;
}
.hide {
  opacity: 0;
  pointer-events: none;
}
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
div,
span {
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
