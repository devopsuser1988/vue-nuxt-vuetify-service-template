<template>
  <delivery-manage />
</template>

<script>
export default {
  fetchOnServer: false,
  components: {
    DeliveryManage: () => import('@/components/DeliveryManage'),
  },
  fetch() {
    this.$store.dispatch('basics/getCars')
    this.$store.dispatch('basics/getCustomers')
    this.$store.dispatch('basics/getDrivers')
    this.$store.dispatch('basics/getProducts')
  },
}
</script>
