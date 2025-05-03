<script setup>
import Header from '@/components/header/header-component.vue'
import Foorer from '@/components/footer/footer-component.vue'
</script>
<template>
  <div class="w-100 min-vh-100">
    <Header />
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
    <Foorer />
  </div>
</template>
