import '../App.css'
import Takemichi from '../assets/takemichi.jpeg'

export function Child ({ch='n',na='naruto',nu='53',br='ece',kjh}){
    // console.log(kjh)

    const name1=(something)=>{
        alert='you already clicked'
        console.log('it is clicked' + " " +something);
    }

    return (
        <>
        <div className='divi'>

            {/* <h1>Child : {props.ch}</h1> */}
            
            
            <h1>Person : {ch}</h1>
            <p>Name : {na}</p>
            <p>Number : {nu}</p>
            <p>Branch : {br}</p>
            <img src={Takemichi}/><br />
            <button onClick={() =>{name1('Bro')}}>click here</button>
        </div>
        </>
    )
}