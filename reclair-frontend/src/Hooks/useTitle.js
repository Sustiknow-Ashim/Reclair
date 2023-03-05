import { useEffect } from "react";


const useTitle = title => {
    useEffect(()=>{
        document.title = `Reclair -${title}`
    },[title])
};

export default useTitle;