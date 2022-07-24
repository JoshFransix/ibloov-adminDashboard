<template>
  <div>
    <div class="sm:mt-4">
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ on, attrs }">
          <label class="text-[#999]" v-bind="attrs" v-on="on">
            Filter By:
            <span class="text-[#00237b] ml-2">{{ filterOptions }}</span>
          </label>
        </template>
        <v-list class="w-[200px]">
          <div class="flex items-center">
            <input
              @click="checkFilters($event)"
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              class="absolute opacity-0"
              :value="items[0]"
              checked
            />
            <label
              for="checkbox1"
              class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]"
              >{{ items[0] }}</label
            >
          </div>

          <div class="flex items-center">
            <input
              @click="checkFilters($event)"
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              class="absolute opacity-0"
              :value="items[1]"
              checked
            />
            <label
              for="checkbox2"
              class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]"
              >{{ items[1] }}</label
            >
          </div>

          <div class="flex items-center">
            <input
              @click="checkFilters($event)"
              type="checkbox"
              id="checkbox3"
              name="checkbox3"
              class="absolute opacity-0"
              :value="items[2]"
              checked
            />
            <label
              for="checkbox3"
              class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]"
              >{{ items[2] }}</label
            >
          </div>
          <div class="flex items-center">
            <input
              @click="checkFilters($event)"
              type="checkbox"
              id="checkbox4"
              name="checkbox4"
              class="absolute opacity-0"
              :value="items[3]"
              checked
            />
            <label
              for="checkbox4"
              class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]"
              >{{ items[3] }}</label
            >
          </div>

          <!-- <div class="flex items-center">
            <button @click="checkFilters($event)" class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]">{{ items[1]
            }}</button>
          </div>

          <div class="flex items-center">
            <button @click="checkFilters($event)" class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]">{{ items[2]
            }}</button>
          </div> -->
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["check-filter"],
  data() {
    return {
      items: ["All", "Date", "Time", "Event"],
      filterOptions: "All",
      checkedFilterValues: ["Date", "Time", "Event"],
    };
  },
  methods: {
    checkFilters(event) {
      this.filterOptions = event.target.value;
      if (event.target.value === "All") {
        this.checkedFilterValues = ["Date", "Time", "Event"];
        // console.log(this.checkedFilterValues)
      } else {
        this.checkedFilterValues = event.target.value;
        // console.log(this.checkedFilterValues)
      }

      this.$emit("check-filter", this.checkedFilterValues);
    },
  },
};
</script>

<style scoped>
v-list label {
  color: #444;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>


