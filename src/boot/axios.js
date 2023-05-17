import Vue from 'vue'
import axios from 'axios'
import { LocalStorage } from 'quasar'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

api.interceptors.request.use((config) => {
    console.log('Passou aqui')
    let token = LocalStorage.getItem('token')

    if (token) {
        config.headers.token = token;
    }

    return config;
})

Vue.prototype.$api = api
