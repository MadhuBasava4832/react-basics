
import React, { useState } from "react";

export const OnclickEvent =() => {
    
    const [counter,setcounter]=useState(0);
    
    const clicking = (givename)=>{
        console.log('it is clicked and ' + " " + givename );  
        setcounter(counter + 1);
    }


    return(
        <>
        <h1>Events <br /> button functions OnclickEvent functions</h1>
        <button onClick={()=>{clicking('working')}}>click here</button>
        {/* <button onClick={()=>setcounter(counter + 1)}>click here</button> */}
        <h2>counter value : {counter}</h2>
        </>
    )
}


export const Onchangeevents =() => {

    const [name,setname]=useState('');
    const changing =(event)=>{
        console.log(event.target.value);
        setname(event.target.value);
    }
    return(
        <>
        <h1>on change functions</h1>
        {/* <input type="text" onChange={(e)=>console.log(e)} /> */}
        <input type="text" onChange={(event)=>changing(event)} />
        {/* <input type="text" onChange={(event)=>setname(event.target.value)} /> */}
        <h2>Name : {name}</h2>

        </>
    )
}


export const MouseEvents = () => {

    return(
        <>
        <h1>mouse enter and mouse leave</h1>
        <div onMouseEnter={()=> console.log('mouse entered') } style={{width:'300px',height:'300px',backgroundColor:'blue'}}>enter</div>
        <div onMouseLeave={()=> console.log('mouse leaved') }  style={{width:'300px',height:'300px',backgroundColor:'green'}}>leave</div>
        </>
    )
}
