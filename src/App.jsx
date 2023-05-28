
import React, { useEffect, useState } from "react";



const App=()=>{

const state = useState ();
let [count, setCount]= useState(1);
const IncNum=()=>{
    setCount(count++);
};
return(
    <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click ME</button>
    </>
);


}

export default App;