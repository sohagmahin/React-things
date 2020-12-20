import React, { Component } from 'react';
import Radium,{ StyleRoot }from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asfs1', name: "sohag", age: 23 },
      { id: 'sgfsd2', name: "jahan", age: 29 },
      { id: 'fgsf3', name: "shamim", age: 33 },
    ],
    showPerson: false,
  };

  deletePerson = (personIndex) => {
    // const persons = this.state.persons; //copy reference of pointer
    // const persons = this.state.persons.slice(); //make new reference then copy
    const persons = [...this.state.persons];//copy data from persons then copy to...
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  onChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log(persons[personIndex].name);
    this.setState({ persons: persons });
  }

  onPersonToggle = () => {
    this.setState({ showPerson: !this.state.showPerson });
    console.log(this.state.showPerson);
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

      //Shudo selector
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'white'
      }
    }

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              clickChange={(event) => this.onChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor: 'salmon',
        color:'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <button style={style}
          onClick={this.onPersonToggle}>Toogle Person</button>
        <p className={classes.join(' ')}>This is persons</p>
        {person}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);