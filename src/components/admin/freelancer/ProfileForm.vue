<template>
  <div class="row">
    <div class="col-md-4 text-center" v-show="modelValue?.avatar?.length || editMode">
      <div class="image-uploader">
        <div class="img-box" v-for="(file, index) in modelValue.avatar" :key="index">
          <div v-if="file.uploading" class="loading-overlay">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <img :src="file.blob || file.url" />
          <div v-show="editMode && !file.uploading" class="close" @click="remove(file)">
            <div class="icon-close">×</div>
          </div>
        </div>
        <FileUpload
          v-show="editMode && modelValue.avatar?.length < 1"
          ref="upload"
          v-model="modelValue.avatar"
          :multiple="false"
          :maximum="1"
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
      <small class="text-muted" v-show="editMode && modelValue.avatar?.length < 1"
        >(上傳圖片)</small
      >
    </div>
    <div :class="{ 'col-md-8': modelValue?.avatar?.length || editMode }">
      <div class="mb-2">
        <label class="form-label required" for="input-name">姓名:</label>
        <input
          id="input-name"
          v-model="modelValue.name"
          class="form-control"
          :disabled="!editMode"
        />
        <small v-if="errors?.name && editMode" class="text-danger">{{ errors.name }}</small>
      </div>
      <div class="mb-2">
        <label class="form-label required" for="input-city">所在地區:</label>
        <div class="row">
          <div class="col-md-6 mb-2">
            <select
              id="input-city"
              v-model="modelValue.city"
              class="form-select"
              :disabled="!editMode"
            >
              <option disabled value="">選擇縣市</option>
              <option v-for="city in cityData" :key="city.name" :value="city.name">
                {{ city.name }}
              </option>
            </select>
            <small v-if="errors?.city && editMode" class="text-danger">{{ errors.city }}</small>
          </div>
          <div class="col-md-6">
            <select
              id="input-area"
              v-model="modelValue.area"
              class="form-select"
              :disabled="!editMode || !modelValue.city"
            >
              <option disabled value="">選擇區域</option>
              <option v-for="area in availableAreas" :key="area.zip" :value="area.name">
                {{ area.name }}
              </option>
            </select>
            <small v-if="errors?.area && editMode" class="text-danger">{{ errors.area }}</small>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <label for="input-phone" class="form-label required">電話:</label>
        <input
          id="input-phone"
          v-model="modelValue.phone"
          class="form-control"
          :disabled="!editMode"
        />
        <small v-if="errors?.phone && editMode" class="text-danger">{{ errors.phone }}</small>
      </div>
      <div class="mb-2">
        <label class="form-label">Email:</label>
        <input v-model="modelValue.email" class="form-control" disabled />
      </div>
      <div class="mb-2">
        <label for="input-bank" class="form-label required">銀行帳戶:</label>
        <input
          id="input-bank"
          v-model="modelValue.bank_account.bank"
          class="form-control"
          placeholder="銀行名稱"
          :disabled="!editMode"
        />
        <small v-if="errors?.bank && editMode" class="text-danger">{{ errors.bank }}</small>
      </div>
      <div class="mb-2">
        <label for="input-account_name" class="form-label required">戶名:</label>
        <input
          id="input-account_name"
          v-model="modelValue.bank_account.account_name"
          class="form-control"
          :disabled="!editMode"
        />
        <small v-if="errors?.account_name && editMode" class="text-danger">{{
          errors.account_name
        }}</small>
      </div>
      <div class="mb-2">
        <label for="input-account_number" class="form-label required">帳號:</label>
        <input
          id="input-account_number"
          v-model="modelValue.bank_account.account_number"
          class="form-control"
          :disabled="!editMode"
        />
        <small v-if="errors?.account_number && editMode" class="text-danger">{{
          errors.account_number
        }}</small>
      </div>
      <div>
        <label for="input-description" class="form-label required">自我介紹:</label>
        <textarea
          id="input-description"
          v-model="modelValue.description"
          class="form-control"
          rows="3"
          :disabled="!editMode"
        ></textarea>
        <small v-if="errors?.description && editMode" class="text-danger">{{
          errors.description
        }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FileUpload from 'vue-upload-component'
import { uploadImage } from '@/plugins/api/upload/upload.js'
import cityData from '@/assets/tw-city-data.json'

defineProps({
  editMode: {
    type: Boolean,
    default: true,
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
})

const modelValue = defineModel()

const availableAreas = computed(() => {
  const city = cityData.find((c) => c.name === modelValue.value?.city)
  return city ? city.districts : []
})

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
  //圖片上傳中
  newFile.uploading = true
}

const handleInput = async (newFile) => {
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
    const imageUrl = res?.image_url
    // 把圖片上傳後的 URL 設進 file 中，這樣就會存在 form.avatar 裡
    newFile.url = imageUrl
    newFile.uploading = false // 圖片上傳完成
  } catch (err) {
    console.error('圖片上傳失敗:', err)
    alert('圖片上傳失敗，請重試')
    remove(newFile) //移除這筆失敗的檔案
  }
}

const remove = (file) => {
  const index = modelValue.value.avatar.findIndex((f) => f.url === file.url)
  if (index !== -1) {
    modelValue.value.avatar.splice(index, 1)
  }
}
</script>
<style scoped lang="scss">
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.form-label.required::before {
  content: '*';
  color: red;
  margin-right: 4px;
}

.image-uploader {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.img-box {
  width: 100px;
  height: 100px;
  margin: 10px 0;
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
    top: -8px;
    left: 5px;
    font-size: 20px;
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
