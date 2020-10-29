<template>
  <v-app>
    <core-toolbar />
    <core-view />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreToolbar: () => import('@/core/Toolbar'),
    CoreView: () => import('@/core/View')

  }
}
</script>
