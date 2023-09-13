import React, { useState } from "react";

const HocCounter = (WrappedComponent) =>{
    function Hoc(){
        const [Counter, setCounter] = useState(0);
        const HandleClick =()=>{
            setCounter(Counter+1)
        }
        return(
            <div>
                <WrappedComponent counter={Counter} handleClick={HandleClick}/>
                
            </div>
        )
    }
    return Hoc
}
export default HocCounter;