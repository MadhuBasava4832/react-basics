import React from "react";
import { useState } from "react";

export const UseStatehook = () => {
    const [counterany, setcounterany] = useState(0);
    const [b, setb] = useState(true);

    const Increase = () => {
        if (counterany == 10) {
            setcounterany(counterany);
        } else {
            setcounterany(counterany + 1);
            setb(!b);
        }

    }
    const Decrease = () => {
        if (counterany == 0) {
            setcounterany(counterany);
        } else {
            setcounterany(counterany - 1);
            setb(!b);
        }

    }
    const Reset = () => {
        setcounterany(0);
    }

    return (
        <>
            <div style={{
                width: '500px', height: '500px', border: '1px solid black',
                display: 'grid', alignItems: 'center', justifyContent: 'center'
            }}>
                <h1>hello useState</h1>
                <p>counting = {counterany} {b ? <h2>hai</h2> : <h2>bye</h2>} </p>
                <button onClick={Increase}>Increase</button>
                <button onClick={Decrease}>Decrease</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    )
}
