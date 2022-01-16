<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const emit = defineEmits()

const loginUser = ref({
  email: '',
  password: '',
})
const loading: boolean = ref(false)

const login = async() => {
  loading.value = true
  const { email, password } = loginUser.value
  const status = await user.login(email, password)
  loading.value = false

  if (status === 'UserNotConfirmedException')
    emit('userNotConfirmed', loginUser.value)
}
</script>
<template>
  <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
    <div class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="loginUser.email" type="text" placeholder="email" class="input input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input v-model="loginUser.password" type="password" placeholder="password" class="input input-bordered">
        <label class="label">
          <a href="#" class="label-text-alt">Forgot password?</a>
        </label>
      </div>
      <div class="form-control mt-6">
        <input type="button" value="Login" class="btn btn-primary" :disabled="loading" @click="login">
      </div>
    </div>
  </div>
</template>
