import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const is_login = ref(false)
  const loginUser = ref({})
  function changeLoginStatus(value) {
    is_login.value = value
  }
  function saveUserInfo(value) {
    loginUser.value = value
  }

  return { is_login, loginUser, changeLoginStatus, saveUserInfo }
})
