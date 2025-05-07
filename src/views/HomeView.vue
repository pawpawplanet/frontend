<script setup>
import SearchInBanner from '@/components/pages/home/search-in-banner.vue'
import AllServiceDescription from '@/components/pages/home/all-service-description.vue'
import HowToUse from '@/components/pages/home/how-to-use.vue'
import RecommendedBabysitter from '@/components/pages/home/recommended-babysitter.vue'
import ServiceAndSecurity from '@/components/pages/home/service-and-security.vue'
import WhyTrust from '@/components/pages/home/why-trust.vue'
</script>

<template>
  <div class="home">
    <div class="home-container">
      <SearchInBanner />
      <AllServiceDescription />
      <HowToUse />
      <RecommendedBabysitter />
      <ServiceAndSecurity />
      <WhyTrust />
    </div>
  </div>
</template>
