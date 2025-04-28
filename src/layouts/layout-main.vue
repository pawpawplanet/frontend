<script setup>
import Header from '@/components/header/header-component.vue'
</script>
<template>
  <div class="w-100 min-vh-100">
    <Header />
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>
