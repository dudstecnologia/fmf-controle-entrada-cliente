<template>
  <q-page padding>
    <login-screen />
  </q-page>
</template>

<script>
import LoginScreen from 'src/components/LoginScreen.vue'

export default {
  name: 'PageIndex',
  components: {
    LoginScreen
  }
}
</script>
