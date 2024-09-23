import { useEffect } from "react"

export const UseReloadWarnning=()=>{
    const handleReload=(e:BeforeUnloadEvent)=>{
        e.preventDefault()
        e.returnValue= ''
    }
    useEffect(()=>{
        window.addEventListener('beforeunload',handleReload);
        return ()=>{
            window.removeEventListener('beforeunload',handleReload)
        }
    },[])
   
}