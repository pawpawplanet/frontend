<script setup>
import Header from '@/components/header/header-component.vue'
import Footer from '@/components/footer/footer-component.vue'

</script>
<template>
  <main class="w-100 layout-main">
    <Header />
    <div class="w-100 layout-main-content">
      <div class="container">
        <RouterView v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.matched[1].path" v-if="route.meta.keep_alive" />
          </keep-alive>
          <component :is="Component" :key="route.matched[1].path" v-if="!route.meta.keep_alive" />
        </RouterView>
      </div>
      <Footer />
    </div>
  </main>
</template>
