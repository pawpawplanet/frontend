<script setup>
import { useTemplateRef, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/stores/login.js'

const router = useRouter()
const { is_login } = useLoginStore()
const open = ref(false)
const menu = useTemplateRef('header-menu')


const clickOtherElement = (e) => {
  if (!menu.value.contains(e.target)) {
    open.value = false
  }
}

const clickLoginBtn = () => {
  if (is_login) {
    console.log('click')
  } else {
    router.push('/login')
  }
}

const clickRegisterBtn = () => {
  router.push('/signup')
}

onMounted(() => {
  window.addEventListener('click', clickOtherElement)
})
</script>
<template>
  <div class="header position-fixed top-0 w-100 bg-secondary-tint py-1-25">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <RouterLink to="/">
          <img src="@/assets/images/logo/logo.png" alt="">
        </RouterLink>
        <div class="d-flex align-items-center">
          <div class="px-2">
            <div class="dropdown">
              <button
                ref="header-menu"
                type="button"
                class="btn btn-link text-decoration-none text-primary-dark-second header-link fw-bold"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="open = !open"
              >
                <p>
                  服務內容
                </p>
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
                  <RouterLink to="" class="dropdown-item">
                    <span class="d-inline-block">寵物寄宿</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="" class="dropdown-item">
                    <span class="d-inline-block">寵物散步</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="" class="dropdown-item">
                    <span class="d-inline-block">寵物美容</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="" class="dropdown-item">
                    <span class="d-inline-block">到府照顧</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-2">
            <RouterLink
              to="/become-a-sitter"
              class="btn text-decoration-none text-primary-dark-second header-link fw-bold"
            >
              成為接案者
            </RouterLink>
          </div>
          <div class="px-2 d-flex align-items-center">
            <div class="px-2">
              <SvgIcon name="paw" color="#FFCF75" :size="28" />
            </div>
            <div v-if="is_login" class="px-2">
              <div class="d-flex align-items-center">
                <div class="header-avatar">
                  <img src="@/assets/images/header/header_avatar.jpg" alt="">
                </div>
                <div class="px-2">
                  <h4 class="header-name">Teresa</h4>
                </div>
              </div>
            </div>
            <div class="px-2">
              <ButtonComponent class="btn-primary" :text="is_login ? '登出' : '登入'" @on-press="clickLoginBtn" />
            </div>
            <div v-if="!is_login" class="px-2">
              <ButtonComponent class="btn-outline-dark-second" text="註冊" @on-press="clickRegisterBtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
