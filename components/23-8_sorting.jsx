import { useState } from "react"

export const Sorting = () => {


    const anobj = [
        {
            name: 'itachi',
            type: 'ninja',
            no: [2, 5, 6, 7, 9],
            price: 1000.99,
        },
        {
            name: 'jiraya',
            type: 'ninja',
            no: [2, 106, 71, 9],
            price: 600.99,
        },
        {
            name: 'obito',
            type: 'ninja',
            no: [1, 5, 39, 12],
            price: 700.99,
        },
        {
            name: 'zoro',
            type: 'pirate',
            no: [2, 5, 6, 7, 9],
            price: 1500.99,
        },
        {
            name: 'luffy',
            type: 'pirate',
            no: [2, 106, 71, 9],
            price: 6000.99,
        },
        {
            name: 'akaza',
            type: 'demon',
            no: [1, 5, 39, 12],
            price: 2700.99,
        },
    ]

    const [items,setitems] = useState(anobj);
    const sortdata = () => {
        const dummydata = [...items];
        dummydata.sort((n1,n2)=>n1.price-n2.price);

        setitems(dummydata);
    }

    // Reduce method
    const totalcost = () =>{
        return anobj.reduce((total,value)=>total += value.price,0)
    }

    return(
        <>
        <h1>pricing calculating totalcost</h1>
        <p>Total Cost by function  : {totalcost().toFixed(3)}</p>
        <p>Total Cost  : {anobj.reduce((total,value)=>total += value.price,0)} </p>
        <h1>Sorting</h1>

        <button onClick={sortdata}>sort by price</button>
        {
            items.map((details,index)=>{
                return(
                <div style={{border:'1px solid black', margin:'10px', width:'300px'}}>
                    <p>Name : {details.name}</p>
                    <p>Type : {details.type}</p>
                    <p>Price : {details.price}</p>
                    <ol>
                        {
                            details.no.map((hmm)=>{
                                return(
                                    <li>{hmm}</li>
                                )
                            })
                        }
                    </ol>
                </div>
                )
            })
        }


        </>
    )
}