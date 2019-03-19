import React, { Component } from 'react';
import './App.css';
//the good convention is to use component name, so Person
import Person from './Person/Person'
class App extends Component {
  state = {
    persons:[
      {name:'maggie',age:'18'},
      {name:'maggie2',age:'181'},
      {name:'maggie3',age:'1811'},
    ]
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
  render() {
    return (
      /*this is jsx; get complied to line #14
      can't use class, becuz it is js, class is a reserved word in js;
      <h1><div>looks like html, but actually managed by react library*/
      <div className="App"> 
        <h1> hi, Im a react app:)</h1>
        <p>this is working</p>
        <button onClick={()=> this.switchNameHandler('tom')}>switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'tom!')}>my hobby is playin w/ cats</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',null,'h1','hii, Im a react app:)') //wont' work
    /*the following is equivalent to the above <div><h1></h1></div>code*/
    // return React.createElement('div', {className:"App"},React.createElement('h1',null,'does this work now'))
  }
}

export default App;
