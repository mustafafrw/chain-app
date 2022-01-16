<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const emit = defineEmits()

const loading: boolean = ref(false)
const signUpUser = ref({
  email: '',
  password: '',
  nickName: '',
})

const signUp = async() => {
  loading.value = true
  const { email, password, nickName } = signUpUser.value
  const isRegistered = await user.signUp(email, password, nickName)
  loading.value = false

  if (isRegistered)
    emit('signedUp', signUpUser.value)
}
</script>
<template>
  <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
    <div class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input v-model="signUpUser.nickName" type="text" placeholder="username" class="input input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="signUpUser.email" type="text" placeholder="email" class="input input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input v-model="signUpUser.password" type="text" placeholder="password" class="input input-bordered">
      </div>
      <div class="form-control mt-6">
        <input type="button" value="Sign Up" class="btn btn-primary" :disabled="loading" @click="signUp">
      </div>
    </div>
  </div>
</template>
