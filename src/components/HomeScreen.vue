<template>
  <q-form @submit="registerEntry" class="q-gutter-md">
    <q-input
      outlined
      type="text"
      v-model="plate"
      label="Placa do Entregador"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'A placa é obrigatório']"
    />

    <div>
      <q-btn class="full-width" label="Registrar Entrada" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'HomeScreen',
  data() {
    return {
        plate: ''
    }
  },
  methods: {
    registerEntry() {
        console.log('Passou aqui')
    }
  }
}
</script>
