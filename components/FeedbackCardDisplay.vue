<template>
  <div class="relative card bg-white rounded-lg pr-8 pl-4 pt-1 pb-7">
    <div class="cardHeader flex justify-between items-center w-full">
      <div class="topLeft flex justify-between items-center">
        <img
          :src="require(`@/assets/img/${cardsSection.image}`)"
          alt=""
          class="-mt-10 mr-3 w-20 h-20 rounded-full"
        />
        <div class="topLeftText flex flex-col justify-center items-center">
          <h1 class="text-2xl font-medium text-[#263238]">
            {{ cardsSection.name }}
          </h1>
          <div class="numberEmail flex justify-between items-center w-full">
            <span class="number text-small">{{
              cardsSection.phoneNumber
            }}</span>
            <span class="email text-small">{{ cardsSection.email }}</span>
          </div>
        </div>
      </div>
      <div class="topRight">
        <span class="date text-small">{{ cardsSection.date }}</span>
      </div>
    </div>
    <div class="cardText">
      <p class="font-normal text-sm text-[#010101] text-justify mt-6">
        {{ cardsSection.message }}
      </p>
    </div>
    <div class="cardFooter mt-7 flex justify-between w-full">
      <span class="readMore text-small">Read More</span>
      <span class="star text-[#00237B] text-small">{{
        cardsSection.star
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}

.text-small {
  font-size: 9px;
  color: #00237b;
  font-weight: 600;
}
</style>