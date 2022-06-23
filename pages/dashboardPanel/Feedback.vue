<template>
  <div class="feedbackContainer relative">
    <SideBar />
    <div class="px-6 py-4 feedbackContent absolute bg-white">
      <div
        class="
          relative
          h-full
          w-full
          rounded-sm
          bg-slate-200
          flex flex-col
          items-center
          px-8
          py-8
        "
      >
        <div
          class="topContent w-full flex items-center justify-between font-bold"
        >
          <h1 class="text-3xl text-black">Manage Feedback</h1>
          <UserBox />
        </div>

        <div class="totalRating mt-10 flex justify-between items-center w-full">
          <div class="ratingReview flex items-center">
            <h1 class="text-8xl text-[#00237B] mr-8 font-bold">5.0</h1>
            <div class="star">
              <h2 class="text-md">stars</h2>
              <span class="number text-2xl text-[#00237B]">300 Reviews</span>
            </div>
          </div>
          <div class="filter">
            <label for="filter" class="text-[#999]">Filter By:</label>
            <select
              name="filter"
              id="filter"
              class="
                bg-transparent
                appearance-none
                px-2
                py-2
                rounded-lg
                cursor-pointer
                text-[#00237B]
              "
            >
              <option value="">Date</option>
              <option value="">Time</option>
              <option value="">Event</option>
            </select>
          </div>
        </div>

        <!-- Review Body -->
        <div class="reviewBody mt-14 w-full">
          <div class="reviewContainer">
            <div
              class="
                cardContainer
                grid grid-cols-2
                gap-16
                pb-24
                overflow-y-scroll overflow-x-hidden
              "
            >
              <div class="card h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
              <div class="card w-96 h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
              <div class="card w-96 h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
              <div class="card w-96 h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
              <div class="card w-96 h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
              <div class="card w-96 h-40 bg-white rounded-lg">
                <div class="cardHeader"></div>
                <div class="cardText"></div>
                <div class="cardFooter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.feedbackContainer .feedbackContent {
  width: 80vw;
  height: 100vh;
  right: 0;
}

.cardContainer {
  height: 400px;
}

.cardContainer .card {
  width: 520px;
  height: 170px;
}
</style>