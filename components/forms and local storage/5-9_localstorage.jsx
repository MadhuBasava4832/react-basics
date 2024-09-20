import { useEffect, useState } from "react"

export const Form9 = () => {
    const [uss,setuss] = useState({
        name:'',
        number:'',
        password:'',
    });
    const [gender,setgender] = useState();
    const [ussr,setussr] = useState();


    const changefun = (e) => {
        const {name,value} = e.target;
        setuss(prev => ({...prev,[name]:value}));
        
    }

    const submitfun = (e) => {
        e.preventDefault();
        // console.log(uss);
        setussr(uss);
        localStorage.setItem("anyuser",JSON.stringify(uss));
    }
    useEffect(() => {
        const hjk = JSON.parse(localStorage.getItem("anyuser"));  
        console.log(hjk);
                        
    },[])
    
    return(
        <>
        <form onSubmit={submitfun}>
            <input type="text" placeholder="Enter name " name="name" onChange={(e) => changefun (e)} /> <br />
            <input type="text" placeholder="Enter number " name="number" onChange={(e) => changefun (e)} /> <br />
            <input type="password" placeholder="Enter password " name="password" onChange={(e) => changefun (e)} /> <br />
            <label><input type="radio" value="male" checked={gender==="male"} onChange={(e) => setgender(e.target.value)} />Male</label>
            <label><input type="radio"  value="female" checked={gender==="female"} onChange={(e) => setgender(e.target.value)}  />Female</label><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

