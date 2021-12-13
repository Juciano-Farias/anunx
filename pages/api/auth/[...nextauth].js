import NextAuth from "next-auth"
import axios from "axios"

export default NextAuth({  
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                const res =axios.post('api/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-type': 'application/json' }
                
                })

                const user = res.data

                if (user) {
                    return user
                }
                else {
                    return null
                }
            }
        })
    ],

    session: {
        jwt: true,

    },

    jwt: {
        secret: process.env.JWT_TOKEN,
    },

  database: process.env.MONGODB_URI,
})