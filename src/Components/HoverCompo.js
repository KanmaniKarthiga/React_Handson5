import React, { useState } from 'react'
import HocCounter from './HocCompo'

const HoverCompo = (props) =>{
    
    return(
        <>
            <h1>HIGHER ORDER COMPONENT</h1>
            <p>A higher-order component is a function that takes in a component and returns a new component.Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>
            <p>This Hover counter application is done using Higher Order Component</p>
            <div className='counterapp'>
                HoverCounter : {props.counter}
                <button onMouseOver={props.handleClick}>Hover</button>
            </div>
        </>
    )
}
export default HocCounter(HoverCompo);