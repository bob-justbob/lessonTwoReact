import { useEffect, useState } from 'react';

export default function Counter({ start, increse,  decrese}) {

    const [number, setNumber] = useState(start || 0);

    useEffect (()=>{
        setNumber(start);
    }, [start])

    return (
        <div className="counter">
            <h3>Counter</h3>
            <p>{number}</p>
            <div className='buttons'>
            <button onClick={()=>{
                setNumber(number-(decrese || 5));
            }}>Subtraction</button>

            <button onClick={()=>{
                setNumber(number + (increse || 5));
            }}>Addition</button>
            </div>        

        </div>
    )
}