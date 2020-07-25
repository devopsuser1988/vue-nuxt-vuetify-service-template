<template>
  <v-navigation-drawer
    v-if="items && items.length"
    v-model="drawer"
    :clipped="true"
    app
    right
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="border"
      >
        <v-list-item-action>
          <v-icon color="primary">
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      items: 'apps/getItems',
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
}
</script>

<style scoped>
.border {
  border-bottom: solid 1px #e0e0e0;
}
</style>
