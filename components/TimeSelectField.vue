<template>
  <div>
    <v-chip :id="randomId" color="white">{{ show }}</v-chip>
    <client-only>
      <DatePicker
        v-model="date"
        format="YYYY-MM-DDTHH:mm:ss"
        :element="randomId"
        type="time"
      />
    </client-only>
  </div>
</template>

<script>
import momentJalaali from 'moment-jalaali'
import momentTimezone from 'moment-timezone'

export default {
  props: {
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
        this.$emit('change')
      },
    },
    show: {
      get() {
        if (this.value === null) return ''
        else return momentJalaali(this.value).format('HH:mm')
      },
      set(show) {},
    },
  },
  beforeMount() {
    this.randomId = Math.random().toString(36).substr(4, 16)
  },
}
</script>
