const UNIT_TYPES = [
  { value: 0, text: ' - انتخاب کنید - ' },
  { value: 1, text: 'کیلوگرم' },
  { value: 2, text: 'تن' },
  { value: 3, text: 'لیتر' },
  { value: 4, text: 'عدد' },
  { value: 5, text: 'کیسه' },
]

const DELIVERY_STATUS = [
  { value: 0, text: 'وضعیت اولیه' },
  { value: 1, text: 'حمل شده' },
  { value: 2, text: 'تحویل داده شد' },
  { value: 3, text: 'برگشتی' },
]

const EnumsValues = {
  UNIT_TYPES,
  DELIVERY_STATUS,
}

export default ({ app }, inject) => {
  inject('enums', {
    getEnumsValues(value = null) {
      return value === null ? EnumsValues : EnumsValues[value]
    },
    getEnumText(item, index) {
      if (typeof index === 'undefined' || index === null || !(index >= 0)) {
        return ''
      }
      return EnumsValues[item][index].text
    },
    getEnumColor(item, index) {
      if (typeof index === 'undefined' || index === null || !(index >= 0)) {
        return ''
      }
      return EnumsValues[item][index].color
    },
    getEnumTextByValue(item, value) {
      if (typeof value === 'undefined' || value === null || !(value >= 0)) {
        return ''
      }
      const obj = EnumsValues[item].find((item) => {
        return item.value === value
      })
      return obj.text
    },
  })
}
