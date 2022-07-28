<template>
  <div>
    <div class="sm:mt-4">
      <v-menu
        v-model="menu"
        transition="scale-transition"
        :close-on-content-click="false"
        :nudge-height="200"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <label
            class="
              text-[#555]
              rounded-xl
              px-4
              py-2
              bg-slate-300
              cursor-pointer
              filter-label
            "
            v-on="on"
            v-bind="attrs"
          >
            Filter By:
            <span class="text-[#00237b] ml-2"
              >{{ filterOptions }}
              <v-icon color="primary">{{
                menu ? "mdi-chevron-down" : "mdi-chevron-up"
              }}</v-icon>
            </span>
          </label>
        </template>
        <v-list>
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
          <div>
            <v-menu
              v-model="starMenu"
              transition="scale-transition"
              :close-on-content-click="false"
              :nudge-left="70"
            >
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
                  class="
                    cursor-pointer
                    flex
                    justify-between
                    pl-4
                    py-3
                    hover:bg-[#f4f4f4]
                  "
                  >Star Rating
                  <v-icon>{{
                    starMenu ? "mdi-chevron-down" : "mdi-chevron-right"
                  }}</v-icon></label
                >
              </template>
              <v-card>
                <v-card-title
                  class="flex flex-row items-center justify-between"
                >
                  <!-- <span class="text-[#999] text-sm">Filter By</span> -->
                  <span class="text-sm text-[#999] text-center"
                    >Star Rating</span
                  >
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
                          size="20"
                        ></v-rating>
                      </div>
                    </div>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
          <div>
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <label
                  v-on="on"
                  v-bind="attrs"
                  class="
                    cursor-pointer
                    flex
                    justify-between
                    pl-4
                    py-3
                    hover:bg-[#f4f4f4]
                  "
                  >Custom Date
                  <v-icon>{{
                    dateMenu ? "mdi-chevron-down" : "mdi-chevron-right"
                  }}</v-icon></label
                >
              </template>
              <v-card>
                <v-card-title
                  class="flex flex-row items-center justify-between"
                >
                  <!-- <span class="text-[#999] text-sm">Filter By</span> -->
                  <span class="text-sm text-[#999] text-center"
                    >Custom Date</span
                  >
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="flex justify-center items-center">
                      <div>
                        <v-menu
                          ref="dateMenu2"
                          :return-value.sync="date"
                          v-model="dateMenu2"
                          :close-on-content-click="false"
                          transition="scale-transition"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateFormatted"
                              @blur="date = parseDate(dateFormatted)"
                              label="From"
                              prepend-icon="mdi-calendar"
                              readonly
                              outlined
                              dense
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" scrollable>
                            <v-btn
                              text
                              color="primary"
                              @click="dateMenu2 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dateMenu2.save(date)"
                            >
                              OK
                            </v-btn></v-date-picker
                          >
                        </v-menu>
                        <v-menu
                          ref="dateMenu3"
                          :return-value.sync="date2"
                          v-model="dateMenu3"
                          :close-on-content-click="false"
                          transition="scale-transition"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateFormatted"
                              @blur="date = parseDate(dateFormatted)"
                              label="To"
                              outlined
                              dense
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date2" scrollable
                            ><v-btn
                              text
                              color="primary"
                              @click="dateMenu3 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dateMenu3.save(date2)"
                            >
                              OK
                            </v-btn></v-date-picker
                          >
                        </v-menu>
                      </div>
                    </div>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dateMenu = false">
                    Apply
                  </v-btn>
                  <v-btn color="primary" text @click="dateMenu = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["check-filter"],
  data: (vm) => ({
    items: ["All", "7 days", "15 days", "1 month"],
    filterOptions: "All",
    starFilter: 5,
    checkedFilterValues: "All",
    starMenu: false,
    dateMenu: false,
    dateMenu2: false,
    dateMenu3: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    menu: false,
    closeOnClick: true,
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
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
      this.starMenu = false;
    },
    checkDateFilter() {},
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
label,
v-icon,
div,
template,
input,
v-menu,
v-btn,
span {
  transition: all 0.2s ease-in-out;
}

label:not(.filter-label):hover,
v-icon:hover {
  color: #00237b;
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


