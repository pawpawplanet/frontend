<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="position-fixed top-0 w-100 bg-secondary-tint py-1-25">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <RouterLink to="/">
          <img src="@/assets/images/logo/logo.png" alt="">
        </RouterLink>
        <div class="d-flex align-items-center">
          <div class="px-2">
            <div class="dropdown">
              <button
                type="button"
                class="btn text-decoration-none text-primary-dark-second header-link fw-bold"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="open = !open"
              >
                服務內容
                <SvgIcon
                  name="chevron_down"
                  color="#452B14"
                  :size="28"
                  style="transition: ease-in 0.2s"
                  :style="{
                    'transform': open ? 'rotate(-180deg)' : 'rotate(0deg)',
                  }"
                />
              </button>
              <ul class="dropdown-menu bg-secondary-tint border-primary-dark" :class="{ 'show': open }" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="d-inline-block pb-2">寵物寄宿</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="d-inline-block pb-2">寵物散步</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="d-inline-block pb-2">寵物美容</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="d-inline-block pb-2">到府照顧</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-2">
            <RouterLink
              to=""
              class="btn text-decoration-none text-primary-dark-second header-link fw-bold"
            >
              成為接案者
            </RouterLink>
          </div>
          <div class="px-2 d-flex align-items-center">
            <div class="px-2">
              <SvgIcon name="paw" color="#FFCF75" :size="28" />
            </div>
            <div class="px-2">
              <ButtonComponent class="btn-primary" text="登入" />
            </div>
            <div class="px-2">
              <ButtonComponent class="btn-outline-dark-second" text="註冊" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
