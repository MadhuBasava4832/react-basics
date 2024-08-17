import { useEffect, useState } from "react"

export const Useeffecthook = () => {
    const [flag,setflag]=useState(0);
    const [update,setupdate]=useState(0);

    useEffect(()=>{
        console.log("flag rendered" +" "+ flag);
        console.log("update rendered" +" "+ update);
        
    },[update])

    const Editflag =()=>{
        setflag(prev=>prev+1)
    }
    const Updateflag =()=>{
        setupdate(prev=>prev+1)
    }

    return(
        <>
        <p>Flag Value : {flag}</p>
        <p>Count Value : {update}</p>
        <button onClick={Editflag}>Flag value</button><br />
        <button onClick={Updateflag}>count value</button>
        </>
    )
}