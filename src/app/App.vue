<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <HomePage :msg="'test22'"></HomePage>
  <LoginPage :title="'Input Login Page Title'"></LoginPage>
</template>

<script setup>
import { HomePage, LoginPage } from './pages';


// export default {
//   name: 'App',
//   components: {
//     HomePage,
//     LoginPage,
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
