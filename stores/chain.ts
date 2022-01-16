import { acceptHMRUpdate, defineStore } from 'pinia'
import { Chain } from "@/src/models"
import { DataStore } from '@aws-amplify/datastore'

export const useChain = defineStore({
    id: 'chain',

    state: () => ({
        chains: []
    }),

    getters: {
        getChains: (state) => state.chains
    },

    actions: {
        async fetchChains() {
            const chains = await DataStore.query(Chain);
            this.$patch((state) => {
                state.chains = chains.filter(chain => chain.createdAt);
            })

            return this.chains
        },
        async postChain(chain: Chain) {
            const status = await DataStore.save(chain);
            console.log("Post saved successfully!", status);
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useChain, import.meta.hot))
}
