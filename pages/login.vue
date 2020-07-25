<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>لطفا وارد شوید</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-form ref="form" @submit.prevent="onSubmit">
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
                            ورود
                          </v-btn>
                          <v-btn text nuxt to="signup">
                            من عضو نیستم
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
      user_name: '',
      password: '',
      loading: false,
      message: null,
      rules: {
        userName: [(value) => !!value || 'نام کاربری را وارد کنید.'],
        password: [(value) => !!value || 'رمز ورود را وارد کنید.'],
      },
    }
  },
  methods: {
    ...mapActions({
      athenticateUser: 'auth/athenticateUser',
      getUserInfo: 'auth/getUserInfo',
    }),
    validate() {
      return this.$refs.form.validate()
    },
    onSubmit() {
      this.message = null

      if (this.validate()) {
        this.loading = true

        this.athenticateUser({
          user_name: this.user_name,
          password: this.password,
        })
          .then(() => {
            this.getUserInfo()
            this.$router.push('/')
          })
          .catch((status) => {
            if (status === 0) {
              this.message = 'خطای اتصال! لطفا اتصال اینترنت را چک کنید.'
            } else {
              this.message = 'نام کاربری یا رمز ورود معتبر نیستند.'
            }
            this.loading = false
          })
      } else {
        this.message = 'نام کاربری و رمز عبور وارد شود.'
      }
    },
  },
}
</script>
