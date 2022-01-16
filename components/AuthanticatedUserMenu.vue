<script lang="ts" setup>
import { useUserStore } from '~/stores/user'

const showMenu = ref(false)
const user = useUserStore()

const logout = async() => {
  const status = await user.logout()
}

const onClickUserButton = () => {
  showMenu.value = !showMenu.value
}

const router = useRouter()
const goToLoginPage = () => {
  router.push('/auth')
}
</script>

<template>
  <div
    v-if="user.currentUser.username"
  >
    <div
      class="avatar cursor-pointer"
      @click="onClickUserButton"
    >
      <div class="rounded-full w-10 h-10 m-1">
        <img src="https://i.pravatar.cc/500?img=32">
      </div>
    </div>
    <ul
      v-if="showMenu" class="menu p-4 shadow-lg bg-base-200 rounded-box absolute right-0 mt-2"
    >
      <li class="menu-title">
        <span>
          {{ user.currentUser.attributes.email }}
        </span>
      </li>
      <li @click="logout">
        <a>
          Logout
        </a>
      </li>
    </ul>
  </div>
  <div v-else>
    <div
      class="flex items-stretch"
      @click="goToLoginPage"
    >
      <a class="btn btn-ghost btn-sm rounded-btn">
        Login
      </a>
    </div>
  </div>
</template>
