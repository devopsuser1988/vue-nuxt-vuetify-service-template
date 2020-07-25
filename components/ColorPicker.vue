<template>
  <div>
    <v-menu open-on-focus open-on-hover open-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :label="label"
          v-bind="attrs"
          dense
          hide-details
          v-on="on"
        >
          <template v-slot:append>
            <v-avatar :color="color" style="cursor: pointer;" v-on="on" />
          </template>
        </v-text-field>
      </template>

      <v-color-picker
        v-model="color"
        hide-inputs
        show-swatches
        hide-canvas
      ></v-color-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    color: {
      get() {
        return '#' + String(this.value) + 'ff'
      },
      set(color) {
        if (color !== null) this.$emit('input', String(color).substring(1, 7))
      },
    },
  },
}
</script>
