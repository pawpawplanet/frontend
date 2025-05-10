<template>
  <div class="py-4">
    <h4 class="mb-3">
      <i :class="service.icon" class="me-2"></i>
    {{ service.label }}
    </h4>
    <div class="form-check form-switch float-end mb-3">
      <input class="form-check-input" type="checkbox" v-model="form.active" />
      <label class="form-check-label">啟用服務</label>
    </div>

    <div class="mb-3">
      <label class="form-label">服務標題:</label>
      <input v-model="form.title" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">服務介紹:</label>
      <textarea v-model="form.desc" rows="4" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">服務圖片:</label>
      <div class="image-uploader">
        <div
          class="img-box"
          v-for="(file, index) in form.images"
          :key="index"
        >
          <img :src="file.blob || file.url" />
          <div class="close" @click="remove(file)">
            <div class="icon-close">×</div>
          </div>
        </div>
        <FileUpload
          v-show="form.images.length < 3"
          ref="upload"
          v-model="form.images"
          :multiple="true"
          :maximum="3"
          accept="image/png,image/jpeg,image/jpg"
          extensions="jpg,png,jpeg"
          @input-file="handleInput"
          @input-filter="filter"
        >
          <div class="img-box upload">
            <span class="upload-icon">+</span>
          </div>
        </FileUpload>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label d-block">寵物種類:</label>
      <div class="form-check form-check-inline">
        <input type="checkbox" class="form-check-input" value="狗" v-model="form.petTypes" />
        <label class="form-check-label">狗</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="checkbox" class="form-check-input" value="貓" v-model="form.petTypes" />
        <label class="form-check-label">貓</label>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label d-block">體型:</label>
      <div class="form-check form-check-inline" v-for="size in bodySizes" :key="size">
        <input type="checkbox" class="form-check-input" :value="size" v-model="form.bodyTypes" />
        <label class="form-check-label">{{ size }}</label>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">年齡範圍:</label>
      <div class="d-flex gap-2">
        <input v-model="form.ageMin" type="number" class="form-control" placeholder="最小" />
        <input v-model="form.ageMax" type="number" class="form-control" placeholder="最大" />
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">性別:</label>
      <div>
        <div class="form-check form-check-inline">
          <input type="checkbox" value="女生" v-model="form.genders" class="form-check-input" />
          <label class="form-check-label">女生</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" value="男生" v-model="form.genders" class="form-check-input" />
          <label class="form-check-label">男生</label>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">價格: (1天/8小時)費用</label>
      <input v-model="form.price" type="number" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">每天尿尿及便便次數:</label>
      <input v-model="form.maxAppointmentsPerDay" type="number" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">每天散步次數:</label>
      <input v-model="form.maxTimesPerDay" type="number" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">我家類型:</label>
      <input v-model="form.envDesc" class="form-control" />
    </div>

    <div class="mb-4">
      <label class="form-label">我家戶外區域面積坪數:</label>
      <input v-model="form.outdoorEnv" class="form-control" />
    </div>

    <div class="text-end">
      <button class="btn btn-outline-secondary me-2 btn-lg" @click="goBack">取消</button>
      <button class="btn btn-primary btn-lg" @click="submit">確認</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import FileUpload from 'vue-upload-component'
import { uploadImage } from '@/plugins/api/users/upload.js'; 

const route = useRoute()
const router = useRouter()
const type = route.params.type
const form = ref({
  active: true,
  title: '',
  desc: '',
  images: [],
  petTypes: [],
  bodyTypes: [],
  ageMin: '',
  ageMax: '',
  genders: [],
  price: '',
  maxAppointmentsPerDay: '',
  maxTimesPerDay: '',
  envDesc: '',
  outdoorEnv: ''
})

const bodySizes = ['小於10公斤以下', '10公斤以上~20公斤以下', '大於20公斤以上']

const serviceMap = {
  0: { label: '日托', icon: 'bi bi-sun' },
  1: { label: '美容', icon: 'bi bi-scissors' },
  2: { label: '散步', icon: 'bi bi-person-walking' },
  3: { label: '到府照顧', icon: 'bi bi-house-door' }
}

const service = computed(() => serviceMap[type] || { label: '', icon: '' })

function goBack() {
  router.back()
}

function submit() {
  const payload = {
    ...form.value,
    images: getImageUrls(form.value.images)
  }
  console.log('儲存資料', payload)
  console.log('儲存資料', form.value.images)

  // TODO: 打 API 上傳資料
}

//  圖片上傳
const upload = ref(null)

const filter = (newFile, oldFile, prevent) => {
  if (!newFile || !newFile.file) return

  if (!/\.(jpeg|jpg|png)$/i.test(newFile.name)) {
    alert('格式錯誤')
    remove(newFile)
    prevent()
    return
  }

  if (newFile.size / 1024 / 1024 > 5) {
    alert('图片大小不能超过5MB')
    remove(newFile)
    prevent()
    return
  }
 // 創建 blob 字段 用於圖片預覽
  const URL = window.URL || window.webkitURL
  newFile.blob = URL.createObjectURL(newFile.file)
}

const handleInput =  async (newFile) => {
  if (!newFile || !newFile.file) return

  if (newFile.size / 1024 / 1024 > 5) {
    alert('檔案不能超過 5MB')
    remove(newFile)
    return
  }

  const formData = new FormData()
  formData.append('file', newFile.file)

  try {
    const res = await uploadImage(formData)
    const imageUrl = res.data?.data?.image_url
    // 把圖片上傳後的 URL 設進 file 中，這樣就會存在 form.images 裡
    newFile.url = imageUrl
  } catch (err) {
    console.error('圖片上傳失敗:', err)
    alert('圖片上傳失敗，請重試')
    remove(newFile)//移除這筆失敗的檔案
  }
}

const remove = (file) => {
  try {
    upload.value?.remove(file)
  } catch (e) {
    console.error('移除圖片錯誤:', e)
  }
}

const getImageUrls = (fileList = []) => {
  return fileList
    .map(file => file?.url || '')  // 取得 .url 屬性
    .filter(url => typeof url === 'string' && url.trim() !== '') // 過濾掉空字串、null、undefined
}
</script>
<style scoped lang="scss">
.image-uploader {
  display: flex;
  flex-wrap: wrap;
}
.img-box {
  width: 100px;
  height: 100px;
  margin: 0 10px 10px 0;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.close {
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  .icon-close {
    position: absolute;
    color: #ffffff;
    z-index: 1;
    top: -2px;
    left: 2px;
  }
}
.upload {
  border: 1px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-icon {
  font-size: 20px;
  width: 24px;
  height: 24px;
  line-height: 15px;
}
</style>