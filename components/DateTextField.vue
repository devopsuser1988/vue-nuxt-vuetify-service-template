<template>
  <div>
    <v-text-field :id="randomId" v-model="show" :label="label" />
    <client-only>
      <DatePicker
        v-model="date"
        format="YYYY-MM-DDTHH:mm:ss"
        :element="randomId"
        :type="type"
      />
    </client-only>
  </div>
</template>

<script>
import momentJalaali from 'moment-jalaali'
import momentTimezone from 'moment-timezone'

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'date',
    },
    displayFormat: {
      type: String,
      required: false,
      default: 'jYYYY/jMM/jDD',
    },
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
  data() {
    return {
      randomId: '',
    }
  },
  computed: {
    date: {
      get() {
        const d = this.value ? this.value : new Date().toISOString()
        return momentTimezone(d).tz('Asia/Tehran').format()
      },
      set(date) {
        this.$emit('input', momentTimezone(date).toISOString())
      },
    },
    show: {
      get() {
        if (this.value === null) return ''
        else return momentJalaali(this.value).format(this.displayFormat)
      },
      set(show) {},
    },
  },
  beforeMount() {
    this.randomId = Math.random().toString(36).substr(4, 16)
  },
}
</script>
