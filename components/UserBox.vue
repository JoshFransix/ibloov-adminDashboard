<template >
  <div class="text-center">
    <v-menu transition="fade-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          v-bind="attrs"
          v-on="on"
          height="70"
          width="170"
          elevation="7"
          class="
            userBox
            rounded-lg
            d-flex
            flex-row
            items-center
            px-4
            py-4
            basic--text
          "
        >
          <v-avatar size="40">
            <img src="@/assets/img/landingImage.png" alt="" class="rounded-circle"
          /></v-avatar>

          <v-card-text>
            <span class="primary--text">Joshua</span>
          </v-card-text>
        </v-card>
      </template>
      <v-list class="mt-16">
        <v-list-item-group>
          <v-list-item @click="waitRedirect">
            <v-img class="mr-4">
              <img src="@/assets/img/logout.svg" alt="" class="w-6 h-6" />
            </v-img>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },
  methods: {
    waitRedirect() {
      this.overlay = true;
      setTimeout(() => {
        window.location = "/";
      }, 2000);
    },
  },
};
</script>

<style scoped>
</style>