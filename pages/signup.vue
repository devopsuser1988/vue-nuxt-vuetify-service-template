<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>لطفا فرم را پر کنید</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-form
                  ref="form"
                  v-model="isFormValid"
                  @submit.prevent="onSubmit"
                >
                  <v-card-text>
                    <v-text-field
                      v-model="user_name"
                      label="نام کاربری"
                      name="login"
                      prepend-icon="mdi-account-box"
                      type="text"
                      :rules="rules.userName"
                      @focus="message = null"
                    />

                    <v-text-field
                      v-model="password"
                      label="رمز"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      :rules="rules.password"
                      @focus="message = null"
                    />

                    <v-text-field
                      v-model="confirmPassword"
                      label="تکرار رمز"
                      name="confirmPassword"
                      prepend-icon="mdi-lock"
                      type="password"
                      :rules="rules.confirmPassword"
                      @focus="message = null"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-container>
                      <v-row v-if="message" no-gutters>
                        <v-col cols="12">
                          <v-alert dense outlined type="error">
                            {{ message }}
                          </v-alert>
                        </v-col>
                      </v-row>
                      <v-row no-gutters justify="end">
                        <v-col cols="12 text-right">
                          <v-btn color="primary" type="submit">
                            عضویت
                          </v-btn>
                          <v-btn text nuxt to="login">
                            من عضو هستم
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                  <v-progress-linear
                    :active="loading"
                    :height="4"
                    :indeterminate="true"
                    color="light-blue"
                  />
                </v-form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'accounts',
  data() {
    return {
      isFormValid: false,
      user_name: '',
      password: '',
      name: '',
      email: '',
      confirmPassword: '',
      loading: false,
      message: null,
      rules: {
        userName: [
          (value) => !!value || 'نام کاربری نیاز است.',
          (value) => /^[a-zA-Z0-9]*$/.test(value) || 'اعداد و حروف انگلیسی',
          (value) =>
            /^[a-zA-Z0-9]*[A-Z]+[a-zA-Z0-9]*$/.test(value) ||
            'حداقل یک کاراکتر بزرگ',
          (value) =>
            /^(?=.*\d)(.{8,15})$/.test(value) || 'حداقل ۸ و حداکثر ۲۰ کاراکتر',
        ],
        password: [
          (value) => !!value || 'لطفا را رمز خود را تعیین کنید.',
          (value) => (value && value.length >= 6) || 'حداقل ۶ کاراکتر',
        ],
        confirmPassword: [
          (value) => !!value || 'تکرار رمز وارد کنید.',
          (value) =>
            value === this.password || 'تکرار رمز با رمز تعیین شده برابر نیست.',
        ],
      },
    }
  },
  watch: {
    confirmPassword() {},
  },
  methods: {
    ...mapActions({
      registerUser: 'auth/registerUser',
      getUserInfo: 'auth/getUserInfo',
    }),
    validate() {
      return this.$refs.form.validate()
    },
    onSubmit() {
      this.message = null

      if (this.validate()) {
        this.loading = true

        this.registerUser({
          user_name: this.user_name,
          password: this.password,
          name: this.name,
          email: this.email,
        })
          .then(() => {
            this.getUserInfo()
            this.$router.push('/')
          })
          .catch((status) => {
            if (status === 0) {
              this.message = 'خطای اتصال! لطفا اتصال اینترنت را چک کنید.'
            } else {
              this.message = 'نام کاربری قبلا ثبت شده است.'
            }
            this.loading = false
          })
      } else {
        this.message = 'لطفا موارد قرمز رنگ را تکمیل کنید.'
      }
    },
  },
}
</script>
