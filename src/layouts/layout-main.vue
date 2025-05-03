<script setup>
import Header from '@/components/header/header-component.vue'
import Footer from '@/components/footer/footer-component.vue'
</script>
<template>
  <main class="w-100 layout-main">
    <Header />
    <div class="w-100 layout-main-content">
      <div class="container">
        <RouterView />
      </div>
      <Footer />
    </div>
  </main>
</template>
