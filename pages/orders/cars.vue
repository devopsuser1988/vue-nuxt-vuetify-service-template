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
        { text: 'نام خودرو', value: 'name' },
        { text: 'شماره پلاک', value: 'license_plate_str' },
        { text: 'رنگ', value: 'color' },
        { text: 'یادداشت', value: 'note' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      keyItems: [
        { key: 'name', label: 'نام خودرو', value: '' },
        {
          key: 'license_plate',
          label: 'شماره پلاک',
          value: {},
          licensePlate: true,
        },
        { key: 'color', label: 'رنگ', value: '', colorable: true },
        { key: 'note', label: 'یادداشت', value: '' },
      ],
      routes: {
        gets: 'basics/getCars',
        add: 'basics/addCar',
        edit: 'basics/editCar',
        delete: 'basics/deleteCar',
      },
      messages: {
        title: 'خودروها',
        formAddTitle: 'افزودن خودرو جدید',
        formEditTitle: 'مشاهده و تغییر اطلاعات خودرو',
        formViewTitle: 'مشاهده اطلاعات خودرو',
        searchLabel:
          'برای جستجو اینجا تایپ کنید. (شماره پلاک، نوع خودرو، زمان ثبت وزن خالی، یادداشت و ...)',
        noDataText: 'هیچ خودرویی ثبت نشده',
        noResultsText: 'خودرو مطابق با جستجوی شما یافت نشد',
        loadingText: 'در حال دریافت اطلاعات خودروها ...',
        addSuccessText: 'خودرو جدید با موفقیت اضافه شد.',
        changeSuccessText: 'تغییرات خودرو با موفقیت انجام شد.',
        deleteSuccessText: 'خودرو حذف شد.',
      },
    }
  },
}
</script>
