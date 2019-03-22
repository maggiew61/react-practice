import React from 'react'; //becuz we have jsx here
import './Person.css';
const person = (props) =>{
    return (
    <div className="Person">
        <p onClick={props.click}>im a {props.name} hola and im {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/> 
    </div>
    )
}
export default person;