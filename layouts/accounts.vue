<template>
  <v-app light>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Accounts',
  middleware: ['check-auth'],
  data() {
    return {}
  },
}
</script>
