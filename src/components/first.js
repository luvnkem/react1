import React from 'react'
import './first.css'


const para = {
    color: 'green',
    backgroundColor: 'blue'
}


function first() {
    return (
        <div>
            <h1 className= "haeding">Hello World</h1>
            <p id="footer">This is the footer</p>
            <p style ={para}>This is Loveth</p>
        </div>
    )
}
export default first