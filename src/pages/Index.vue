<template>
  <q-page padding>
    <login-screen v-if="screen == 'login'" @setScreen="setScreen" />
    <register-screen v-if="screen == 'register'" @setScreen="setScreen" />
    <home-screen v-if="screen == 'home'" />
  </q-page>
</template>

<script>
import LoginScreen from 'src/components/LoginScreen.vue'
import RegisterScreen from 'src/components/RegisterScreen.vue'
import HomeScreen from 'src/components/HomeScreen.vue'

export default {
  name: 'PageIndex',
  components: {
    LoginScreen,
    RegisterScreen,
    HomeScreen
  },
  data() {
    return {
      screen: 'login'
    }
  },
  methods: {
    setScreen(screen) {
      this.screen = screen
    }
  }
}
</script>
