<template>
  <div>
    <Header />
    <div class="flex flex-col justify-center relative overflow-hidden sm:py-12">
      <div>
        <slot />
      </div>
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header,
  },
}
</script>
