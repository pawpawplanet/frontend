<script setup>
  import { ref } from 'vue';
  const hasBadge = ref(true);
  defineProps({
    orderData: Object,
    notModal: Boolean
  });
  const emit = defineEmits(['acceptOrder']);
  const serviceTypes = ref([
    {
      name: '寵物寄宿',
      icon: 'pet_boarding',
    },
    {
      name: '寵物散步',
      icon: 'pet_walking',
    },
    {
      name: '寵物美容',
      icon: 'pet_grooming',
    },
    {
      name: '到府服務',
      icon: 'home_care',
    },
    {
      name:'地標',
      icon:'map'
    }
  ])
</script>
<template>
  <div v-if="hasBadge" class="d-inline-block bg-primary rounded-top p-1"><span>X</span>{{ orderData.order.status }}</div>
  <div class="card border-0 shadow-sm mb-3" :class="{ 'rounded-0': hasBadge }">
    <div class="card-body">
      <div class="row">
        <div :class="{ 'col-lg-7': notModal }">
          <div class="d-flex align-items-center mb-2">
            <img :src="orderData.owner.avatar" class="rounded-circle avatar me-3" alt="頭像" />
            <div>
              <div class="fw-bold">{{ orderData.owner.name }}</div>
              <div class="text-primary small">
                <span class="me-1">
                  <SvgIcon :name="serviceTypes[4].icon" color="#ECB88A" :size="28" />
                </span>
                <span>{{ orderData.owner.city }} {{ orderData.owner.area }}</span>
              </div>
            </div>
          </div>
          <p class="text-muted small mb-3">{{ orderData.owner.description }}</p>
          <hr class="text-muted">
          <div class="d-flex mb-3">
            <div class="text-center me-3">
              <div><span class="badge rounded-pill bg-primary text-dark mb-2">寵物</span></div>
              <img :src="orderData.pet.avatar" class="rounded-circle avatar mb-1" alt="頭像" />
              <div>{{ orderData.pet.name }}</div>
            </div>
            <div class="row w-100">
              <div class="col-5 text-end d-flex flex-column gap-3" :class="{ 'col-xl-3': !notModal, 'col-md-2': notModal }">
                <p>體型<span>｜</span></p>
                <p>年紀<span>｜</span></p>
                <p>性別<span>｜</span></p>
                <p>個性<span>｜</span></p>
              </div>
              <div class="col-7 d-flex flex-column gap-3 ps-0" :class="{ 'col-xl-9': !notModal, 'col-md-10': notModal }">
                <p>{{ orderData.pet.size }}</p>
                <p>{{ orderData.pet.birthday }}歲</p>
                <p>{{ orderData.pet.gender }}</p>
                <p>{{ orderData.pet.personality_description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ 'col-lg-5': notModal }">
          <div class="bg-secondary-tint rounded-3 p-3 mb-3">
            <div class="row">
              <div class="col-4 text-end d-flex flex-column gap-3">
                <p>預約服務<span>｜</span></p>
                <p>時間<span>｜</span></p>
                <p>地點<span>｜</span></p>
                <p>備註<span>｜</span></p>
              </div>
              <div class="col-8 d-flex flex-column gap-3 ps-0">
                <p><span class="me-1">
                  <SvgIcon :name="serviceTypes[3].icon" color="#ECB88A" :size="28" />
                </span>{{ orderData.service.service_type_id }}</p>
                <p>{{ orderData.order.service_date }}</p>
                <p>{{ orderData.owner.city }} {{ orderData.owner.area }}</p>
                <p>{{ orderData.order.note }}</p>
              </div>
            </div>
            <hr class="text-muted">
            <div class="d-flex justify-content-between">
              <p>總共</p>
              <p>NT$ {{ orderData.service.price }}</p>
            </div>
          </div>
          <div class="d-flex">
            <button class="btn btn-outline-primary text-dark flex-fill rounded-pill p-3 me-2">忍痛拒絕</button>
            <button class="btn btn-primary flex-fill rounded-pill p-3" @click="emit('acceptOrder',111)">接受預約</button>
          </div>
        </div>
      </div>

      <div class="position-relative border rounded-4 text-center p-3 mt-4">
        <div class="position-absolute top-0 start-50 translate-middle">
          <div class="text-brown fw-bold bg-white p-2">\ 評論 /</div>
        </div>
        <div class="mb-2">
          <i
            v-for="i in 5"
            :key="i"
            class="bi mx-1"
            :class="i <= orderData.review.rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'"
          ></i>
        </div>
        <p class="mb-0 text-dark">{{ orderData.review.comment }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .text-brown {
    color: #7c4f27;
  }
  .avatar{
    width: 80px;
    height: 80px;
    object-fit: cover;
    // background-image: url('default-avatar.png');
    // background-size: cover;
  }
</style>
