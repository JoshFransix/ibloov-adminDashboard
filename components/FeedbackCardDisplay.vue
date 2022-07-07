<template>
  <v-card class="relative card bg-white rounded-lg" elevation="0">
    <v-card-text class="">
      <div
        class="
          cardHeader
          d-flex
          justify-between
          align-center
          w-full
          md:flex-col
        "
      >
        <div
          class="topLeft d-flex justify-space-between align-center md:flex-col"
        >
          <v-avatar size="60" class="absolute -mt-16 mr-3 md:-mt-12">
            <img :src="require(`@/assets/img/${cardsSection.image}`)" alt="" />
          </v-avatar>
          <div
            class="
              relative
              left-16
              topLeftText
              d-flex
              flex-col
              justify-space-center
              align-center
              md:left-0 md:mt-8 md:w-48
            "
          >
            <h1 class="text-2xl font-medium text-[#263238] md:text-xl">
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
        <div class="topRight">
          <span class="date text-small md:hidden">{{ cardsSection.date }}</span>
        </div>
      </div>
      <div class="cardText">
        <p class="font-normal text-sm text-[#010101] text-justify mt-6">
          {{ cardsSection.message }}
        </p>
      </div>
    </v-card-text>

    <v-card-actions>
      <div class="cardFooter mt-2 flex justify-between items-center w-full">
        <!-- <v-btn
          text
          color="primary"
          @click="reveal = true"
          class="-mt-3 text-sm"
        >
          Read More
        </v-btn> -->
        <button @click="reveal = true" class="text-xs text-[#00237b]">
          Read More
        </button>
        <div class="">
          <v-rating
            class="inline-block"
            v-model="rating"
            color="yellow"
            half-increments
            dense
            hover
            length="5"
            size="15"
            value="5"
          ></v-rating>
          <span class="text-caption"> ({{ rating }})</span>
        </div>
      </div>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-lg text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false">
            Read less
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["cardsSection"],
  data() {
    return {
      reveal: false,
      rating: 4.3,
      inject: {
        theme: {
          default: { isDark: false },
        },
      },
    };
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}

.text-small {
  font-size: 9px;
  color: #00237b;
  font-weight: 600;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

@media screen and (max-width: 767px) {
  .absolute {
    position: relative;
    /* left: calc(100% - 10%); */
  }
}
</style>