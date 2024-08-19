
export const ListsMaps = () => {
    const arr=[10,3,4,9,5,2,7];
    const fruits=['mango','apple','banana','grapes','pineapple','orange','z papaya']
    arr.sort((n1,n2) => n1-n2)
    // arr.sort((n1,n2) => n2-n1)
    fruits.sort((a1,a2) => a1.localeCompare(a2))
    // fruits.sort((a1,a2) => a2.localeCompare(a1))

    const xy = arr.filter((yo) => yo >= 5)
    console.log(xy);
    
    return(
        <>
        <ul>
            {
                arr.map((item,ele) => {
                    return(                      
                        <li key={ele}>Items : {item}</li> 
                    )
                })
            }
        </ul>
        <ul>
            {
                fruits.map((item,ele) => {
                    return(                      
                        <li key={ele}>Items : {item}</li> 
                    )
                })
            }
        </ul>
        <ul>
            {
                xy.map((item,ele) => {
                    return(                      
                        <li key={ele}>Items : {item}</li> 
                    )
                })
            }
        </ul>
        </>
    )
}