import CustomEmail from "~/components/icons/CustomEmail.vue"
import CustomPassword from "~/components/icons/CustomPassword.vue"
import CustomEyeOpen from "~/components/icons/CustomEyeOpen.vue"
export default {

  theme: {
    themes: {
      light: {
        primary: '#00237b',
        secondary: '#b0bec5',
        basic: '#fff',
        accent: '#8c9eff',
        // error: '#b71c1c',
        error: '#dc143c'
      }
    }
  },
  icons: {

    values: {
      email: {
        component: CustomEmail
      },
      password: {
        component: CustomPassword
      },
      eyeOpen: {
        component: CustomEyeOpen
      }
    }
  }
}