<template>
  <form @submit.prevent="onSubmitClick()">
    <input v-model="loginForm.account" type="text">
    <input v-model="loginForm.password" type="password">
    <AppButton :title="'testt'" :class="'primary'"/>
  </form>
</template>
<script setup>
import { reactive } from 'vue';
import { AppButton } from '../shared/widgets';

  const loginForm = reactive({
    account: '',
    password: '',
  })


  const onSubmitClick = () => {
    console.log('submit = ', loginForm);
  }
</script>