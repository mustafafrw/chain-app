import { defineNuxtPlugin } from '#app'
import { Auth } from '@aws-amplify/auth'
import { DataStore } from '@aws-amplify/datastore'
import { Amplify } from '@aws-amplify/core'
import awsConfig from '@/src/aws-exports'

export default defineNuxtPlugin(nuxtApp => {
    Amplify.configure(awsConfig)

    nuxtApp.auth = Auth
    nuxtApp.dataStore = DataStore
})
