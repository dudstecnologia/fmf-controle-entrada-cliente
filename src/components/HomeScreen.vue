<template>
  <q-form @submit="registerEntry" class="q-gutter-md">
    <q-input
      outlined
      ref="inputPlate"
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
      this.$q.loading.show()
      this.$api.post('/register-entry', { plate: this.plate })
        .then(({ data }) => {
          console.log(data)

          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'Entrada registrada com sucesso'
          })

          this.plate = ''
          this.$refs.inputPlate.resetValidation()
        })
        .catch((err) => {
          console.log(err)

          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erro ao registrar a entrada'
          })
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
