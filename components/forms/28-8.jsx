import { useState } from "react"

export const Typesofinputs=()=>{

    const [name,setname]=useState('');
    const [number,setnumber]=useState();
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');

    const fun=(e)=>{
        const name = e.target.name;
        console.log(name);
        
    }

    return(
        <>
        <h1>place holder , name , value</h1>
        {/* <input type="text" placeholder="Enter Name here" name="name" onChange={(e)=>setname(e.target.value)} />
        <input type="number" placeholder="Enter phone number here" name="number" onChange={(e)=>setnumber(e.target.value)} />
        <input type="email" placeholder="Enter email here" name="email" onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder="Enter password here" name="password" onChange={(e)=>setpassword(e.target.value)} /> */}
        <input type="text" placeholder="Enter Name here" name="name" onChange={(e)=>fun(e)} />

        <h3>Name : {name}</h3>
        <h3>Number : {number}</h3>
        <h3>Email : {email}</h3>
        <h3>Password : {password}</h3>
        </>
    )
}