<template>
  <div class="home">
    <img src="@/assets/logo.png" class="logo" alt="">
    <!-- <v-btn to="/about">about</v-btn> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>

<style>
/* .v-application--wrap {
  backface-visibility: visible;
} */
</style>

<style lang="scss" scoped>
.logo {
  display: block;
  // display: inline-block;
  width: 73px;
  height: 73px;
  border-radius: 50%;
}
</style>
