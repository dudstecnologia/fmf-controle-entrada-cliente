<template>
  <q-form @submit="register" class="q-gutter-md">
    <q-input
      outlined
      type="text"
      v-model="user.name"
      label="Nome"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O nome é obrigatório']"
    />

    <q-input
      outlined
      type="email"
      v-model="user.email"
      label="E-mail"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O e-mail é obrigatório']"
    />

    <q-input
      outlined
      type="password"
      v-model="user.password"
      label="Senha"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'A senha é obrigatória']"
    />

    <q-input
      outlined
      type="text"
      v-model="user.tower"
      label="Torre"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'A torre é obrigatória']"
    />

    <q-input
      outlined
      type="text"
      v-model="user.apartment"
      label="Apartamento"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O apartamento é obrigatório']"
    />

    <div>
      <q-btn class="full-width" label="Registrar" type="submit" color="primary"/>
      <br>
      <br>
      <q-btn class="full-width" color="secondary" label="Voltar" @click="$emit('setScreen', 'login')" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'RegisterScreen',
  data() {
    return {
      user: {
        type: 1
      }
    }
  },
  methods: {
    register() {
      this.$api.post('/register', this.user)
        .then(({ data }) => {
          console.log(data)

          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'Registrado com sucesso'
          })

          this.$emit('setScreen', 'login')
        })
        .catch((err) => {
          console.log(err)

          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erro ao registrar'
          })
        })
    }
  }
}
</script>
