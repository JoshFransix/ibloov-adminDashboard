<!-- <template>
  <div
    class="
      input-style
      bg-white
      flex
      items-center
      rounded-lg
      mt-4
      transition-all
      ease-in-out
      duration-200
      shadow-md
      border-2 border-[#c5c5c5]
      w-full
    "
  >
    <img :src="require(`@/assets/img/${input.image}`)" alt="" class="mr-4" />
    <input
      class="transition duration-200 outline-none w-full"
      :placeholder="placeholder"
      :type="type"
      v-model="inputValue"
      required
    />
    <div>
      <img
        :src="require(`@/assets/img/${input.class}`)"
        class="ml-4 cursor-pointer"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type", "modelValue", "input"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update", value);
        console.log(value);
      },
    },
  },
};
</script>

<style scoped>
.input-style {
  padding: 0.8rem 1rem;
}
</style> -->



<!-- <template>
  


<div>
                <div class="form-data" v-if="!submitted">
                    <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text" v-model="email" v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true">
                        <div class="invalid-feedback">A valid email is required!</div>
                    </div>
                    <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true">
                        <div class="invalid-feedback">Password must be 8 character!</div>
                    </div>
                    <div class="mb-3"> <button v-on:click.stop.prevent="submit" class="btn btn-dark w-100">Login</button> </div>
                </div>
                <div class="success-data" v-else>
                    <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
                </div>
  </div>
</template> -->


<style scoped>
</style>