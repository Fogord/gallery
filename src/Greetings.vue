<template>
  <div class="greetings">
    Hello my dear friend and welcome to image gallery. To proceed
    <router-link to="/gallery">press.</router-link>
  </div>
</template>

<script>
export default {
  name: "Greetings"
};
</script>
<style>
.greetings {
  width: 600px;
  font-size: 1.675rem;
  margin: auto;
  text-align: center;
}
</style>
