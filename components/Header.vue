<script lang="ts">
import AuthanticatedUserMenu from '@/components/AuthanticatedUserMenu.vue'
export default {
  components: {
    AuthanticatedUserMenu,
  },
}
</script>

<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">
        <nuxt-link to="/chain">
          Chain
        </nuxt-link>
      </span>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/chain">
          Notifications
        </a>
      </div>
      <div class="flex-none">
        <AuthanticatedUserMenu />
      </div>
    </div>
  </div>
</template>
