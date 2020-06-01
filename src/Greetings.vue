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
</style>
