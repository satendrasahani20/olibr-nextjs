import { useRouter } from 'next/router'
export const route = (link) => {
 const router=useRouter()
 router.push(link)
}

