<template>
  <div>
    <div class="greetings">
      Hello my dear friend and welcome to image gallery. To proceed
      <router-link to="/gallery">press.</router-link>
    </div>
    <div class="container1">
      <div class="container2">
        <img
          class="red"
          :src="imgs[selectedImgIndex]"
          @click="showInFullScreen()"
        />

        <div class="green"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greetings",
  data() {
    return {
      selectedImgIndex: 0
    };
  },
  computed: {
    imgs() {
      return [
        require("./assets/1_480x480.png"),
        require("./assets/2_480x480.png"),
        require("./assets/3_480x480.png"),
        require("./assets/4_480x480.png"),
        require("./assets/5_480x480.png")
      ];
    }
  }
};
</script>
<style scoped>
.greetings {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (min-width: 768px) {
  .greetings {
    display: block;
  }
}

.container1 {
  width: 100%;
}

.container2 {
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
}

.red {
  background-color: tomato;
  /* height: 100vh; */
  /* flex-grow: 1; */
  /* width: 100%; */
  /* display: flex; */
  align-self: center;
  justify-self: center;
}

.green {
  background-color: teal;
  width: 250px;
  height: 100%;
  justify-self: flex-end;
}
</style>
