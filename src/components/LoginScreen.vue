<template>
  <q-form @submit="login" class="q-gutter-md">
    <br>
    <q-input
      outlined
      type="email"
      v-model="email"
      label="E-mail"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O e-mail é obrigatório']"
    />

    <q-input
      outlined
      type="password"
      v-model="senha"
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
      email: '',
      senha: ''
    }
  },
  methods: {
    login() {
      console.log('Passou aqui')
    }
  }
}
</script>
