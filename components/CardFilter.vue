<template>
  <div>
    <div class="sm:mt-4">
      <v-menu
        v-model="menu"
        transition="slide-y-reverse-transition"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <label class="text-[#999] cursor-pointer" v-on="on" v-bind="attrs">
            Filter By:
            <span class="text-[#00237b] ml-2">{{ filterOptions }}</span>
          </label>
        </template>
        <v-list class="w-[200px]">
          <div class="items-center">
            <input
              @change="checkFilters($event)"
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

          <div class="items-center">
            <input
              @change="checkFilters($event)"
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
          <div>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="checkbox"
                  id="checkbox2"
                  name="checkboxStar"
                  class="absolute opacity-0"
                  :value="starFilter"
                  checked
                />
                <label
                  v-on="on"
                  v-bind="attrs"
                  for="checkboxStar"
                  class="cursor-pointer flex pl-4 py-3 hover:bg-[#f4f4f4]"
                  >Star Rating</label
                >
              </template>
              <v-card>
                <v-card-title
                  class="flex flex-row items-center justify-between"
                >
                  <span class="text-[#999] text-sm">Filter By</span>
                  <span class="text-md text-black">Star Rating</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="flex justify-center items-center">
                      <div @click="checkStarFilter">
                        <v-rating
                          class="inline-block transition duration-200"
                          color="starfilled"
                          v-model="starFilter"
                          background-color="starempty"
                          empty-icon="$ratingFull"
                          hover
                          length="5"
                          size="35"
                        ></v-rating>
                      </div>
                    </div>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

          <div class="items-center">
            <input
              @change="checkFilters($event)"
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
          <div class="items-center">
            <input
              @change="checkFilters($event)"
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
      items: ["All", "Yesterday", "Today", "Tomorrow"],
      filterOptions: "All",
      starFilter: 5,
      checkedFilterValues: "All",
      dialog: false,
      menu: false,
      closeOnClick: true,
    };
  },
  methods: {
    checkFilters(event) {
      this.filterOptions = event.target.value;
      if (event.target.value === "All") {
        this.checkedFilterValues = "All";
        // console.log(this.checkedFilterValues)
      } else {
        this.checkedFilterValues = [];
        this.checkedFilterValues = event.target.value;
        // console.log(this.checkedFilterValues)
      }

      this.$emit("check-filter", this.checkedFilterValues);
    },
    checkStarFilter() {
      this.checkedFilterValues = this.starFilter;
      this.$emit("check-filter", this.checkedFilterValues);
      this.dialog = false;
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

.flex {
  display: flex;
}
</style>


