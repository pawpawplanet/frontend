<script setup>
import { onMounted, ref } from 'vue'
import Modal from 'bootstrap/js/dist/modal'

defineProps({
  title: String
})
defineEmits(['submitOwner'])

let modal_ref = ref(null);
let modal;

onMounted(() => {
  modal = new Modal(modal_ref.value)
})

function c_show() {
  modal.show()
}

defineExpose({ p_show: c_show })
</script>

<template>
  <div class="modal fade" ref="modal_ref" :id="title" tabindex="-1" :aria-labelledby="title + 'Label'" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <!-- <div class="modal-header"></div> -->
        <div class="modal-body">
          <div class="container-fluid">
            <h5 class="modal-title flex-center mb-3" :id="title + 'Label'">
              <slot name="body"></slot>
            </h5>
            <div class="row">
              <div class="col-lg-6">
                <div class="flex-center">
                  <img src="..." class="img-fluid mb-2" alt="飼主照片">
                </div>
                <p class="flex-center">[上傳照片]</p>
              </div>
              <div class="col-lg-6">
                <div class="mb-3 row">
                  <label for="input1" class="col-lg-4 col-form-label">飼主名稱:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" placeholder="請輸入飼主名字" id="input1">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="input2" class="col-lg-4 col-form-label">所在地區:</label>
                  <div class="col-lg-8">
                    <select class="form-select" aria-label="Default select example" id="input2">
                      <option selected>選擇地區</option>
                      <option value="1">One</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="input3" class="col-lg-4 col-form-label">電話:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" placeholder="請輸入電話" id="input3">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="input4" class="col-lg-4 col-form-label">Email:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" placeholder="請輸入email" id="input4">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <label for="input5" class="col-lg-3 col-form-label text-lg-end">自我介紹:</label>
              <div class="col-lg-9">
                <textarea class="form-control" placeholder="簡述與毛小孩的日常" id="input5" style="height: 100px"></textarea>
              </div>
            </div>
            <div class="flex-center mt-5">
              <button class="btn btn-outline-dark btn-lg px-4 me-4" data-bs-dismiss="modal">取消</button>
              <button class="btn btn-outline-dark btn-lg px-4" data-bs-dismiss="modal" @click="$emit('submitOwner')">
                確定
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="modal-footer"></div> -->
      </div>
    </div>
  </div>
</template>
