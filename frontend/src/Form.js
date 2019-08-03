import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            first: '',
            last: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { first, last } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>first name</label>
                <input 
                    type="text" 
                    name="first" 
                    value={first} 
                    onChange={this.handleChange} />
                <label>last name</label>
                <input 
                    type="text" 
                    name="last" 
                    value={last} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;