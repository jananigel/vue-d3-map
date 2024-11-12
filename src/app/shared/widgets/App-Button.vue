<script setup>
  import { onMounted, ref } from 'vue';
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
</script>

<template>
  Count {{ count }}<span> </span>
  <button @click="increment">{{ props.title }}</button>
</template>