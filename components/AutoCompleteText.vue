<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scroll-x-transition"
      class="elevation-5"
      @click="menu = false"
    >
      <template v-slot:activator="{ on }">
        <v-chip color="white" v-on="on">{{ getText }}</v-chip>
      </template>

      <v-card>
        <v-card-text>
          <v-autocomplete
            v-model="_value"
            :items="items"
            :label="label"
            hide-details
            outlined
            dense
            clearable
            @change="menu = false"
          />
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: [String, Number],
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(value) {
        if (value !== null) {
          this.$emit('input', value)
          this.$emit('change')
        }
      },
    },
    getText() {
      const item = this.items.find((item) => item.value === this._value)
      return item ? item.text : ' '
    },
  },
}
</script>
