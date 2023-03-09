import { useEffect, useState } from "react"


const useInvestment = (email) =>{
    const [isInvestment, setIsInvestment] = useState(false)
    const [isInvestmentLoading, setIsInvestmentLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/api/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
         
            if(data.role === 'Investment'){
                setIsInvestment(true)
                setIsInvestmentLoading(false)
            }
                  
        })
    },[email])
    return[isInvestment,isInvestmentLoading]
}

export default useInvestment;