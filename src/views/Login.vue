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
      <h2 class="text-center text-lg-start mb-4 fw-bold">Welcome!</h2>
      <h5 class="text-center text-lg-start mb-4">Please log in to continue.</h5>

      <form @submit.prevent="login">
        <div class="mb-3 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
          <label for="username" class="form-label">User Name</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="form-control"
            placeholder="Enter your username"
            required
          />
          <div v-if="formSubmitted && !username" class="text-danger">Username is required.</div>
        </div>

        <div class="mb-3 mb-xxl-4 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
          <div v-if="formSubmitted && !password" class="text-danger">Password is required.</div>
        </div>

        <div class="d-grid gap-2 col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-7 mx-auto mx-lg-0">
          <button type="submit" class="btn btn-primary">Log In</button>
        </div>

        <div v-if="formSubmitted && !validCredentials" class="text-danger mt-3">
          Invalid username or password.
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginRafiki from '../assets/Login-rafiki.png'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const formSubmitted = ref(false)
    const validCredentials = ref(true)

    const login = () => {
      formSubmitted.value = true

      if (username.value === '' || password.value === '') {
        validCredentials.value = true
        return
      }

      if (username.value === 'user' && password.value === 'password') {
        localStorage.setItem('user', username.value)
        router.push('/weather')
      } else {
        validCredentials.value = false
      }
    }

    return { username, password, formSubmitted, login, LoginRafiki, validCredentials }
  },
})
</script>
