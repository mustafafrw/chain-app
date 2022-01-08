import { defineNuxtPlugin } from '#app'
import { Amplify } from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsConfig from '@/src/aws-exports'

export default defineNuxtPlugin(nuxtApp => {
    Amplify.configure(awsConfig)
    console.log('Amplify', Amplify)
    Auth.signUp({
        username: 'mustafafrw@gmail.com',
        password: '1995GS-fb',
        attributes: {
            email: 'mustafafrw@gmail.com'
        }
    })
})
