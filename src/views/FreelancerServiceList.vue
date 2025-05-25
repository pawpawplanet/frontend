<script setup>
  import { ref} from 'vue'
  let comment = ref("很安心的接案者，下次還會預約");
  let rating = ref(4);
</script>
<template>
  <main>
    <div class="card rounded-4 border-0 shadow-sm mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-8">
            <div class="d-flex align-items-center mb-2">
              <img src="https://api.fnkr.net/testimg/80x80/00CED1/FFF/?text=test1" class="rounded-circle me-3" alt="頭像" />
              <div>
                <div class="fw-bold">小新</div>
                <div class="text-primary small">
                  <span class="me-1">X</span>
                  <span>台北市 信義區</span>
                </div>
              </div>
            </div>
            <p class="text-muted small mb-3">
              我希望找一個有耐心的照顧者，幫忙帶我的狗狗去散步！
            </p>
            <hr class="text-muted">
            <div class="d-flex align-items-center mb-3">
              <div class="text-center me-3">
                <div><span class="badge rounded-pill bg-primary text-dark mb-2">寵物</span></div>
                <img src="https://api.fnkr.net/testimg/80x80/00CED1/FFF/?text=test2" class="rounded-circle mb-1" alt="頭像" />
                <div>小白</div>
              </div>
              <div class="d-flex flex-column gap-1">
                <p>體型<span>｜</span>中型犬（10-20公斤）</p>
                <p>年紀<span>｜</span>4歲</p>
                <p>性別<span>｜</span>女</p>
                <p>個性<span>｜</span>害羞</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-secondary-tint rounded-3 p-3 mb-3">
              <div class="row">
                <div class="col-4 text-end d-flex flex-column gap-3">
                  <p>預約服務<span>｜</span></p>
                  <p>時間<span>｜</span></p>
                  <p>地點<span>｜</span></p>
                  <p>備註<span>｜</span></p>
                </div>
                <div class="col-8 d-flex flex-column gap-3 ps-0">
                  <p><span class="me-1">X</span>寵物散步</p>
                  <p>2025/04/12</p>
                  <p>新北市 永和區</p>
                  <p>
                    1.小白受到驚嚇可能會爆衝<br>
                    2.小白喜歡在草地嗅聞<br>
                    3.小白要在草地才能上廁所<br>
                  </p>
                </div>
              </div>
              <hr class="text-muted">
              <div class="d-flex justify-content-between">
                <p>總共</p>
                <p>NT$ 700</p>
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
</style>
