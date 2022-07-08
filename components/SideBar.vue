<template>
  <v-main class="fixed z-50 bg-white">
    <div class="md:z-50 md:hidden pr-8">
      <aside class="sideBar text-[#00237b] h-full min-h-screen">
        <div
          class="
            mx-auto
            text-center
            d-flex
            flex-col
            align-center
            justify-center
          "
        >
          <img src="@/assets/img/ibloov.svg" alt="" class="mx-auto w-[60%]" />
          <h3 class="text-xs mt-2 text-black">Your next event in an instant</h3>
        </div>
        <!-- <div class="bottomContent mt-20 ml-4 toggle">
            
            <NuxtLink to="/dashboardPanel/Dashboard">
              <div class="dashboard flex items-center mb-12 active">
                <span class="mr-4"
                  ><img src="@/assets/img/dashboard.svg" alt="" class="w-6 h-6"
                /></span>
                <span>Dashboard</span>
              </div>
            </NuxtLink>

           
            <NuxtLink to="/dashboardPanel/Feedback">
              <div class="feedback toggle flex items-center mb-12">
                <span class="mr-4"
                  ><img src="@/assets/img/comment.svg" alt="" class="w-6 h-6"
                /></span>
                <span>Manage Feedback</span>
              </div>
            </NuxtLink>
 
            <NuxtLink to="/">
              <div class="logout toggle flex items-center mb-12">
                <span class="mr-4"
                  ><img src="@/assets/img/logout.svg" alt="" class="w-6 h-6"
                /></span>
                <span>Logout</span>
              </div>
            </NuxtLink>
          </div> -->
        <v-list nav class="mt-16 mr-0">
          <v-list-item-group>
            <!-- Dashboard -->
            <NuxtLink to="/dashboardPanel/Dashboard">
              <li class="mb-12 flex align-center ml-2">
                <span class="bg-[#00237b] rounded-full"></span>
                <v-img class="mr-4 ml-4">
                  <img
                    src="@/assets/img/dashboard.svg"
                    alt=""
                    class="w-4 h-4"
                  />
                </v-img>
                <v-list-item-title>Dashboard</v-list-item-title>
              </li>
            </NuxtLink>
            <!-- Manage Feedback -->
            <NuxtLink to="/dashboardPanel/Feedback">
              <li class="mb-8 flex align-center ml-2">
                <span class="bg-[#00237b] rounded-full"></span>
                <v-img class="mr-4 ml-4">
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
                <v-list-item-title class="text-[#bbb]"
                  >Logout</v-list-item-title
                >
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </aside>
    </div>
  </v-main>
</template>

<script >
export default {
  data() {
    return {
      showNav: false,
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
a {
  color: #000;
}
.sideBar {
  transition: all 0.3s ease-in-out;
  z-index: 9999;
  padding: 3rem 0 3rem 1rem;
  /* width: calc(2rem + 24px); */
}

a:not([aria-current="page"]),
a:not(.nuxt-link-exact-active),
a:not(.nuxt-link-active),
.logout {
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
  color: #bbb;
}

a span {
  position: absolute;
  top: 40%;
  left: 0;
  width: 7.8px;
  height: 7.5px;
  display: none;
}

a[aria-current="page"],
a.nuxt-link-exact-active,
a.nuxt-link-active {
  position: relative;
  font-weight: bolder;
  transition: 0.3s ease-in-out;
}

a[aria-current="page"] span {
  display: block;
}

@media screen and (max-width: 1023px) {
  .sideBar {
    padding: 3rem 0 3rem 0.3rem;
  }
}
</style>

<!-- V-model....group for v-list-item-group -->