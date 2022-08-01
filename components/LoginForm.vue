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
        <div class="formWidth relative">
          <v-form @submit.prevent="handleSubmit" ref="form" v-model="valid">
            <div class="inputContainer">
              <h1 class="text-2xl mb-9 text-white font-bold">
                {{ inputSection.title }}
              </h1>

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
                  prepend-inner-icon="$email"
                  required
                />
              </div>
              <div class="">
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
                  prepend-inner-icon="$password"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
              </div>
            </div>
            <div
              class="
                cta
                mt-6
                flex
                justify-between
                items-center
                relative
                sm:flex-col sm:items-start
              "
            >
              <CheckBox />

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
                :disabled="!valid"
                type="submit"
                color="white"
                depressed
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
                <span class="primary--text">Next</span>
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
      valid: false,
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
        this.invalid = false;
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
v-btn {
  font-family: "Poppins", sans-serif;
}
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
@media screen and (max-width: 490px) {
  .formWidth {
    width: 100%;
    padding: 0 1rem;
  }
}
</style>

