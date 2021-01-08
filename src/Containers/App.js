import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WitClasses from '../hoc/WithClasses';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor...');
  }


  state = {
    persons: [
      { id: 'asfs1', name: "sohag", age: 23 },
      { id: 'sgfsd2', name: "jahan", age: 29 },
      { id: 'fgsf3', name: "shamim", age: 33 },
    ],
    showPerson: false,
    showCockpit: true,
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
  componentDidMount() {
    console.log('[App.js] componentDidMount...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate...');
  
    return true;
  }


  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate....');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDrivedStateFromProps....', props);
    return state;
  }

  render() {

    console.log('[App.js] rendering...');

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            clickedChanges={this.onChangeHandler}
          />
        </div>
      );
    }



    return (
      <WitClasses classes={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Show Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          isShowPerson={this.state.showPerson}
          togglePerson={this.onPersonToggle}
        /> : null
        }
        {person}
      </WitClasses>

    );
  }
}
export default App;