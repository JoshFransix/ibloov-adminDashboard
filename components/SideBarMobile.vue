<template>
  <div>
    <div class="bg-[#00237B] rounded-full">
      <v-app-bar-nav-icon
        color="basic"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="300"
      class="px-4 pt-12 font-normal"
    >
      <div
        class="
          topContent
          mx-auto
          text-center
          d-flex
          flex-col
          align-center
          justify-center
        "
      >
        <img src="@/assets/img/ibloov.svg" alt="" class="mx-auto w-1/2" />
        <h3 class="text-sm mt-2 font-normal">Your next event in an instant</h3>
      </div>
      <v-list nav class="mt-16">
        <v-list-item-group>
          <!-- Dashboard -->
          <NuxtLink to="/dashboardPanel/Dashboard">
            <li class="mb-12 flex align-center ml-2">
              <span class="bg-[#00237b] rounded-full"></span>
              <v-img class="mr-4 ml-4">
                <img src="@/assets/img/dashboard.svg" alt="" class="w-4 h-4" />
              </v-img>
              <v-list-item-title>Dashboard</v-list-item-title>
            </li>
          </NuxtLink>
          <!-- Manage Feedback -->
          <NuxtLink to="/dashboardPanel/Feedback">
            <li class="mb-8 flex align-center">
              <span class="bg-[#00237b] rounded-full"></span>
              <v-img class="mr-4 ml-5">
                <img src="@/assets/img/comment.svg" alt="" class="w-4 h-4" />
              </v-img>
              <v-list-item-title>Manage Feedback</v-list-item-title>
            </li>
          </NuxtLink>
          <!-- Logout -->
          <div class="logout">
            <v-list-item class="mb-8" @click="waitRedirect">
              <v-img class="mr-4 ml-4">
                <img src="@/assets/img/logout.svg" alt="" class="w-4 h-4" />
              </v-img>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <v-overlay :value="overlay" :fixed="fixed" class="z-[99999]">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      overlay: false,
      fixed: true,
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

<style  scoped>
a {
  color: #000;
}

a:not([aria-current="page"]),
.logout {
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
}

a span {
  position: absolute;
  top: 40%;
  left: 0;
  width: 7.8px;
  height: 7.5px;
  display: none;
}

a[aria-current="page"] {
  position: relative;
  font-weight: bolder;
  transition: 0.3s ease-in-out;
}

a[aria-current="page"] span {
  display: block;
}
</style>