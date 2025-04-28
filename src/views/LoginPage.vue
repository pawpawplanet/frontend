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
      <h1>登入</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="email" class="form-label" >Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="d-flex align-items-center mt-3">
          <button type="submit" class="btn btn-primary me-3">登入</button>
          <p v-if="errorMessage" class="text-danger mb-0">{{ errorMessage }}</p>
        </div>
        
      </form>
      <p class="text-danger mb-0">
        還沒有帳號? 
        <router-link to="/signup" class="text-primary text-decoration-underline">立即註冊</router-link>
      </p>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '@/plugins/api/users/users.js'; 

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();


const submitForm = async () => {
  
  errorMessage.value = '';

  const formData = {
    email: email.value,
    password: password.value,
    
  };

    console.log("formData:", formData);
  
    try {
      const response = await loginUser(formData); 
      console.log('登入成功:', response.data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('登入成功 !');
      router.push('/');
    } catch (error) {
      console.error('登入失敗:', error.response?.data || error.message);
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage.value = error.response.data.message;
      } else {
        errorMessage.value = '登入失敗，請稍後再試。';
      }
    }
  };

</script>
