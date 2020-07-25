<template>
  <div>
    <v-row class="flex-child">
      <v-col class="d-flex" cols="12" md="8" offset="0" offset-md="2">
        <v-row>
          <v-col v-for="(app, i) in apps" :key="i" :cols="app.cols">
            <v-sheet
              :color="app.color"
              :height="app.height"
              dark
              tile
              class="sheet-btn"
              @click="setActiveApp(app.name, app.to)"
            >
              <v-container fill-height>
                <v-layout row wrap align-center>
                  <v-flex>
                    <h3 class="text-center">
                      {{ app.title }}
                    </h3>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'apps',
  computed: {
    ...mapState({
      apps: (state) => state.apps.apps,
    }),
  },
  methods: {
    setActiveApp(name, to) {
      this.$store.dispatch('apps/setActiveApp', name)
      this.$router.push(to)
    },
  },
}
</script>

<style scoped>
.sheet-btn {
  cursor: pointer;
}
</style>
