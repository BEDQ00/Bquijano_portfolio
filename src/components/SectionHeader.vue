<script setup>
defineProps({
  num: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <header class="section-header">
    <span class="section-num">{{ num }}</span>
    <div>
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>
