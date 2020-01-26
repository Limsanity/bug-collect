<template>
  <div class="about">
    <v-btn @click="fOnButtonClick">home</v-btn>
  </div>
</template>

<script>
export default {
  layout: 'about',
  methods: {
    fOnButtonClick () {
      this.$router.back()
    }
  }
}
</script>
