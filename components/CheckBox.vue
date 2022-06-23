<template>
  <div>
    <label class="checkbox-container relative flex justify-center align-center">
      <input
        type="checkbox"
        class="
          transition
          duration-200
          align-top
          bg-no-repeat bg-center bg-contain
          float-left
          mr-4
          cursor-pointer
        "
      />
      <span class="checkbox-custom"></span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.checkbox-container {
  margin-top: -1rem;
  margin-right: 1rem;
}

.checkbox-container input {
  position: relative;
  opacity: 0;
  cursor: pointer;
}

.checkbox-container .checkbox-custom {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 33px;
  width: 33px;
  background-color: #c4c4c4;
  border-radius: 50%;
  /* border: 1px solid #fff; */
}

.checkbox-container .checkbox-custom::after {
  position: absolute;
  content: "";
  left: 12px;
  top: 12px;
  height: 0px;
  width: 0px;
  border-radius: 50%;
  border: solid #00237b;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(0deg) scale(0);
  -ms-transform: rotate(0deg) scale(0);
  transform: rotate(0deg) scale(0);
  opacity: 1;
}

.checkbox-container input:checked ~ .checkbox-custom {
  background-color: #fff;
  border-radius: 50%;
  -webkit-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  opacity: 1;
  border: 2px solid #fff;
}

.checkbox-container input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1.5);
  -ms-transform: rotate(45deg) scale(1.5);
  transform: rotate(45deg) scale(1.5);
  opacity: 1;
  left: 11px;
  top: 7.5px;
  width: 6px;
  height: 12px;
  border-radius: 50%;
  border: solid #00237b;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}

.checkbox-container .checkbox-custom,
.checkbox-container .checkbox-custom::after {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
</style>