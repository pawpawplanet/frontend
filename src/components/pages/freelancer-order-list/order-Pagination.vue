<script setup>
  import { ref, computed } from 'vue';
  const activeClass = ref('page-link bg-primary rounded-5 border-0');
  const NotActiveClass = ref('page-link bg-transparent border-0');
  const emit = defineEmits(['getOrderApi']);
  const pageData = ref({
    "limit": 5,
    "page": 1,
    "total": 20
  });
  const showPages = computed(() => {
    if(pageData.value.total <= 0 || !pageData.value.total) return null;
    if(pageData.value.total === 1) return [1];
    if(pageData.value.total === 2) return [1, 2];
    if(pageData.value.page === 1) return [1, 2, 3];
    if(pageData.value.page === pageData.value.total) return [pageData.value.total - 2, pageData.value.total - 1, pageData.value.total];
    return [pageData.value.page - 1, pageData.value.page, pageData.value.page + 1];
  });
  function clickPage(page) {
    if(page !== pageData.value.page && page > 0 && page <= pageData.value.total) emit('getOrderApi', page);
  };
</script>
<template>
  <div class="flex-center" v-if="showPages">
    <nav aria-label="Page navigation">
      <ul class="pagination gap-2">
        <li class="page-item" :class="{ 'disabled': pageData.page == 1 }" @click="clickPage(pageData.page - 1)">
          <a :class="NotActiveClass" aria-label="Previous">
            <SvgIcon name="chevron_left" size="24"/>
          </a>
        </li>
        <template v-for="page in showPages" :key="page">
          <li class="page-item"
            :class="{ 'active': pageData.page == page }"
            :aria-current="[pageData.page == page ? 'page' : '']"
            @click="clickPage(page)"
          >
            <a :class="[pageData.page == page ? activeClass : NotActiveClass]">{{ page }}</a>
          </li>
        </template>
        <li class="page-item" :class="{ 'disabled': pageData.page == pageData.total }" @click="clickPage(pageData.page + 1)">
          <a :class="NotActiveClass" aria-label="Next">
            <SvgIcon name="chevron_right" size="24"/>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped lang="scss">
  .page-link{
    padding: 2px 10px;
  }
  .page-item{
    &:not(.disabled) {
      cursor: pointer;
    }
  }
</style>
