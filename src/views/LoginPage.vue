<template>
  <div class="login-container">
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      if (username.value === 'user' && password.value === 'password') {
        localStorage.setItem('user', username.value);
        window.location.href = '/weather';
      } else {
        alert('Invalid credentials');
      }
    };

    return { username, password, login };
  },
});
</script>
