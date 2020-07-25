<template>
  <v-app light>
    <app-header-bar title="" :nav-icon="false" />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeaderBar from '~/components/AppHeaderBar.vue'

export default {
  name: 'Apps',
  components: {
    AppHeaderBar,
  },
}
</script>
