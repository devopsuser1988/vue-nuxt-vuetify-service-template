<template>
  <v-card>
    <v-card-title>
      تحویل کالا
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-toolbar flat color="white">
        <v-btn color="primary" dark @click="onAddDialog">جدید</v-btn>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="برای جستجو اینجا تایپ کنید."
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="deliverys"
      :search="search"
      :footer-props="{
        'items-per-page-text': 'تعداد نمایش در هر صفحه:',
        'items-per-page-all-text': 'همه',
        'page-text': '{0}–{1} از {2}',
      }"
      :mobile-breakpoint="100"
      no-data-text="هیچ مسیری ثبت نشده"
      no-results-text="مسیری مطابق با جستجوی شما یافت نشد"
      loading-text="در حال دریافت اطلاعات مسیرها ..."
      :loading="loading"
      item-key="_id"
      show-expand
      :sort-by="['date_delivery_str']"
    >
      <template v-slot:item.product_name_str="{ item }">
        <auto-complete-text
          v-model="item.product_id"
          :items="$store.getters['basics/getProductList']"
          label="محصول"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.customer_name_str="{ item }">
        <auto-complete-text
          v-model="item.customer_id"
          :items="$store.getters['basics/getCustomerList']"
          label="مشتری"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.driver_name_str="{ item }">
        <auto-complete-text
          v-model="item.driver_id"
          :items="$store.getters['basics/getDriverList']"
          label="راننده"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.license_plate_str="{ item }">
        <auto-complete-text
          v-model="item.car_id"
          :items="$store.getters['basics/getCarList']"
          label="خودرو"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.status="{ item }">
        <auto-complete-text
          v-model="item.status"
          :items="$enums.getEnumsValues('DELIVERY_STATUS')"
          label="وضعیت"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.date_delivery_str="{ item }">
        <time-select-field
          v-model="item.date_delivery"
          label="زمان ارسال"
          @change="onChangeItem(item)"
        />
      </template>

      <template v-slot:item.total="{ item }">
        <v-edit-dialog :return-value.sync="item.total">
          <v-chip color="white" style="cursor: pointer;">{{
            item.total
          }}</v-chip>
          <template v-slot:input>
            <v-text-field
              v-model="item.total"
              label="مقدار"
              single-line
              type="number"
              @change="onChangeItem(item)"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- eslint-disable-next-line -->
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-container fluid>
            <v-row class="py-0 my-0">
              <v-col cols="11" class="py-0 my-0">
                <v-row class="py-0 my-0">
                  <v-col cols="6" class="py-0 my-0">
                    <v-text-field
                      v-model="item.address_str"
                      label="آدرس"
                      dense
                      readonly
                    />
                  </v-col>
                  <v-col cols="6" class="py-0 my-0">
                    <v-text-field
                      v-model="item.note"
                      label="یادداشت"
                      dense
                      :append-outer-icon="item.note ? 'mdi-check' : ''"
                      @click:append-outer="onChangeItem(item)"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="text-center">
                <v-icon color="red" @click="onDeleteItem(item)">
                  mdi-delete
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </td>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-form @submit.prevent="addDeliveryItem">
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="onClose">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>افزودن مسیر جدید</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text class="d-none d-md-block" type="submit">
                ذخیره
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="newItem.product_id"
                    :items="$store.getters['basics/getProductList']"
                    label="محصول"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="newItem.customer_id"
                    :items="$store.getters['basics/getCustomerList']"
                    label="مشتری"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="newItem.total"
                    label="مقدار"
                    type="number"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <date-text-field
                    v-model="newItem.date_delivery"
                    label="زمان ارسال"
                    type="datetime"
                    display-format="jYYYY/jMM/jDD HH:mm"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="newItem.driver_id"
                    :items="$store.getters['basics/getDriverList']"
                    label="راننده"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="newItem.car_id"
                    :items="$store.getters['basics/getCarList']"
                    label="خودرو"
                  />
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="newItem.status"
                    :items="$enums.getEnumsValues('DELIVERY_STATUS')"
                    label="وضعیت"
                  />
                </v-col>

                <v-col cols="12" sm="6" md="8">
                  <v-text-field v-model="newItem.note" label="یادداشت" />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="onClose">انصراف</v-btn>
            <v-btn color="blue darken-1" text type="submit">ذخیره</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline">آیا از حذف مطئمن هستید؟</v-card-title>

        <v-card-text>
          با حذف این آیتم دیگر امکان بازیابی آن نخواهد بود!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="onClose">
            خیر
          </v-btn>

          <v-btn color="red darken-1" text @click="deleteDeliveryItem">
            بله
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import momentTimezone from 'moment-timezone'

export default {
  fetchOnServer: false,
  components: {
    DateTextField: () => import('@/components/DateTextField'),
    TimeSelectField: () => import('@/components/TimeSelectField'),
    AutoCompleteText: () => import('@/components/AutoCompleteText'),
  },
  fetch() {
    this.$store.dispatch(this.deliveryRoutes.gets)
  },
  data() {
    return {
      search: '',
      newItem: {},
      editedItem: {},
      deleteId: null,
      headers: [
        { text: 'کد', value: 'code_str', align: 'center' },
        { text: 'نام مشتری', value: 'customer_name_str', align: 'center' },
        { text: 'محصول', value: 'product_name_str', align: 'center' },
        { text: 'ساعت حمل', value: 'date_delivery_str', align: 'center' },
        { text: 'نام راننده', value: 'driver_name_str', align: 'center' },
        { text: 'شماره پلاک', value: 'license_plate_str', align: 'center' },
        { text: 'مقدار', value: 'total', align: 'center' },
        { text: 'وضعیت', value: 'status', align: 'center' },
        { text: '', value: 'data-table-expand' },
      ],
      dialog: false,
      dialogDelete: false,
      deliveryRoutes: {
        gets: 'projects/getDeliverys',
        add: 'projects/addDelivery',
        edit: 'projects/editDelivery',
        delete: 'projects/deleteDelivery',
      },
    }
  },
  computed: {
    ...mapState({
      deliverys: (state) => {
        return JSON.parse(JSON.stringify(state.projects.deliverys))
      },
    }),
    loading() {
      return this.$fetchState.pending
    },
  },
  methods: {
    getItemInitVaue() {
      return {
        product_id: '',
        customer_id: '',
        total: 0,
        car_id: '',
        driver_id: '',
        date_delivery: momentTimezone(new Date().toISOString())
          .tz('Asia/Tehran')
          .format(),
        status: 0,
        note: '',
      }
    },
    onAddDialog() {
      this.newItem = this.getItemInitVaue()
      this.dialog = true
    },
    onChangeItem(item) {
      this.editDeliveryItem(item)
    },
    onDeleteItem(item) {
      this.deleteId = item._id
      this.dialogDelete = true
    },
    onClose() {
      this.dialogDelete = false
      this.dialog = false
      this.deleteId = null
    },
    addDeliveryItem() {
      this.$store
        .dispatch(this.deliveryRoutes.add, this.newItem)
        .then((result) => {
          this.$notifier.showMessage({
            content: 'مسیر جدید با موفقیت اضافه شد.',
            type: 'success',
          })
        })

      this.onClose()
    },
    editDeliveryItem(item) {
      this.$store.dispatch(this.deliveryRoutes.edit, item).then((result) => {
        this.$notifier.showMessage({
          content: 'مسیر با موفقیت تغییر یافت.',
          type: 'success',
        })
      })

      this.onClose()
    },
    deleteDeliveryItem() {
      if (this.deleteId)
        this.$store
          .dispatch(this.deliveryRoutes.delete, this.deleteId)
          .then((result) => {
            this.$notifier.showMessage({
              content: 'مسیر حذف شد.',
              type: 'success',
            })
          })
      this.onClose()
    },
  },
}
</script>
