<template>
  <a>
    <v-btn

      fab
      class="facebook ma-2"
      color="info"
      @click=push(path)
    >
      <v-icon dark>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      fab
      class="mdi-youtube"
      color="info"
      @click=push(path_yt)
    >
      <v-icon dark>mdi-youtube</v-icon>
    </v-btn>
  </a>
</template>
<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      path: 'https://www.facebook.com/POMOCDROGOWABOGUSLAWSKI/',
      path_yt: 'https://www.youtube.com/watch?v=v9TO6dIcF0A'
    }),
    methods: {
      push(path) {
        window.open(path, '_blank')
      }
    }
  }
</script>
