<template>
  <q-form @submit="register" class="q-gutter-md">
    <q-input
      outlined
      type="text"
      v-model="email"
      label="Nome"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O nome é obrigatório']"
    />

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

    <q-input
      outlined
      type="text"
      v-model="email"
      label="Torre"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'A torre é obrigatória']"
    />

    <q-input
      outlined
      type="text"
      v-model="email"
      label="Apartamento"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'O apartamento é obrigatório']"
    />

    <div>
      <q-btn class="full-width" label="Registar" type="submit" color="primary"/>
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
      email: '',
      senha: ''
    }
  },
  methods: {
    register() {
      console.log('Passou aqui')
    }
  }
}
</script>
