import React, { Component } from 'react'

interface IProps {
    people:{
        name:string
        age:number
        // url?:string
        // note?:string
    }[],
    // people1:{
    //     name:string
    //     age:number
     // }[]
  }

//const List = (props:IProps) => {
    const List : React.FC<IProps> = ({people}) => {
        const renderList = () : JSX.Element[] =>{
            //if we dont define return type then it will take void by default
            return people.map(person=>{
                return(
                    <ul>
                        <li>{person.name}</li> 
                        <li>{person.age}</li> 
                    </ul>
                )
            })
        }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List
