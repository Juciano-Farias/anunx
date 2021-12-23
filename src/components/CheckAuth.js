import { useSession } from "next-auth/react"
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"

const CheckAuth = ({ Component, pageProps }) => {
    const { data: session, status } = useSession()
    const isUser = !!session?.user
    const router = useRouter()

    useEffect(() => {
        if(status === "loading") return 

        if(!isUser) {
            router.push('/auth/signin')
        }  
    }, [isUser, status])

    if(isUser) {
        return <Component {...pageProps} />
    }

    console.log(isUser)
    return 'Carregando...'

}

export default CheckAuth