const dashboard = [
  {
    icon: 'mdi-chart-areaspline',
    title: 'در یک نگاه',
    to: '/dashboard',
  },
  {
    icon: 'mdi-chart-timeline',
    title: 'تولید',
    to: '/dashboard/generation',
  },
  {
    icon: 'mdi-chart-pie',
    title: 'کنترل کیفیت',
    to: '/dashboard/quality',
  },
]

const accounting = []

const orders = [
  {
    icon: 'mdi-order-bool-ascending-variant',
    title: 'مدیریت تحویل کالا',
    to: '/orders',
  },
  {
    icon: 'mdi-buffer',
    title: 'محصولات',
    to: '/orders/products',
  },
  {
    icon: 'mdi-truck',
    title: 'خودروها',
    to: '/orders/cars',
  },
  {
    icon: 'mdi-account',
    title: 'راننده ها',
    to: '/orders/drivers',
  },
  {
    icon: 'mdi-crown',
    title: 'مشتریان',
    to: '/orders/customers',
  },
]

const quality = [
  {
    icon: 'mdi-calendar-month',
    title: 'پروژه',
    to: '/quality',
  },
  {
    icon: 'mdi-beaker-outline',
    title: 'آزمایش ها',
    to: '/quality/test',
  },
  {
    icon: 'mdi-beaker-question-outline',
    title: 'امروز',
    to: '/quality/today-test',
  },
  {
    icon: 'mdi-cog-outline',
    title: 'تنظیمات',
    to: '/quality/setting',
  },
]

const navigation = [
  {
    icon: 'mdi-map-clock-outline',
    title: 'گزارش تردد',
    to: '/navigation',
  },
  {
    icon: 'mdi-earth',
    title: 'مانیتور',
    to: '/navigation/monitoring',
  },
  {
    icon: 'mdi-map-marker',
    title: 'ردیابی',
    to: '/navigation/tracking',
  },
]

const apps = [
  {
    name: 'dashboard',
    icon: 'mdi-chart-areaspline',
    title: 'داشبورد مدیریتی',
    color: 'green accent-4',
    height: 150,
    cols: 8,
    to: '/dashboard',
    items: dashboard,
  },
  {
    name: 'accounting',
    icon: 'mdi-homechart-bubble',
    title: 'حسابداری',
    color: 'blue accent-4',
    height: 150,
    cols: 4,
    to: '/accounting',
    items: accounting,
  },
  {
    name: 'orders',
    icon: 'mdi-calendar-month',
    title: 'مدیریت سفارش ها',
    color: 'purple accent-4',
    height: 150,
    cols: 4,
    to: '/orders',
    items: orders,
  },
  {
    name: 'quality',
    icon: 'mdi-beaker-outline',
    title: 'کنترل کیفیت',
    color: 'red accent-4',
    height: 150,
    cols: 8,
    to: '/quality',
    items: quality,
  },
  {
    name: 'navigation',
    icon: 'mdi-map-outline',
    title: 'ناوگان حمل و نقل',
    color: 'teal accent-4',
    height: 150,
    cols: 12,
    to: '/navigation',
    items: navigation,
  },
]

export const state = () => ({
  activeApp: {},
  apps,
})

export const mutations = {
  changeActiveApp(state, name) {
    state.activeApp = state.apps.find((app) => app.name === name)
  },
}

export const actions = {
  setActiveApp(vuexContext, name) {
    vuexContext.commit('changeActiveApp', name)
  },
}

export const getters = {
  getItems(state) {
    return state.activeApp && state.activeApp.items ? state.activeApp.items : []
  },
}
