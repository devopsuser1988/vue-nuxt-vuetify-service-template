<template>
  <v-app light>
    <app-header-bar title="" />
    <app-side-bar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <app-notification />
  </v-app>
</template>

<script>
import AppHeaderBar from '~/components/AppHeaderBar.vue'
import AppSideBar from '~/components/AppSideBar.vue'
import AppNotification from '~/components/AppNotification.vue'

export default {
  name: 'Default',
  middleware: ['check-auth', 'auth', 'check-info', 'check-app'],
  components: {
    AppHeaderBar,
    AppSideBar,
    AppNotification,
  },
}
</script>
