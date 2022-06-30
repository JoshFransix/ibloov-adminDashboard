<template>
  <v-app>
    <v-main>
      <div
        class="
          loginForm
          h-screen
          d-flex
          justify-center
          align-center
          relative
          overflow-hidden
        "
      >
        <div class="w-96 formWidth relative">
          <v-form @submit.prevent="handleSubmit" ref="form">
            <div class="inputContainer">
              <h1 class="text-2xl mb-9 text-white font-bold">
                {{ inputSection.title }}
              </h1>

              <!-- <CustomInput
            v-for="input in inputSection.inputs"
            :key="input.id"
            :input="input"
            v-model="input.value"
            :placeholder="input.placeholder"
            :type="input.type"
          /> -->
              <div class="">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email Address"
                  placeholder="Email Address"
                  outlined
                  type="email"
                  background-color="#fff"
                  color="#00237b"
                  class="transition duration-200 outline-none w-full rounded-lg"
                  prepend-inner-icon="mdi-email"
                  required
                />
              </div>
              <div class="">
                <!-- <img src="@/assets/img/password.svg" alt="" class="mr-4" /> -->
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  placeholder="Password"
                  outlined
                  :type="passwordShow ? 'text' : 'password'"
                  background-color="#fff"
                  color="#00237b"
                  class="transition duration-200 outline-none w-full rounded-lg"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
                <!-- <div>
                  <img
                    src="@/assets/img/eye.svg"
                    class="ml-4 cursor-pointer"
                    alt=""
                  />
                </div> -->
              </div>
            </div>
            <div class="cta mt-6 flex justify-between items-center relative">
              <div class="radioInput flex items-center relative w-max">
                <!-- <CheckBox /> -->

                <v-switch color="#fff" inset label="Remember me"></v-switch>
              </div>
              <NuxtLink to="/">
                <v-btn
                  text
                  color="basic"
                  class="forgotPassword font-bold text-white"
                >
                  Forgot Password?
                </v-btn></NuxtLink
              >
            </div>
            <v-card-actions>
              <v-btn
                :loading="loading"
                type="submit"
                color="white"
                class="
                  button
                  w-full
                  rounded-lg
                  py-8
                  mt-6
                  font-bold
                  transition
                  duration-200
                  hover:bg-gray-300
                "
              >
                <span class="primary--text">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </div>
      </div>
      <v-snackbar top right color="green" v-model="snackbar">
        Login Successful
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script >
export default {
  props: ["inputSection"],
  data() {
    return {
      loading: false,
      snackbar: false,
      passwordShow: false,
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 5 || "Password must be 5 characters or more",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          window.location = "/dashboardPanel/Dashboard";
        }, 3000);
        // this.$router.push({ name: "dashboardPanel/" });
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 2000);
      }
    },
  },
};
</script>



<style scoped>
.loginForm {
  position: absolute;
  top: 0;
  left: 0;
  width: 60vw;
  background: #00237b;
  transition: all 0.3s ease-in-out;
}

.formWidth {
  width: 490px;
}

@media screen and (max-width: 800px) {
  .loginForm {
    width: 100vw;
  }
  .formWidth {
    width: 420px;
  }
}
</style>

