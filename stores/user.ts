import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CognitoUser } from '@aws-amplify/auth'
import { Auth } from '@aws-amplify/auth'
import { useAlertStore } from '@/stores/alert'

export const useUserStore = defineStore('user', () => {
  const user = ref<CognitoUser | any>({})
  const alert = useAlertStore()

  const currentUser = computed((): CognitoUser | any => {
    return user.value
  })

  async function setCurrentUser() {
    try {
      user.value = await Auth.currentAuthenticatedUser()
      console.log('called')
    }
    catch {

    }
  }

  async function signUp(email: string, password: string, nickname: string) {
    try {

      user.value = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          nickname,
        },
      })

      return true
    }
    catch (err) {

      alert.setMessage(err.message)
    }
  }

  async function confirmEmail(email: string, code: string) {
    try {

      await Auth.confirmSignUp(email, code)

      return true
    }
    catch (err) {

      alert.setMessage(err.message)
    }
  }

  async function login(email: string, password: string) {
    try {

      await Auth.signIn(email, password)
      await setCurrentUser()

    }
    catch (err) {
      console.log('error', err)

      if (err.name === 'UserNotConfirmedException')
        return 'UserNotConfirmedException'
      else
        alert.setMessage(err.message)
    }
  }

  async function logout() {
    try {

      await Auth.signOut()
      user.value = {}

      router.push('/auth')
    }
    catch (err) {

      alert.setMessage(err.message, 'error')
    }
  }

  return {
    setCurrentUser,
    signUp,
    confirmEmail,
    login,
    logout,
    currentUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
