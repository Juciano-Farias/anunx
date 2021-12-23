import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"

export default NextAuth({  
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const res = await axios.post(`${APP_URL}/api/auth/signin`, credentials)

                const user = res.data

                if (user) {
                    return user
                }   else {
                    throw '/auth/signin?i=1'
                }
            }
        })
    ],

    session: {
        jwt: true,

    },

    jwt: {
        secret: process.env.JWT_TOKEN,
        maxAge: 60,
        updateAge: 60
    },

    database: process.env.MONGODB_URI,

    debug: true
})