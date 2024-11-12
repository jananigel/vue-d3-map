<template>
  Login page {{ title }}
  <AppButton :title="'testt'" :class="'primary'"/>
</template>
<script>
import { AppButton } from '../shared/widgets';


  export default {
    name: 'LoginPage',
    components: { AppButton },
    props: {
      title: String,
    }
  }
</script>