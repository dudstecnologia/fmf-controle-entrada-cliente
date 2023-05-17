<template>
  <q-form @submit="login" class="q-gutter-md">
    <br>
    <q-input
      outlined
      type="email"
      v-model="auth.email"
      label="E-mail"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O e-mail é obrigatório']"
    />

    <q-input
      outlined
      type="password"
      v-model="auth.password"
      label="Senha"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'A senha é obrigatória']"
    />

    <div>
      <q-btn class="full-width" label="Entrar" type="submit" color="primary"/>
      <br>
      <br>
      <q-btn flat class="full-width" color="primary" label="Clique aqui para registrar" @click="$emit('setScreen', 'register')" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'LoginScreen',
  data() {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    this.checkCredentials()
  },
  methods: {
    checkCredentials() {
      let token = this.$q.localStorage.getItem('token')

      if (token) {
        this.$q.loading.show()
        this.$api.get('/user-data')
          .then(() => {
            this.$emit('setScreen', 'home')
          })
          .catch((err) => {
            console.log(err)
            this.$q.localStorage.set('token', '')
          })
          .finally(() => {
            this.$q.loading.hide()
          })
      }
    },
    login() {
      this.$api.post('/auth', this.auth)
        .then(({ data }) => {
          this.$q.localStorage.set('token', data.token)

          this.$emit('setScreen', 'home')
        })
        .catch((err) => {
          console.log(err)

          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erro ao logar, verifique suas credenciais'
          })
        })
    }
  }
}
</script>
