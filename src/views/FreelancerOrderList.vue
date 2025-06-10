<script setup>
  import { ref } from 'vue';
  import OrderCard from '@/components/pages/freelancer-order-list/order-card.vue';
  import OrderPagination from '@/components/pages/freelancer-order-list/order-Pagination.vue';
  import Modal from '@/components/modal/order-modal.vue';
  // import formatter from '@/stores/formatter';

  const thisModal = ref();
  const ordersData = ref([
    {
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
          "birthday": "2022-03-04",
          "gender": 1,
          "personality_description": "害羞",
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
        "rating": 4.3,
        "comment": "很安心的接案者，下次還會預約"
      }
    },
    {
      "owner": {
          "name": "大哥",
          "phone": "0977777777",
          "city": "新北市",
          "area": "板橋區",
          "description": "我家的貓怕生！Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "avatar": "https://cdn.stocksnap.io/img-thumbs/960w/man-dog_KOEZ5EORMG.jpg"
      },
      "pet": {
          "name": "大黑",
          "species_id": 0,
          "size": 2,
          "birthday": "2020-10-21",
          "gender": 0,
          "personality_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "avatar": "https://api.fnkr.net/testimg/80x80/0BAEa1/ggg/?text=test_pet2"
      },
      "service": {
          "service_type_id" : 2,
          "price": 1000,
          "price_unit": "每次2小時"
      },
      "order": {
          "id": 2,
          "service_date": "2025-06-06",
          "note": "大貓怕生Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "status": "飼主請求預約",
          "did_freelancer_close_the_order": false,
          "did_owner_close_the_order": false,
          "created_at": "2025-06-06T00:00:000Z",
          "updated_at": "2025-06-06T00:00:000Z"
      },
      "review": {
        "rating": 3.9,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?"
      }
    }
  ]);
  const samedayOrdersData = ref([
    {
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
          "birthday": "2022-03-04",
          "gender": 1,
          "personality_description": "害羞",
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
        "rating": 4.3,
        "comment": "很安心的接案者，下次還會預約"
      }
    },
    {
      "owner": {
          "name": "小2",
          "phone": "0937849305",
          "city": "台北市",
          "area": "信義區",
          "description": "2！",
          "avatar": "https://media.istockphoto.com/id/2022705962/photo/selfie-portrait-of-young-asian-woman-with-her-beagle-dog-in-the-park-in-summer.jpg?s=1024x1024&w=is&k=20&c=5YPSpqEjMGCOD5RF9XRYY1whrtNR37UiU79pBdjNgwM="
      },
      "pet": {
          "name": "小白",
          "species_id": 1,
          "size": 1,
          "birthday": "2022-03-04",
          "gender": 1,
          "personality_description": "害羞",
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
        "rating": 4.3,
        "comment": "222"
      }
    },
    {
      "owner": {
          "name": "小3",
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
          "birthday": "2022-03-04",
          "gender": 1,
          "personality_description": "害羞",
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
        "rating": 4.3,
        "comment": "很安心的接案者，下次還會預約"
      }
    },
    {
      "owner": {
          "name": "小新",
          "phone": "0937849305",
          "city": "台北市",
          "area": "信義區",
          "description": "我希望找一個有耐心的照顧者，幫忙帶我的狗狗去散步！",
          "avatar": "https://media.istockphoto.com/id/2022705962/photo/selfie-portrait-of-young-asian-woman-with-her-beagle-dog-in-the-park-in-summer.jpg?s=1024x1024&w=is&k=20&c=5YPSpqEjMGCOD5RF9XRYY1whrtNR37UiU79pBdjNgwM="
      },
      "pet": {
          "name": "小4",
          "species_id": 1,
          "size": 1,
          "birthday": "2022-03-04",
          "gender": 1,
          "personality_description": "害羞",
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
        "rating": 4.3,
        "comment": "很安心的接案者，下次還會預約"
      }
    },
    {
      "owner": {
          "name": "大哥",
          "phone": "0977777777",
          "city": "新北市",
          "area": "板橋區",
          "description": "我家的貓怕生！Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "avatar": "https://cdn.stocksnap.io/img-thumbs/960w/man-dog_KOEZ5EORMG.jpg"
      },
      "pet": {
          "name": "大黑",
          "species_id": 0,
          "size": 2,
          "birthday": "2020-10-21",
          "gender": 0,
          "personality_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "avatar": "https://api.fnkr.net/testimg/80x80/0BAEa1/ggg/?text=test_pet2"
      },
      "service": {
          "service_type_id" : 2,
          "price": 1000,
          "price_unit": "每次2小時"
      },
      "order": {
          "id": 2,
          "service_date": "2025-06-06",
          "note": "大貓怕生Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?",
          "status": "飼主請求預約",
          "did_freelancer_close_the_order": false,
          "did_owner_close_the_order": false,
          "created_at": "2025-06-06T00:00:000Z",
          "updated_at": "2025-06-06T00:00:000Z"
      },
      "review": {
        "rating": 3.9,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore voluptatem odit, quidem autem consequatur repellat exercitationem, perspiciatis cupiditate nihil, accusantium officiis tempora aliquam sit qui id? Eius, magni repellat?"
      }
    }
  ]);

  // const samedayOrdersData = ref([]);

  const orderTags = ref([
    {
      name:'等待接受',
      value:'0'
    },
    {
      name:'等待付款',
      value:'1'
    },
    {
      name:'即將執行',
      value:'2'
    },
    {
      name:'最新回應',
      value:'3'
    },
    {
      name:'結案',
      value:'4'
    }
  ]);
  const tagCheck = ref(1);
  // const formatterData = ref({ tag: tagCheck.value});
  // const { formatSpecies, formatGender, formatIsLigation, formatSize, formatTag } = formatter(formatterData);
  
  function acceptOrder(msg){
    console.log(msg);
    showModal();
  }

  function showModal(){
    thisModal.value.p_show()
  }

  function getOrderApi(page){
    console.log(page);
  };
</script>
<template>
  <main>
    <div class="overflow-x-auto d-flex bg-white rounded-5 mx-auto mb-3 p-2 gap-2">
      <template v-for="tag in orderTags" :key="tag.value">
        <input type="radio" class="btn-check" name="orderTag" autocomplete="off" :id="'tag'+tag.value" :value="tag.value" v-model="tagCheck">
        <label class="btn btn-outline-primary rounded-4" :for="'tag'+tag.value">{{ tag.name }}</label>
      </template>
    </div>

    <div v-for="orderData in ordersData" :key="orderData.order.id">
      <OrderCard :notModal="true" :orderData="orderData" @accept-order="acceptOrder"></OrderCard>
    </div>
    <OrderPagination @get-order-api="getOrderApi"></OrderPagination>
    <Modal title="Modal1" ref="thisModal" :samedayOrdersData="samedayOrdersData" :acceptOrder="acceptOrder">
      <template #header>您在 2024/04/12 有 2 項等待接受的預約，請從清單中選擇接受的預約</template>
    </Modal>
  </main>
</template>
<style scoped lang="scss">
  .overflow-x-auto {
    white-space: nowrap;
    max-width: 470px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
