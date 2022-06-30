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
      absolute
      temporary
      width="300"
      class="px-4 pt-12 font-normal text--basic"
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
        <h3 class="text-sm mt-2 text--basic font-normal">
          Your next event in an instant
        </h3>
      </div>
      <v-list nav class="mt-16 primary--text">
        <v-list-item-group active-class=" text--basic">
          <!-- Dashboard -->
          <NuxtLink to="/dashboardPanel/Dashboard">
            <v-list-item class="mb-8">
              <v-img class="mr-4">
                <img src="@/assets/img/dashboard.svg" alt="" class="w-6 h-6" />
              </v-img>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <!-- Manage Feedback -->
          <NuxtLink to="/dashboardPanel/Feedback">
            <v-list-item class="mb-8">
              <v-img class="mr-4">
                <img src="@/assets/img/comment.svg" alt="" class="w-6 h-6" />
              </v-img>
              <v-list-item-title>Manage Feedback</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <!-- Logout -->
          <NuxtLink to="/">
            <v-list-item class="mb-8">
              <v-img class="mr-4">
                <img src="@/assets/img/logout.svg" alt="" class="w-6 h-6" />
              </v-img>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
a:not([aria-current="page"]) {
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
}

a[aria-current="page"] {
  color: #00237b !important;
  font-weight: bolder;
  transition: 0.3s ease-in-out;
}

v-overlay__scrim {
  background: red;
}
</style>