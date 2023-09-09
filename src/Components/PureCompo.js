import React, { useState } from 'react'

const PureCompo = () =>{
    const [name] = useState('Kanmani Karthiga')
    const [designation] = useState('Front-end Developer')
    const [email] = useState('karthiga.selva98@gmail.com')
    console.log(name)
    return(
        <>
        <h1>PURE COMPONENT</h1>
            <div id='pure'>
                Similar to Pure Functions in JavaScript, a React component is considered a Pure Component if it renders the same output for the same state and props.<br/>
                React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance.<br/>
                Pure Components ensures the higher performance of the Component and ultimately makes your application faster, While in the case of Regular Component, it will always re-render either value of State and Props changes or not.
            </div>
            <div id='pureOutput'>
                <div className='para'>The below data is rendered using the pure component function.</div><br/> 
                Name : {name} <br/> 
                Designation : {designation} <br/> 
                Email : {email}
            </div>
        </>
    )
}
export default PureCompo;