<template>
   
   <div class="w-100 h-25 bg-secondary-tint py-1-25">
      <div class="container">
          <div class="d-flex align-items-center justify-content-between">
              <RouterLink to="/">
              <img src="@/assets/images/logo/logo.png" alt="">
              </RouterLink>
          </div>
      </div>    
   </div>

    <div class="container py-5">
      <h1>註冊</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">確認密碼</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div class="mb-3">
          <label class="form-label d-block">選擇身分</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="roleEmployer" name="role" value="owner" v-model="role">
            <label class="form-check-label" for="roleEmployer">飼主</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="roleContractor" name="role" value="freelancer" v-model="role">
            <label class="form-check-label" for="roleContractor">接案者</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">註冊</button>
      </form>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { registerUser } from '@/plugins/api/users/users.js'; // 引入註冊 API 函數
  
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const role = ref('');
  const errorMessage = ref('');

  const router = useRouter();


  
  const submitForm = async () => {
     errorMessage.value = '';

    if (password.value !== confirmPassword.value) {
      errorMessage.value = '密碼和確認密碼不一致';
      return;
    }
  
    const formData = {
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value, 
      role: role.value,
    };

    //console.log("formData:", formData);
  
    try {
      const response = await registerUser(formData); 
      console.log('註冊成功:', response.data);
      alert('註冊成功！');
      router.push('/');
    } catch (error) {
      console.error('註冊失敗:', error.response?.data || error.message);
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage.value = error.response.data.message;
      } else {
        errorMessage.value = '註冊失敗，請稍後再試。';
      }
    }
  };
  </script>