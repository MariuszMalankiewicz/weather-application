<template>
  <div class="d-flex flex-column flex-lg-row align-items-center vh-100 mt-5 mt-lg-0">
    <div class="row w-100">
      <img
        :src="LoginRafiki"
        alt="login image"
        class="mx-auto col-12 col-sm-7 col-lg-12 col-xl-11 col-xxl-9 me-lg-0"
      />
    </div>
    <div class="p-4 row flex-column w-100 h-50">
      <h2 class="text-center text-lg-start mb-4 fw-bold">Zaloguj się</h2>
      <div class="mb-3 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
        <label for="username" class="form-label">Nazwa Użytkownika</label>
        <input
          v-model="username"
          type="text"
          id="username"
          class="form-control"
          placeholder="Wprowadz nazwę użytkownika"
        />
      </div>
      <div class="mb-3 mb-xxl-4 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
        <label for="password" class="form-label">Hasło</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          placeholder="Wprowadz hasło"
        />
      </div>
      <div class="d-grid gap-2 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
        <button @click="login" class="btn btn-primary">Zaloguj się</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginRafiki from '../assets/Login-rafiki.png'

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      LoginRafiki,
    }
  },
  setup() {
    const username = ref('')
    const password = ref('')

    const login = () => {
      if (username.value === 'user' && password.value === 'password') {
        localStorage.setItem('user', username.value)
        window.location.href = '/weather'
      } else {
        alert('Invalid credentials')
      }
    }

    return { username, password, login }
  },
})
</script>
