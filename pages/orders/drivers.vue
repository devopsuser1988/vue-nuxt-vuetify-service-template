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
        { text: 'تلفن همراه', value: 'mobile_phone' },
        { text: 'تلفن ثابت', value: 'phone' },
        { text: 'آدرس', value: 'address' },
        { text: 'یادداشت', value: 'note' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      keyItems: [
        { key: 'name', label: 'نام', value: '' },
        { key: 'mobile_phone', label: 'شماره تلفن همراه', value: '' },
        { key: 'phone', label: 'شماره تلفن ثابت', value: '' },
        { key: 'email', label: 'ایمیل', value: '' },
        { key: 'address', label: 'آدرس', value: '' },
        { key: 'note', label: 'یادداشت', value: '' },
      ],
      routes: {
        gets: 'basics/getDrivers',
        add: 'basics/addDriver',
        edit: 'basics/editDriver',
        delete: 'basics/deleteDriver',
      },
      messages: {
        title: 'راننده ها',
        formAddTitle: 'افزودن راننده جدید',
        formEditTitle: 'مشاهده و تغییر اطلاعات راننده',
        formViewTitle: 'مشاهده اطلاعات راننده',
        searchLabel:
          'برای جستجو اینجا تایپ کنید. (نام راننده، نام خانوادگی، تلفن، آدرس و ...)',
        noDataText: 'هیچ راننده ای ثبت نشده',
        noResultsText: 'راننده ای مطابق با جستجوی شما یافت نشد',
        loadingText: 'در حال دریافت اطلاعات راننده ها ...',
        addSuccessText: 'راننده جدید با موفقیت اضافه شد.',
        changeSuccessText: 'تغییرات راننده با موفقیت انجام شد.',
        deleteSuccessText: 'راننده حذف شد.',
      },
    }
  },
}
</script>
