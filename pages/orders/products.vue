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
        { text: 'رنگ', value: 'color' },
        { text: 'یادداشت', value: 'note' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      keyItems: [
        { key: 'name', label: 'نام', value: '' },
        { key: 'unit', label: 'واحد', value: 0, enum: 'UNIT_TYPES' },
        { key: 'color', label: 'رنگ', value: '', colorable: true },
        { key: 'note', label: 'یادداشت', value: '' },
      ],
      routes: {
        gets: 'basics/getProducts',
        add: 'basics/addProduct',
        edit: 'basics/editProduct',
        delete: 'basics/deleteProduct',
      },
      messages: {
        title: 'محصولات',
        formAddTitle: 'افزودن محصول جدید',
        formEditTitle: 'مشاهده و تغییر اطلاعات محصول',
        formViewTitle: 'مشاهده اطلاعات محصول',
        searchLabel: 'برای جستجو اینجا تایپ کنید. (نام محصول، یادداشت)',
        noDataText: 'هیچ محصولی ثبت نشده',
        noResultsText: 'محصولی مطابق با جستجوی شما یافت نشد',
        loadingText: 'در حال دریافت اطلاعات محصولات  ...',
        addSuccessText: 'محصول جدید با موفقیت اضافه شد.',
        changeSuccessText: 'تغییرات محصول با موفقیت انجام شد.',
        deleteSuccessText: 'محصول حذف شد.',
      },
    }
  },
}
</script>
