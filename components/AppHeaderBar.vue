<template>
  <v-app-bar :clipped-right="true" dark color="primary" fixed app dense>
    <v-btn icon to="/" nuxt><v-icon>mdi-apps</v-icon> </v-btn>
    <v-app-bar-nav-icon :disabled="!navIcon" @click.stop="drawer = !drawer" />
    <v-spacer />
    <v-avatar size="36">
      <img src="https://randomuser.me/api/portraits/men/85.jpg" />
    </v-avatar>
    <span class="mr-4">{{ name }}</span>
    <v-btn icon @click="onLogout">
      <v-icon>mdi-power</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    navIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      name: 'auth/getFullName',
    }),
    drawer: {
      set(drawer) {
        this.$store.commit('setDrawer', drawer)
      },
      get() {
        return this.$store.state.drawer
      },
    },
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
    onLogout() {
      this.logout()
      this.$router.push('/login')
    },
  },
}
</script>
