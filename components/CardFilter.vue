<template>
  <div>
    <!-- <div class="sm:mt-4" transition="scale-transition">
      <label for="filter" class="text-[#999]">Filter By:</label>
      <select name="filter" id="filter" class="
                    px-2
                    py-2
                    cursor-pointer
                    text-[#00237B]
                    outline-none
                    border-2 border-[#ccc]
                  ">
        <option value="">Date</option>
        <option value="">Time</option>
        <option value="">Event</option>
      </select>
    </div> -->
    <div class="sm:mt-4">
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ on, attrs }">
          <label class="text-[#999]" v-bind="attrs" v-on="on">
            Filter By: <span class="text-[#00237b] ml-2">{{ filterOptions }}</span>
          </label>
        </template>
        <v-list class="w-[200px]">

          <a class="flex pl-4 py-3 hover:bg-[#f4f4f4]  h-full" @click="checkFilters($event)"> {{ items[0] }}</a>
          <a class="flex pl-4 py-3 hover:bg-[#f4f4f4]  h-full" @click="checkFilters($event)"> {{ items[1] }}</a>
          <a class="flex pl-4 py-3 hover:bg-[#f4f4f4]  h-full" @click="checkFilters($event)"> {{ items[2] }}</a>

        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Date", "Time", "Event"],
      filterOptions: 'Date'
    }
  },
  methods: {
    checkFilters(event) {
      const current = event.target.text
      this.filterOptions = current
      console.log(current)
    }
  }
}
</script>

<style scoped>
a {
  color: #444;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
</style>