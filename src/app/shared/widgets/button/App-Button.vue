<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
  });
  const emits = defineEmits('buttonClick');
  const count = ref(10);
  const increment = () => {
    count.value ++;
    emits('buttonClick');
  }
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })

  const total = computed(() => count.value * 2);
</script>

<template>
  Count {{ count }}<span> </span>
  <button @click="increment" v-bind="$attrs">{{ props.title }}</button>
{{ total }}
</template>
<style scoped lang="scss">
  @import './app-button.scss';
</style>