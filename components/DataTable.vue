<template>
  <v-card>
    <v-card-title>
      {{ messages.title }}
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-toolbar flat color="white">
        <v-dialog
          v-model="dialog"
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">جدید</v-btn>
          </template>
          <v-form @submit.prevent="saveItem">
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="onClose">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ getFormTitle() }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    v-if="typeView !== 'view'"
                    dark
                    text
                    class="d-none d-md-block"
                    type="submit"
                  >
                    ذخیره
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      v-for="(item, index) in keyItems"
                      :key="index"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <date-text-field
                        v-if="item.date"
                        v-model="item.value"
                        :label="item.label"
                      />
                      <v-autocomplete
                        v-else-if="item.enum"
                        v-model="item.value"
                        :items="$enums.getEnumsValues(item.enum)"
                        :label="item.label"
                      />
                      <v-autocomplete
                        v-else-if="item.objectRoute"
                        v-model="item.value"
                        :items="$store.getters[item.objectRoute]"
                        :label="item.label"
                      />
                      <v-checkbox
                        v-else-if="item.boolian"
                        v-model="item.value"
                        :label="item.label"
                      />
                      <color-picker
                        v-else-if="item.colorable"
                        v-model="item.value"
                        :label="item.label"
                      />
                      <license-plate
                        v-else-if="item.licensePlate"
                        v-model="item.value"
                        :label="item.label"
                      />
                      <v-text-field
                        v-else
                        v-model="item.value"
                        :label="item.label"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="typeView !== 'view'">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onClose"
                  >انصراف</v-btn
                >
                <v-btn color="blue darken-1" text type="submit">ذخیره</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="messages.searchLabel"
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :footer-props="{
        'items-per-page-text': 'تعداد نمایش در هر صفحه:',
        'items-per-page-all-text': 'همه',
        'page-text': '{0}–{1} از {2}',
      }"
      :mobile-breakpoint="100"
      :no-data-text="messages.noDataText"
      :no-results-text="messages.noResultsText"
      :loading-text="messages.loadingText"
      :loading="loading"
    >
      <template v-slot:item.color="{ item }">
        <v-chip v-if="item.color" :color="getColor(item.color)" dark />
      </template>
      <template v-slot:item.date_weight="{ item }">
        <v-chip dark>{{ getDate(item.date_weight) }}</v-chip>
      </template>
      <template v-slot:item.date_init="{ item }">
        <v-chip dark>{{ getDate(item.date_init) }}</v-chip>
      </template>
      <template v-slot:item.object_type="{ item }">
        <v-chip dark>{{ getObjectType(item.object_type) }}</v-chip>
      </template>
      <template v-slot:item.is_output="{ item }">
        <v-chip dark>{{ getStatus(item.is_output) }}</v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon v-if="viewable" small class="mr-2" @click="onViewItem(item)">
          mdi-eye
        </v-icon>
        <v-icon small class="mr-2" @click="onEditItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mr-2" @click="onDeleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
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

          <v-btn color="red darken-1" text @click="deleteItem">
            بله
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import moment from 'moment-jalaali'

export default {
  fetchOnServer: false,
  components: {
    DateTextField: () => import('@/components/DateTextField'),
    ColorPicker: () => import('@/components/ColorPicker'),
    LicensePlate: () => import('@/components/LicensePlate'),
  },
  props: {
    headers: {
      type: Array,
      required: true,
      default: () => [],
    },
    keyItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    routes: {
      type: Object,
      required: true,
      default: () => ({
        gets: '',
        add: '',
        edit: '',
        delete: '',
      }),
    },
    messages: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        formAddTitle: '',
        formEditTitle: '',
        formViewTitle: '',
        searchLabel: '',
        noDataText: '',
        noResultsText: '',
        loadingText: '',
        addSuccessText: '',
        changeSuccessText: '',
        deleteSuccessText: '',
      }),
    },
    viewable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  fetch() {
    this.$store.dispatch(this.routes.gets)
  },
  data() {
    return {
      search: '',
      editedId: null,
      dialog: false,
      dialogDelete: false,
      typeView: 'add',
    }
  },
  computed: {
    items() {
      return this.$store.getters[this.routes.gets]
    },
    loading() {
      return this.$fetchState.pending
    },
  },
  methods: {
    onViewItem(item) {
      this.typeView = 'view'
      const items = JSON.parse(JSON.stringify(item))
      this.keyItems.forEach((element) => {
        element.value = items[element.key]
      })
      this.dialog = true
    },
    onEditItem(item) {
      this.typeView = 'edit'
      this.editedId = item._id
      const items = JSON.parse(JSON.stringify(item))
      this.keyItems.forEach((element) => {
        element.value = items[element.key]
      })
      this.dialog = true
    },
    onDeleteItem(item) {
      this.editedId = item._id
      this.dialogDelete = true
    },
    onClose() {
      this.dialogDelete = false
      this.dialog = false
      this.typeView = 'add'
      this.editedId = null

      this.keyItems.forEach((element) => {
        element.value = null
      })
    },
    saveItem() {
      const data = {}
      this.keyItems.forEach((element) => {
        data[element.key] = element.value
      })
      if (this.editedId === null) {
        this.$store.dispatch(this.routes.add, data).then((result) => {
          this.$notifier.showMessage({
            content: this.messages.addSuccessText,
            type: 'success',
          })
        })
      } else {
        data._id = this.editedId
        this.$store.dispatch(this.routes.edit, data).then((result) => {
          this.$notifier.showMessage({
            content: this.messages.changeSuccessText,
            type: 'success',
          })
        })
      }

      this.onClose()
    },
    deleteItem() {
      this.$store.dispatch(this.routes.delete, this.editedId).then((result) => {
        this.$notifier.showMessage({
          content: this.messages.deleteSuccessText,
          type: 'success',
        })
      })
      this.onClose()
    },
    getFormTitle() {
      return this.typeView === 'add'
        ? this.messages.formAddTitle
        : this.messages.typeView === 'edit'
        ? this.messages.formEditTitle
        : this.messages.formViewTitle
    },
    getColor(color) {
      return '#' + color
    },
    getDate(date) {
      return date ? moment(date).format('jYYYY/jMM/jDD') : ''
    },
    getStatus(status) {
      return status ? 'بله' : 'خیر'
    },
    getObjectType(name) {
      return this.$enums.getEnumTextByValue('OBJECT_TYPES', name)
    },
  },
}
</script>
