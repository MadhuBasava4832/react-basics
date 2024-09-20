import React from "react";
import './6-9.css';
import { useState } from "react";

export const SignupPageduplicate = () => {


    const [use,setuse] = useState({
        name:'',
        number:'',
        email:'',
        password:'',
    });
    const [usee,setusee] = useState({
        email:'',
        password:'',
    });



    const handlechange = (e) => {
        const {name,value} = e.target;        
        setuse(prev => ({...prev,[name]:value}));
    }
    const submitfun1 = (e) => {
        e.preventDefault();
        // alert("You have successfully registered");
        console.log(use);
        var zx = JSON.parse(localStorage.getItem(use.email));
        
        if(zx == null){
            localStorage.setItem(use.email,JSON.stringify(use));
        }else{
            alert("you already have an account");
        }
        const vbb = document.querySelector(".parent");
        vbb.style.transform = 'rotateY(180deg)';
    }

    const submitfun11 = (e) => {
        e.preventDefault();
        const vb = document.querySelector(".parent");
        vb.style.transform = 'rotateY(0deg)';
    }
    const submitfun2 = (e) => {
        e.preventDefault();
        const vbb = document.querySelector(".parent");
        vbb.style.transform = 'rotateY(180deg)';
    }
    
    const handlechange1 = (e) => {
        const {name,value} = e.target;        
        setusee(prev => ({...prev,[name]:value}));
    }
    const submitfun22 = (e) => {
        e.preventDefault();
        console.log(usee);
        var zx = JSON.parse(localStorage.getItem(usee.email));
        if(zx == null){
            alert("You do not have an account");
            const vb = document.querySelector(".parent");
            vb.style.transform = 'rotateY(0deg)';
        }else{
            if(zx.password==usee.password){
                alert("you have successfully logged in");
            }else{
                alert("Enter correct details");
            }
        }
    }

    return (
        <>
            <div className="center">
                <div className="parent">
                <div className="child">
                    <h1>Sign Up</h1><br />
                    <form >
                    <p>Name</p>  <input type="text" name="name" onChange={(e) => handlechange(e)} /> <br /><br />
                    <p>Phone Number</p>  <input type="text" name="number" onChange={(e) => handlechange(e)} /> <br /><br />
                    <p>Email</p>  <input type="email" name="email" onChange={(e) => handlechange(e)} /> <br /><br />
                    <p>Password</p>  <input type="password" name="password" onChange={(e) => handlechange(e)} /> <br /><br />
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <div className="middle"><button type="submit" onClick={submitfun1} >Sign up</button></div>
                    <div className="middle"><button type="submit" onClick={submitfun2} >Log In</button></div>
                    </div>
                    </form>
                </div>
                <div className="child child2">
                    <h1>Log In</h1><br /><br />
                    <form  >
                    <p>Email</p> <br /> <input type="email" name="email"  onChange={(e) => handlechange1(e)} /> <br /><br /> <br />
                    <p>Password</p> <br /> <input type="password" name="password"  onChange={(e) => handlechange1(e)} /> <br /><br /> <br />
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <div className="middle"><button type="submit" onClick={submitfun22} >Log In</button></div>
                    <div className="middle"><button  onClick={submitfun11} >Sign up</button></div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}