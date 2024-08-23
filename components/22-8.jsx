
export const Arrayobj = () => {
    const obje = [2, 5, 6, 8, 1, 10]
    obje.sort((n1,n2)=>n1-n2);
    const dummy=[
        {
            name:'itachi',
            type:'ninja',
            no:[2,5,6,7,9],
            price:1000,
        },
        {
            name:'jiraya',
            type:'ninja',
            no:[2,106,71,9],
            price:600,
        },
        {
            name:'obito',
            type:'ninja',
            no:[1,5,39,12],
            price:700,
        },
    ]
    // dummy.sort((n1,n2)=>n1.price-n2.price)
    return (
        <>
        {
            obje.map((nos)=>{
                return(
                    <>
                    <div>{nos}</div>
                    </>
                )
            })
        }


        {
            dummy.map((cycle,ref)=>{
                return(
                    <>
                    <h2>{cycle.name}</h2>
                    <p>{cycle.type}</p>
                    <div>
                        {
                        cycle.no.map((number)=>{
                            return(
                                <p>{number}</p>
                            )

                        })
                        }
                    </div>
                    </>
                )
            })
        }

        </>
    )
}
