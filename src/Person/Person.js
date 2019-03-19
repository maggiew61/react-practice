import React from 'react'; //becuz we have jsx here
const person = (props) =>{
    return (
    <div>
        <p onClick={props.click}>im a {props.name} hola and im {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
}
export default person;