<script setup>
  import { onMounted } from 'vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
  });

  onMounted(() => {
    // do nothing
  })

</script>

<template>
  <button v-bind="$attrs">{{ props.title }}</button>
</template>
<style scoped lang="scss">
  @import './app-button.scss';
</style>