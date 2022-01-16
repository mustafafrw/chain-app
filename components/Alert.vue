<script setup>
import { useAlertStore } from '@/stores/alert'

const alert = useAlertStore()
const isAlertShow = ref(false)

watchEffect(() => {
  if (alert.message.text)
    isAlertShow.value = true
  else
    isAlertShow.value = false
})

</script>
<template>
  <div>
    <input id="my-checkbox-modal" v-model="isAlertShow" type="checkbox" class="modal-toggle">
    <div class="modal">
      <div class="modal-box">
        <p>{{ alert.message.text }}</p>
        <div class="modal-action">
          <label for="my-checkbox-modal" class="btn">Close</label>
        </div>
      </div>
    </div>
  </div>
</template>
