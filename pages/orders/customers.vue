<template>
  <data-table
    :headers="headers"
    :key-items="keyItems"
    :routes="routes"
    :messages="messages"
    viewable
  />
</template>

<script>
export default {
  components: {
    DataTable: () => import('@/components/DataTable'),
  },
  data() {
    return {
      headers: [
        { text: 'نام', value: 'name' },
        { text: 'شماره همراه', value: 'mobile_phone' },
        { text: 'آدرس', value: 'address' },
        { text: 'یادداشت', value: 'note' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      keyItems: [
        { key: 'name', label: 'نام', value: '' },
        { key: 'email', label: 'ایمیل', value: '' },
        { key: 'mobile_phone', label: 'شماره همراه', value: '' },
        { key: 'phone', label: 'شماره ثابت', value: '' },
        { key: 'address', label: 'آدرس', value: '' },
        { key: 'note', label: 'یادداشت', value: '' },
      ],
      routes: {
        gets: 'basics/getCustomers',
        add: 'basics/addCustomer',
        edit: 'basics/editCustomer',
        delete: 'basics/deleteCustomer',
      },
      messages: {
        title: 'مشتری ها',
        formAddTitle: 'افزودن مشتری جدید',
        formEditTitle: 'مشاهده و تغییر اطلاعات مشتری',
        formViewTitle: 'مشاهده اطلاعات مشتری',
        searchLabel:
          'برای جستجو اینجا تایپ کنید. (نام مشتری، نام خانوادگی، تلفن، آدرس و ...)',
        noDataText: 'هیچ مشتری ثبت نشده',
        noResultsText: 'مشتری مطابق با جستجوی شما یافت نشد',
        loadingText: 'در حال دریافت اطلاعات مشتریان ...',
        addSuccessText: 'مشتری جدید با موفقیت اضافه شد.',
        changeSuccessText: 'تغییرات مشتری با موفقیت انجام شد.',
        deleteSuccessText: 'مشتری حذف شد.',
      },
    }
  },
}
</script>
