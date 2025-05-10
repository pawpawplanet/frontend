<template>
  <div class="container my-4 p-4">
    <div class="border border-1 rounded p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>基本資料設定</h4>
        <button v-if="!isEditMode" class="btn btn-outline-dark" @click="startEdit">
          <i class="bi bi-pencil-square"></i> 編輯
        </button>
      </div>
      <profile-form :formData="tempForm" :edit-mode="isEditMode" @updateFormData="onFormUpdate"></profile-form>

      <hr />
      <h5 class="mb-3">你可以接案的時間是:</h5>
      <weekly-toggle v-model="isRepeatWeek" :disabled="isEditMode"></weekly-toggle>
      <weekly-selector v-model="selectedWeekdays" :disabled="isEditMode"></weekly-selector>
      <schedule></schedule>
      <div class="text-end mt-3" v-if="isEditMode">
        <button type="button" class="btn btn-outline-secondary me-2" @click="cancelEdit">取消</button>
        <button type="button" class="btn btn-primary" @click="confirmSave" :disabled="!hasChanges">確認儲存</button>
      </div>

      <hr />
      <service-list :edit-mode="isEditMode" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue"
import isEqual from "lodash/isEqual"
import ProfileForm from "@/components/admin/freelancer/ProfileForm.vue"
import WeeklyToggle from '@/components/admin/freelancer/WeeklyToggle.vue'
import WeeklySelector from '@/components/admin/freelancer/WeeklySelector.vue'
import Schedule from '@/components/admin/freelancer/Schedule-component.vue'
import ServiceList from '@/components/admin/freelancer/ServiceList.vue'
import { getFreelancerProfile, updateFreelancerProfile } from '@/plugins/api/users/freelancers.js'; 

const emptyForm = {
  name: '',
  city: '',
  area: '',
  phone: '',
  description: '',
  avatar: [],
  bank_account: {
    bank: '',
    account_name: '',
    account_number: ''
  },
  working_days: []
}

//是否在編輯模式
const isEditMode = ref(true)
//是否有打開重複星期開關
const isRepeatWeek = ref(true)
//選擇可工作星期
const selectedWeekdays = ref([])

//表格數據
const originalForm = ref({ ...emptyForm })
//深拷貝表格數據，避免表格編輯時，影響原數據
const tempForm = ref({ ...emptyForm })
//編輯表格數據跟原始數據比對，有變更就為true
const hasChanges = ref(false)

onMounted(async() => {
  init()
})

async function init() {
  //取得保姆個人資料
  const { data } = await getFreelancerProfile()
  console.log('fetchedData',data?.data)
  const normalizedData = normalizeFormData(data?.data || {})
  originalForm.value = normalizedData
  tempForm.value = JSON.parse(JSON.stringify(normalizedData)) //深拷貝
  //沒有填寫完整資料就預設為編輯模式
  isEditMode.value = !normalizedData.name ? true : false
}

//整理返回資料
function normalizeFormData(data = {}) {
  return {
    ...data,
    avatar: Array.isArray(data.avatar)
      ? data.avatar.map(url => ({ url, blob: null }))
      : [],//圖片返回資料整理，避免是null以及整理成套件要的資料格式
    bank_account: data.bank_account || {
      bank: '',
      account_name: '',
      account_number: ''
    },
    working_days: Array.isArray(data.working_days)
      ? data.working_days
      : [],
  }
}

async function confirmSave() {
  try {
    //更新保姆資料接口
    const { name, avatar, city, area, phone, bank_account, description } = tempForm.value
    const params = {
      avatar: getImageUrls(avatar),
      name,
      city,
      area,
      phone,
      bank_account,
      description
    }
    await updateFreelancerProfile(params)
    isEditMode.value = false
    //更新保姆資料
    init()
  } catch (e) {
    console.error(e)
  }
}

//整理圖片入參網址
const getImageUrls = (fileList = []) => {
  return fileList
    .map(file => file?.url || '')  // 取得 .url 屬性
    .filter(url => typeof url === 'string' && url.trim() !== '') // 過濾掉空字串、null、undefined
}

function startEdit() {
  isEditMode.value = true
  tempForm.value = JSON.parse(JSON.stringify(originalForm.value))
}

function cancelEdit() {
  isEditMode.value = false
  tempForm.value = JSON.parse(JSON.stringify(originalForm.value))
}

function onFormUpdate(data) {
  tempForm.value = data
}

watch(tempForm, () => {
  hasChanges.value = !isEqual(tempForm.value, originalForm.value)
}, { deep: true})
</script>
