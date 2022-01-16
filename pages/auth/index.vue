<script lang="ts">
import Login from '~/pages/auth/components/Login.vue'
import SignUp from '~/pages/auth/components/SignUp.vue'
import Confirmation from '~/pages/auth/components/Confirmation.vue'
import { useAlertStore } from '~/stores/alert'

export default defineComponent({
  name: 'App',
  layout: 'auth',
  components: {
    Login,
    SignUp,
    Confirmation
  },
  setup() {
    const alert = useAlertStore()

    const currentTab = ref(0)
    const showConfirmation = ref(false)
    const confirmationEmail = ref('')
    const tabs = ref([
      {
        title: 'Login',
        tabindex: 0,
      },
      {
        title: 'Sign Up',
        tabindex: 1,
      },
    ])

    const confirmationProcess = (user) => {
      showConfirmation.value = true
      confirmationEmail.value = user.email
    }
    const emailConfirmed = () => {
      currentTab.value = 0
      showConfirmation.value = false
      alert.setMessage('Your email has been confirmed. Please login again.')
    }

    return {
      currentTab,
      showConfirmation,
      confirmationEmail,
      tabs,
      confirmationProcess,
      emailConfirmed,
    }
  },
});
</script>

<template>
  <div v-if="!showConfirmation" class="max-w-md mx-auto">
    <div class="pt-4 text-xs opacity-60">
      Login to Chain!
    </div>
    <div class="mt-2 text-xs tabs tabs-boxed">
      <div
        v-for="tab in tabs"
        class="tab"
        :key="tab.tabindex"
        :class="{ 'tab-active': currentTab === tab.tabindex }"
        @click="currentTab = tab.tabindex"
      >
        {{ tab.title }}
      </div>
    </div>
    <div>
      <div v-if="currentTab === 0">
        <Login @userNotConfirmed="confirmationProcess" />
      </div>
      <div v-if="currentTab === 1">
        <SignUp @signedUp="confirmationProcess" />
      </div>
    </div>
  </div>
  <div v-else class="py-2 w-132">
    <Confirmation :email="confirmationEmail" @emailConfirmed="emailConfirmed" />
  </div>
</template>
