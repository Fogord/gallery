<template>
  <div class="gallery">
    <div class="fullScreen" v-show="showFullScreen">
      <div class="fullScreen-content">
        <div class="fullScreen-container">
          <span class="close" @click="showInFullScreen()">&times;</span>
          <span class="arrow left" @click="left()"></span>
          <img :src="imgs[selectedImgIndex]" />
          <span class="arrow right" @click="right()"></span>
        </div>
      </div>
    </div>
    <div class="galleryContent">
      <div class="galleryImg">
        <img :src="imgs[selectedImgIndex]" @click="showInFullScreen()" />
      </div>
      <v-list class="galleryList">
        <v-list-item-group v-model="selectedImgIndex" mandatory>
          <v-list-item
            v-for="(img, i) in imgs"
            :key="i"
            :class="selectedImgIndex === i ? 'selected' : ''"
          >
            <v-list-item-content>
              <img :src="img" style="width: 100%;" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      showFullScreen: false,
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
  },
  methods: {
    showInFullScreen() {
      this.showFullScreen = !this.showFullScreen;
    },
    left() {
      if (this.selectedImgIndex === 0)
        this.selectedImgIndex = this.imgs.length - 1;
      else this.selectedImgIndex -= 1;
    },
    right() {
      if (this.selectedImgIndex === this.imgs.length - 1)
        this.selectedImgIndex = 0;
      else this.selectedImgIndex += 1;
    }
  }
};
</script>
<style>
.fullScreen {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.fullScreen-content {
  background-color: #fefefe;
  margin: 1% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  height: 90%;
  cursor: pointer;
}

.galleryContent:hover img {
  cursor: pointer;
}

.fullScreen-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.fullScreen-container img {
  height: 100%;
  width: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.arrow {
  border: solid #aaa;
  border-width: 0 5px 5px 0;
  width: 50px;
  height: 50px;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  top: calc(50% - 25px);
}

.right {
  margin: auto;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 0;
}

.left {
  margin: auto;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 0;
}

.right:hover,
.left:hover {
  border: solid black;
  border-width: 0 5px 5px 0;
  cursor: pointer;
}

.gallery {
  margin: auto;
}

.galleryContent {
  display: flex;
  flex-direction: row;
  border: 1px solid #888;
  border-radius: 10px;
  padding: 10px;
  height: 90vh;
}

.galleryImg {
  flex-grow: 1;
}

.galleryImg img {
  width: 100%;
  height: 100%;
}

.galleryList {
  width: 20%;
  overflow-y: auto;
  padding: 8px 8px 8px 0px;
}

.selected {
  color: blue;
  border: 1px solid #888;
  border-radius: 10px;
}
</style>
