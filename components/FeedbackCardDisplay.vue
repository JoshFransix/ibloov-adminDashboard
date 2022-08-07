<template>
  <v-card
    class="relative card bg-white rounded-lg pr-4 h-[80px] w-[300px]"
    :elevation="words ? '6' : '0'"
  >
    <div class="px-4 pt-2">
      <div
        class="
          cardHeader
          d-flex
          justify-space-between
          -mt-2
          w-full
          cardMargin
          md:flex-col
        "
      >
        <div
          class="topLeft d-flex justify-space-between align-center md:flex-col"
        >
          <!-- <v-avatar size="74" class="-mt-8 mr-3 md:-mt-12 bg-[#00237b]">
            <span class="white--text text-h5"></span>
          </v-avatar> -->
          <v-avatar size="75" class="-mt-8 mr-3 md:-mt-12">
            <img :src="require(`@/assets/img/${cardsSection.image}`)" alt="" />
          </v-avatar>
          <div
            class="
              relative
              topLeftText
              d-flex
              flex-col
              justify-space-center
              align-center
              md:ml-0 md:mt-0 md:w-1/2
            "
          >
            <h1 class="text-xl font-medium text-[#263238] md:text-xl calcWidth">
              {{ cardsSection.name }}
            </h1>
            <div class="numberEmail flex justify-between items-center w-full">
              <span class="number text-small">{{
                cardsSection.phoneNumber
              }}</span>
              <span class="email text-small">{{ cardsSection.email }}</span>
            </div>
          </div>
        </div>
        <div class="topRight mt-7">
          <span
            class="date text-small md:absolute md:top-[10px] md:right-[10px]"
            >{{ cardsSection.date }}</span
          >
        </div>
      </div>
      <div :class="reveal ? 'showContent' : 'hideContent'">
        <span
          class="font-normal text-sm text-[#010101]"
          ref="cardMessage"
          @click="wordCount"
        >
          {{ cardsSection.message }}
        </span>
        <span :class="reveal ? 'hide' : 'overlay'"></span>
      </div>
    </div>

    <v-card-actions class="mt-0 pt-0 mb-2">
      <div class="cardFooter mt-0 flex justify-between items-center w-full">
        <button
          :class="words ? 'show' : 'hide'"
          @click="reveal = !reveal"
          class="text-xs text-[#00237b] font-bold ml-2"
        >
          {{ reveal ? "Read Less" : "Read More" }}
        </button>
        <div class="">
          <v-rating
            class="inline-block transition duration-200"
            v-model="cardsSection.star"
            color="starfilled"
            background-color="starempty"
            empty-icon="$ratingFull"
            dense
            readonly
            length="5"
            size="15"
          ></v-rating>
          <span class="text-yellow-400 text-xs">
            {{ cardsSection.star.toFixed(1) }}</span
          >
        </div>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["cardsSection", "modelValue"],
  data() {
    return {
      reveal: false,
      words: false,
      inject: {
        theme: {
          default: { isDark: false },
        },
      },
    };
  },
  mounted: function () {
    this.wordCount();
  },
  methods: {
    wordCount() {
      const messages = this.$refs.cardMessage.innerText;
      const arr = messages.split(" ");
      const result = arr.filter((word) => word !== "").length;
      if (result >= 30) {
        this.words = true;
      } else {
        this.words = false;
      }
    },
  },
};
</script>


<style scoped>
div,
span,
p {
  transition: all 0.3s ease-in-out;
}
.show {
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.hide {
  opacity: 0;
  pointer-events: none;
  /* display: none; */
  transition: all 0.3s ease-in-out;
}

.hideContent {
  position: relative;
  overflow: hidden;
  line-height: 1em;
  height: 6em;
  transition: all 0.3s ease-in-out;
}

.showContent {
  line-height: 1em;
  height: auto;
  position: relative;
  height: auto;
  transition: all 0.3s ease-in-out;
}

.overlay {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(rgba(255, 255, 255, 0.9), #fff);
  box-shadow: 0px -10px 30px rgba(255, 255, 255, 0.7);
}

.card {
  width: 100%;
  height: calc(100% - 2px);
}

.text-small {
  font-size: 9px;
  color: #00237b;
  font-weight: 600;
}

.calcWidth {
  width: 160px;
}

.cardMargin {
  margin-bottom: 1rem;
}

@media screen and (max-width: 767px) {
  .absolute {
    position: relative;
    /* left: calc(100% - 10%); */
  }

  .cardMargin {
    margin-bottom: 0rem;
  }
}
</style>