<template>
  <form @submit.prevent="onSubmitClick()">
    <TextInput v-model="loginForm.account" :placeholder="'Enter your account'" />
    <TextInput v-model="loginForm.password" :placeholder="'Enter your password'" />
    <AppButton :title="'testt'" :class="'primary'"/>
  </form>
</template>
<script setup>
import { reactive } from 'vue';
import { AppButton, TextInput } from '../shared/widgets';

  const loginForm = reactive({
    account: '',
    password: '',
  })


  const onSubmitClick = () => {
    console.log('submit = ', loginForm);
  }
</script>