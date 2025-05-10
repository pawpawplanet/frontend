import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const is_login = ref(false)
  function changeLoginStatus(value) {
    is_login.value = value
  }

  return { is_login, changeLoginStatus }
})
