<template>
  <div v-for="chain in data" :key="chain.id">
    {{ chain.title }}
  </div>
  <div @click="postChain">
    post Chain
  </div>
</template>
<script>
import { useChain } from "@/stores/chain";
import { Chain } from "@/src/models"

export default defineComponent({
  name: "ChainIndex",
  layout: 'default',
  async setup() {
    const chain = useChain();

    const { data } = useAsyncData('fetchChains', () => {
       return chain.fetchChains()
    })

    const postChain = async () => {
      const res = await chain.postChain(new Chain({
        title: 'test_123'
      }))
    }

    return {
      data,
      postChain
    };
  }
})
</script>
