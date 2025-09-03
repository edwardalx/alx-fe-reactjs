import { useEffect, useState } from "react";

export function Counter(){
  const [count, setCount] = useState(0)

  return(
    <>
    <p>The count is : {count}</p>
    <button onClick={()=>{setCount(count + 1)}}>Increase Button</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease Button</button>
    <button onClick={()=>{setCount(0)}}>Reset Button</button>
    </>
  )
}


