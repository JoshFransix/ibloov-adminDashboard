<template>
  <div class="loginForm h-screen flex justify-center items-center relative">
    <div class="w-96 formWidth relative">
      <form @submit.prevent="handleSubmit">
        <div class="inputContainer">
          <h1 class="text-2xl mb-9 text-white font-bold">
            {{ inputSection.title }}
          </h1>

          <CustomInput
            v-for="input in inputSection.inputs"
            :key="input.id"
            :input="input"
            v-model="input.value"
            :placeholder="input.placeholder"
            :type="input.type"
          />
        </div>
        <div class="cta mt-6 flex justify-between items-center relative">
          <div class="radioInput flex items-center relative w-max">
            <CheckBox />
            <!-- <input
              type="checkbox"
              class="
                appearance-none
                rounded-full
                h-8
                w-8
                bg-[#c4c4c4]
                checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-4
                cursor-pointer
              "
            /> -->
            <label for="checkbox" class="text-[#c4c4c4]"
              >Keep me signed in</label
            >
          </div>
          <div class="forgotPassword font-bold text-white">
            <NuxtLink to="/">Forgot Password?</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/dashboardPanel">
          <button
            class="
              button
              block
              w-full
              rounded-lg
              px-4
              py-4
              mt-14
              font-bold
              bg-gray-100
              text-blue-900
              transition
              duration-200
              hover:bg-gray-300
            "
          >
            Next
          </button></NuxtLink
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inputSection"],
  // data() {
  //     return {
  //       inputs: [
  //         {
  //           placeholder: 'Email Address',
  //           value: '',
  //           type: 'email',
  //           image: '@/assets/img/email.svg'
  //         },
  //         {
  //           placeholder: 'Password',
  //           value: '',
  //           type: 'password',
  //           image: '@/assets/img/password.svg'
  //         },
  //       ],
  //     }
  //   },
  methods: {
    handleSubmit() {
      console.log(
        this.inputSection.inputs[0].value,
        this.inputSection.inputs[1].value
      );
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
  height: 100vh;
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