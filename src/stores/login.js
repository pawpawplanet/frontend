import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const is_login = ref(false)
  const user = ref({
    avatar: null,
    name: null,
    role: null,
  })
  function changeLoginStatus(value) {
    is_login.value = value
  }
  function saveUserInfo(value) {
    user.value = value
  }
  function removeLoginStatus(value) {
    localStorage.removeItem('token')
    is_login.value = value
  }

  function removeUserInfo(value) {
    localStorage.removeItem('user_info')
    user.value = value
  }

  return {
    is_login,
    user,
    changeLoginStatus,
    saveUserInfo,
    removeLoginStatus,
    removeUserInfo,
  }
})
