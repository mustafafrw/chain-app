import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const message = ref({
    text: '',
    type: 'info',
  })

  function setMessage(text: string, type = 'error') {
    message.value.text = text
    message.value.type = type
  }

  return {
    message,
    setMessage,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAlertStore, import.meta.hot))
