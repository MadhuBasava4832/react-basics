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




// 24-8-24 (Filter and search by name or price)

export const Filtering = () => {


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
        {
            name: 'sasuke',
            type: 'ninja',
            no: [2, 5,11, 29],
            price: 1500.99,
        },
        {
            name: 'tsunade',
            type: 'ninja',
            no: [12, 106, 99, 69],
            price: 650.99,
        },
        {
            name: 'rin',
            type: 'ninja',
            no: [12, 3, 39, 12],
            price: 995.99,
        },
        {
            name: 'brook',
            type: 'pirate',
            no: [21, 72, 9],
            price: 390.99,
        },
        {
            name: 'sanji',
            type: 'pirate',
            no: [21, 16, 701, 90],
            price: 499.99,
        },
        {
            name: 'tanjiro',
            type: 'demon slayer',
            no: [10, 50, 390, 102],
            price: 990.99,
        },
    ]

    const [items,setitems] = useState(anobj);
    const sortdata = () => {
        const dummydata = [...items];
        dummydata.sort((n1,n2)=>n1.price-n2.price);

        setitems(dummydata);
    }


    const [search,setsearch]=useState('');

    const searched = (e) => {
        // console.log(e.target.value);
        const {value}=e.target;
        console.log(value);
        
        setsearch(value);        
    }
    // const filterdata = items.filter((data)=>data.price>1000);
    const searchdt = search.toLowerCase();
    // const 
    const filterdata = items.filter((data)=>{
        const nameincludes=data.name.toLowerCase().includes(searchdt);
        const rollincludes=data.price.toString().includes(searchdt);
        return nameincludes || rollincludes;
    });
    console.log(filterdata);
    
    const displaydata = search ? filterdata : items;
    return(
        <>

        
        <h1>Filtering</h1>
        <input type="text" placeholder="search here" onChange={(e)=>searched(e)}/>

        <button onClick={sortdata}>sort by price</button>

        {/* {
            
            filterdata ? 
            filterdata.map((details,index)=>
            {
                return(
                    <div style={{border:'1px solid black', margin:'10px', width:'300px'}} key={index} >
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
            }):
            items && items.map((details,index)=>{
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
        } */}

       {     displaydata && displaydata.map((details,index)=>{
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