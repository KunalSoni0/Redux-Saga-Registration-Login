import React, {useState} from 'react'

interface Props {
    title:string
    color?:string
}


function Header(props : Props) {
    
    return (
        <div>
            <header>
            <h1 style={{color: props.color? props.color
            :"red"}}>{props.title}</h1>
        </header>
        </div>
    )
}

export default Header
