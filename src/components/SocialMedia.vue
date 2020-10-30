<template>
  <div>
    <v-icon class="ma-2" :dark="dark" large  @click=push(paths.fb)>mdi-facebook</v-icon>
    <v-icon class="ma-2" :dark="dark" large  @click=push(paths.yt)>mdi-youtube</v-icon>
  </div>
</template>
<script>
  export default {
    props:{
      dark: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      paths: {
        fb: 'https://www.facebook.com/POMOCDROGOWABOGUSLAWSKI/',
        yt: 'https://www.youtube.com/watch?v=v9TO6dIcF0A'
      }
    }),
    methods: {
      push(path) {
        window.open(path, '_blank')
      }
    }
  }
</script>
