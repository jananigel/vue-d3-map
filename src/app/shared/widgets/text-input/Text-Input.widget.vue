<script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const onInput = (event) => {
    emit('update:modelValue', event.target.value);
  }
</script>

<template>
  <input
    :type="props.type"
    :value="props.modelValue"
    @input="onInput"
    :placeholder="props.placeholder"
  />
</template>
<style scoped lang="scss">
  @import './text-input.widget.scss';
</style>