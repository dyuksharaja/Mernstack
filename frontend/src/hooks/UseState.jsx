import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [value,setValue]=useState("");
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }
    

return (
    <>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setValue(e.target.value)}placeholder='enter the value'/>
       {/*</div><h1>{count}</h1>
        <button onClick={handleDecrement}>Decreament</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>*/}

    </>

)
}

export default UseState