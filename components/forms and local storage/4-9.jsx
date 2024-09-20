import { useState } from "react"

export const Formssubmit=()=>{

   const [us,setus] = useState({
    name:'',
    number:'',
    email:'',
    password:'',
   });
   const [checkvalue,setcheckvalue]=useState(false);
   const [gender,setgender]=useState('');
   const [college,setcollege] = useState();



   const handlechange = (e) => {
    const {name,value}=e.target;
    setus(prev => ({...prev,[name]:value}))
   }
   const submitbuuton = () => {
    console.log(us);
   }
   const checkfun = () => {
    setcheckvalue(!checkvalue);
    var cx=!checkvalue;
    console.log(cx);
   }
   const genderfun = (e) => {
    var xc=e.target.value;
    setgender(e.target.value);
    console.log(xc);
   }
   const selectcollege = (e) => {
    setcollege(college);
    console.log(e.target.value);
   }

    return(
        <>
        <h1>submit form</h1>
        <input type="text" placeholder="Enter Name here" name="name" onChange={(e)=>handlechange(e)} /> <br />
        <input type="number" placeholder="Enter phone number here" name="number" onChange={(e)=>handlechange(e)} /> <br />
        <input type="email" placeholder="Enter email here" name="email" onChange={(e)=>handlechange(e)} /> <br />
        <input type="password" placeholder="Enter password here" name="password" onChange={(e)=>handlechange(e)} /> <br />
        <button onClick={submitbuuton}>Submit</button> <br />

        <label> <input type="checkbox" checked={checkvalue} onChange={checkfun} /> college</label> <br />
        <label> <input type="radio" value='male' checked={gender==="male"} onChange={genderfun} /> Male</label> 
        <label> <input type="radio" value='female' checked={gender==="female"} onChange={genderfun}   /> female</label> <br />
        <select value={college} onChange={selectcollege} >
            <option value="AEC">AEC</option>
            <option value="ACET">ACET</option>
            <option value="ACOE">ACOE</option>
        </select>
        <h3>Name : {us.name}</h3>
        <h3>Number : {us.number}</h3>
        <h3>Email : {us.email}</h3>
        <h3>Password : {us.password}</h3>
        </>
    )
}