import { useEffect, useState } from "react"



const useOrganization =(email)=>{

    const [isOrganization,setIsOrganization] = useState(false)
    
    const [isOrganizationLoading, setIsOrganizationLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/api/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setIsOrganization(data.isOrganization)
            setIsOrganizationLoading(false)
                 
        })

    },[email])
    return[isOrganization, isOrganizationLoading]
}

export default useOrganization;