<script setup>
  import { ref} from 'vue'
  let comment = ref("很安心的接案者，下次還會預約");
  let rating = ref(4);
  let aaa = ref("rounded-0")
  const orderData = ref({
				"owner": {
					"name": "小新",
					"phone": "0937849305",
					"city": "台北市",
					"area": "信義區",
					"description": "我希望找一個有耐心的照顧者，幫忙帶我的狗狗去散步！",
					"avatar": "https://media.istockphoto.com/id/2022705962/photo/selfie-portrait-of-young-asian-woman-with-her-beagle-dog-in-the-park-in-summer.jpg?s=1024x1024&w=is&k=20&c=5YPSpqEjMGCOD5RF9XRYY1whrtNR37UiU79pBdjNgwM="
				},
				"pet": {
					"name": "小白",
					"species_id": 1,
					"size": 1,
					"birthday":"2022-03-04",
					"gender": 1,
					"personality_description":"害羞",
					"avatar": "https://api.fnkr.net/testimg/80x80/00CED1/FFF/?text=test_pet"
				},
				"service": {
					"service_type_id" : 1,
					"price": 700,
					"price_unit": "每次1小時"
				},
				"order": {
					"id": 1,
					"service_date": "2025-04-12",
					"note": "小狗喜歡睡午覺",
					"status": "飼主請求預約",
					"did_freelancer_close_the_order": false,
					"did_owner_close_the_order": false,
					"created_at": "2025-04-10T00:00:000Z",
					"updated_at": "2025-04-10T00:00:000Z"
				},
				"review": {
				}
			},)
</script>
<template>
  <main>
    <div class="d-inline-block bg-primary rounded-top p-1"><span>X</span>{{ orderData.order.status }}</div>
    <div class="card border-0 shadow-sm mb-3" :class="aaa">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-7">
            <div class="d-flex align-items-center mb-2">
              <img :src="orderData.owner.avatar" class="rounded-circle avatar me-3" alt="頭像" />
              <div>
                <div class="fw-bold">{{ orderData.owner.name }}</div>
                <div class="text-primary small">
                  <span class="me-1">X</span>
                  <span>{{ orderData.owner.city }} {{ orderData.owner.area }}</span>
                </div>
              </div>
            </div>
            <p class="text-muted small mb-3">{{ orderData.owner.description }}</p>
            <hr class="text-muted">
            <div class="d-flex align-items-center mb-3">
              <div class="text-center me-3">
                <div><span class="badge rounded-pill bg-primary text-dark mb-2">寵物</span></div>
                <img :src="orderData.pet.avatar" class="rounded-circle avatar mb-1" alt="頭像" />
                <div>{{ orderData.pet.name }}</div>
              </div>
              <div class="d-flex flex-column gap-1">
                <p>體型<span>｜</span>{{ orderData.pet.size }}</p>
                <p>年紀<span>｜</span>{{ orderData.pet.birthday }}歲</p>
                <p>性別<span>｜</span>{{ orderData.pet.gender }}</p>
                <p>個性<span>｜</span>{{ orderData.pet.personality_description }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="bg-secondary-tint rounded-3 p-3 mb-3">
              <div class="row">
                <div class="col-4 text-end d-flex flex-column gap-3">
                  <p>預約服務<span>｜</span></p>
                  <p>時間<span>｜</span></p>
                  <p>地點<span>｜</span></p>
                  <p>備註<span>｜</span></p>
                </div>
                <div class="col-8 d-flex flex-column gap-3 ps-0">
                  <p><span class="me-1">X</span>{{ orderData.service.service_type_id }}</p>
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
              <button class="btn btn-primary flex-fill rounded-pill p-3">接受預約</button>
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
              :class="i <= rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'"
            ></i>
          </div>
          <p class="mb-0 text-dark">{{ comment }}</p>
        </div>      
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
  .text-brown {
    color: #7c4f27;
  }
  .avatar{
    width: 80px;
    height: 80px;
    object-fit: cover;
    // background-image: url('default-avatar.png'); /* 預設圖片 */
    // background-size: cover;
  }
</style>
