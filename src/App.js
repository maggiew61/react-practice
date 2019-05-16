import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'
import { isNullOrUndefined } from 'util';
class App extends Component {
  state = {
    persons:[
      {name:'maggie',age:'18'},
      {name:'maggie2',age:'181'},
      {name:'maggie3',age:'1811'},
    ],
    show:false
  }
  switchNameHandler = newName =>{
    this.setState({
      persons:[
        {name:newName,age:'18'},
        {name:'pete2',age:'181'},
        {name:'maggie3',age:'0'},
      ]
    })
  }

  nameChnagedHandler = (event) =>{ 
    this.setState({
      persons:[
        {name:'Max',age:18},
        {name:event.target.value,age:181},
        {name:'Stephanie',age:0},
      ]
    })
  }
  toggle = () =>{
    let foo = this.state.show
    this.setState({
      show: !foo
    })
  }
  render() {
    let person = null
    if(this.state.show){
      person = (
        <div>
          <h1>title</h1>
          <div>first</div>
          <div>second</div>
          <div>third</div>
          <div>last</div>
        </div>
      )
    }
    return (
      <div className={classes.App}> 
          <button onClick={this.toggle}>toggle</button>
          {person}
        <h1> hi, Im a react app:)</h1>
        <p>this is working</p>
      <button 
        onClick={()=> this.switchNameHandler('tom')}>switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'tom!')}
          changed={this.nameChnagedHandler}>my hobby is playin w/ cats</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div',null,'h1','hii, Im a react app:)') //wont' work
    /*the following is equivalent to the above <div><h1></h1></div>code*/
    // return React.createElement('div', {className:"App"},React.createElement('h1',null,'does this work now'))
  }
}

export default App;
