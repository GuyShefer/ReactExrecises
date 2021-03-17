import React from 'react';
import './FormReview.css';

export class FormReview extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstName: '', lastName: '', checked: false, age: '0-15', freeText: '' };
    }


    handleFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }

    handleLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    handleMarriedCheckBox = (e) => {
        this.setState({ checked: e.target.checked });
    }

    handleFreeTextChange = (e) => {
        this.setState({ freeText: e.target.value });
    }

    handleAgeChange = (e) => {
        this.setState({ age: e.target.value });
    }

    handleContinue = (e) => {
        e.preventDefault();
        this.props.getFormDetails(this.state);
    }

    render() {
        // console.log(this.props.userDetails);
        return (
            <>
                <form className="form" onSubmit={this.handleContinue}>
                    <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstName} />
                    <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastName} />
                    <label>is married :  <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleMarriedCheckBox} /></label>

                    <label>age :
                    <select value={this.state.age} onChange={this.handleAgeChange}>
                            <option>0-15</option>
                            <option>15-30</option>
                            <option>30-45</option>
                            <option>45-60</option>
                            <option>60-75</option>
                        </select>
                    </label>

                    <textarea value={this.state.freeText} onChange={this.handleFreeTextChange}></textarea>

                    <input type={'submit'} value={'continue'} />
                </form>

            </>
        )
    }
}