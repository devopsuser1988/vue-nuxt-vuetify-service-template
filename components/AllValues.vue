<template>
  <v-container fluid tag="section">
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-medal"
          title="Contracts"
          :value="contractCount"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-account-box-multiple"
          title="Users"
          :value="userCount"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-account-tie-voice"
          title="Orders"
          :value="orderCount"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-credit-card-outline"
          title="Payments"
          :value="paymentCount"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="success"
          icon="mdi-calendar-check"
          title="Projects"
          :value="projectCount"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="orange"
          icon="mdi-truck-fast"
          title="Transports"
          :value="transportCount"
          sub-icon="mdi-weight"
          :sub-text="`${transportWeight} tons scheduled`"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="purple darken-2"
          icon="mdi-seal-variant"
          title="Quality Tests"
          :value="clabCount"
          sub-icon="mdi-test-tube"
          :sub-text="`${csctrPassedCount} pass, ${csctrFailCount} fail,  ${csctrNotTestedCount} not tested`"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="cyan darken-2"
          icon="mdi-crown"
          title="Customers"
          :value="customerCount"
          sub-icon="mdi-currency-usd"
          :sub-text="`${activeCustomerCount} active customer`"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="cyan darken-2"
          icon="mdi-account-hard-hat"
          title="Drivers"
          :value="driverCount"
          sub-icon="mdi-card-account-details"
          :sub-text="`${mainDriverCount} main, ${guestDriverCount} guest`"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="cyan darken-2"
          icon="mdi-tanker-truck"
          title="Cars"
          :value="carCount"
          sub-icon="mdi-dump-truck"
          :sub-text="`${mainCarCount} main, ${guestCarCount} guest`"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AllValues',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      contractCount: (state) => String(state.values.contracts.count),
      userCount: (state) => String(state.values.users.count),
      orderCount: (state) => String(state.values.orders.count),
      paymentCount: (state) => String(state.values.payments.count),
      projectCount: (state) => String(state.values.projects.count),
      transportCount: (state) => String(state.values.transports.count),
      transportWeight: (state) =>
        String(
          Number(state.values.transports.total_net_weight / 1000).toFixed(0)
        ),
      clabCount: (state) => String(state.values.clabs.count),
      csctrPassedCount: (state) => String(state.values.csctrs.pass_count),
      csctrFailCount: (state) => String(state.values.csctrs.fail_count),
      csctrNotTestedCount: (state) =>
        String(state.values.csctrs.not_tested_count),
      customerCount: (state) => String(state.values.customers.count),
      activeCustomerCount: (state) =>
        String(state.values.customers.active_count),
      driverCount: (state) => String(state.values.drivers.count),
      mainDriverCount: (state) => String(state.values.drivers.main_count),
      guestDriverCount: (state) => String(state.values.drivers.guest_count),
      carCount: (state) => String(state.values.cars.count),
      mainCarCount: (state) => String(state.values.cars.main_count),
      guestCarCount: (state) => String(state.values.cars.guest_count),
    }),
  },
}
</script>
