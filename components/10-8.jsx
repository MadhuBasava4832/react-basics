import { Child } from "./10-8_2"

export function Parent (){

    var Details={
        name:'Luffy',
        number:'89',
    }


    

    // const handc=()=>{
    //     console.log('it is clicked');
    // }
    return (
        <>
        <Child ch='1' na='takemichi' nu='20' br='ece' kjh={Details} />
        <Child ch='2' na='sauke' nu='21' br='ece' />
        <Child ch='3' na='zoro' nu='22' br='ece' />
        <Child/>
        </>
    )
}