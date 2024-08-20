import React from "react"
import Naruto from '../assets/naruto(23).jpeg'
import { objanime } from "./20-8_objet"
import styless from './20-8.module.css'

export const Objectmaps = () =>{
   
    function hello(){
        console.log("yeah it is working");
        
        
    }
    return(
        <>
            <h1 style={{textAlign:'center' , color:'white'}}>Anime Characters</h1>
        <div className={styless.main}>

        {
            objanime.map((student,index)=>{
                return (
                    <div className={styless.container} >
                        <div className={styless.size}>
                            <div onClick={hello} className={styless.small}></div>
                            <img src={student.image} alt="" />
                        </div>
                        <p>Name : {student.name}</p>
                        <p>From : {student.from}</p>
                        <p>No : {student.no}</p>
                    </div>
                   
                )
            })

        }
        </div>
        </>
    )
}