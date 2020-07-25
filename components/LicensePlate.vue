<template>
  <v-container fluid class="py-0">
    <v-row>
      <v-col cols="3" class="py-0">
        <v-text-field v-model="province" label="ایران" />
      </v-col>
      <v-col cols="3" class="py-0">
        <v-text-field v-model="three_part" label="سه رقمی" />
      </v-col>
      <v-col cols="3" class="py-0">
        <v-text-field v-model="city" label="حرف" />
      </v-col>
      <v-col cols="3" class="py-0">
        <v-text-field v-model="two_part" label="دو رقمی" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: false,
      default: () => ({
        province: '',
        three_part: '',
        city: '',
        two_part: '',
        type: '',
      }),
    },
  },
  computed: {
    province: {
      get() {
        return this.value && this.value.province ? this.value.province : ''
      },
      set(item) {
        const _license = {
          province: item,
          three_part: this.three_part,
          city: this.city,
          two_part: this.two_part,
          type: this.type,
        }
        this.$emit('input', JSON.parse(JSON.stringify(_license)))
      },
    },
    three_part: {
      get() {
        return this.value && this.value.three_part ? this.value.three_part : ''
      },
      set(item) {
        const _license = {
          province: this.province,
          three_part: item,
          city: this.city,
          two_part: this.two_part,
          type: this.type,
        }
        this.$emit('input', JSON.parse(JSON.stringify(_license)))
      },
    },
    city: {
      get() {
        return this.value && this.value.city ? this.value.city : ''
      },
      set(item) {
        const _license = {
          province: this.province,
          three_part: this.three_part,
          city: item,
          two_part: this.two_part,
          type: this.type,
        }
        this.$emit('input', JSON.parse(JSON.stringify(_license)))
      },
    },
    two_part: {
      get() {
        return this.value && this.value.two_part ? this.value.two_part : ''
      },
      set(item) {
        const _license = {
          province: this.province,
          three_part: this.three_part,
          city: this.city,
          two_part: item,
          type: this.type,
        }
        this.$emit('input', JSON.parse(JSON.stringify(_license)))
      },
    },
    type: {
      get() {
        return this.value && this.value.type ? this.value.type : ''
      },
      set(item) {
        const _license = {
          province: this.province,
          three_part: this.three_part,
          city: this.city,
          two_part: this.two_part,
          type: item,
        }
        this.$emit('input', JSON.parse(JSON.stringify(_license)))
      },
    },
  },
}
</script>
