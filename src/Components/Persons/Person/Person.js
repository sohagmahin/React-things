import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClasses';
import PropTypes from 'prop-types'
import AuthContext from '../../../Context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount() {
        this.inputElement.current.focus();
        console.log(this.context.Authenticate);
    }

    render() {
        console.log('[person.js] rendering...');
        return (
            // <div className={classes.Person}>
            <Aux>
                {this.context.Authenticate ? <p>Authenticated</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>
                    This is {this.props.name}. And age is {this.props.age}
                </p>
                <p>{this.props.children}</p>

                <input ref={this.inputElement} type='text' onChange={this.props.clickChange} value={this.props.name}></input>
            </Aux>
        );
    }
}

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func,
}

export default withClasses(Person, classes.Person);