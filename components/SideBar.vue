<template>
  <v-main>
    <div class="">
      <div
        :class="{ open: showNav }"
        class="
          asideContainer
          md:absolute md:bg-green-200 md:z-50 md:hidden md:-left-[100%]
        "
      >
        <aside
          class="
            sideBar
            relative
            bg-white
            text-[#00237b]
            h-full
            w-max
            px-4
            pt-12
            overflow-hidden
            min-h-screen
          "
        >
          <div
            class="
              topContent
              mx-auto
              text-center
              flex flex-col
              align-center
              justify-center
            "
          >
            <img src="@/assets/img/ibloov.svg" alt="" class="mx-auto w-1/2" />
            <h3 class="text-sm mt-2 text-black">
              Your next event in an instant
            </h3>
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
          <v-list nav class="mt-16 text--primary">
            <v-list-item-group active-class=" text--basic">
              <!-- Dashboard -->
              <NuxtLink to="/dashboardPanel/Dashboard">
                <v-list-item class="mb-8">
                  <v-img class="mr-4">
                    <img
                      src="@/assets/img/dashboard.svg"
                      alt=""
                      class="w-6 h-6"
                    />
                  </v-img>
                  <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
              </NuxtLink>
              <!-- Manage Feedback -->
              <NuxtLink to="/dashboardPanel/Feedback">
                <v-list-item class="mb-8">
                  <v-img class="mr-4">
                    <img
                      src="@/assets/img/comment.svg"
                      alt=""
                      class="w-6 h-6"
                    />
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
        </aside>
      </div>
      <div
        class="menu-toggle-wrap hidden absolute top-9 right-10 md:block"
        @click="showNav = !showNav"
      >
        <!-- <button class="menu-toggle">
        <span
          ><i
            class="
              fa-solid fa-bars
              bg-slate-100
              text-[#00237B]
              p-2
              rounded-lg
              cursor-pointer
            "
          ></i
        ></span>
      </button> -->
        <!-- <SideBarMobile /> -->
      </div>
    </div>
  </v-main>
</template>

<script >
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped>
.sideBar {
  transition: all 0.3s ease-in-out;
  z-index: 9999;
  /* width: calc(2rem + 24px); */
}

.asideContainer {
  transition: all 0.4s ease-in-out;
  background: red;
}

.open {
  left: 0;
  transition: 0.5s ease-in-out;
}

a:not([aria-current="page"]) {
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
}

a[aria-current="page"] {
  font-weight: bolder;
  color: #00237b;
  transition: 0.3s ease-in-out;
}

/* @media screen and (max-width: 767px) {
  .asideContainer {
    transform: translateX(-130%);
  }
} */
</style>

<!-- V-model....group for v-list-item-group -->