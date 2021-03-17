import React from 'react';
import { FormReview } from './FormReview';
import DisplayUserInfo from './DisplayUserInfo'

const serverUsers = [];

export class FormComponent extends React.Component {
    state = {};

    displayFormDetails = async (userDetails) => {
        await this.setState(userDetails);
        console.log(this.state);
    }

    handleAddRequest = async (addUser) => {
        if(addUser) {
            serverUsers.push(this.state);
            await this.setState(this.initState);
        } else {
            await this.setState(this.state);
        }
        
    }

    componentDidMount(){
        this.initState = this.state;
    }

    render() {
        console.log(this.state);
        return (
            <>
            {Object.values(this.state).length < 1 
            ? <FormReview getFormDetails={this.displayFormDetails} userDetails={this.state} />
            : <DisplayUserInfo sendRequest={this.handleAddRequest} userDetails={this.state}/>
             
            }
            {/* have to create function that check if the state is clear,
             if it is so run the CHILD(1) componenet
            else run the second Child and send him the state info*/}
            {/* in the 2nd child i have to display the information and set 2 btns:
            1. Add User, 2. back
            in the 2 options above i have to call a function that return me back to here so,
            if its back > render child 2, else set the userInfo in the useres arr and clear the start and run the 1st child */}
                
            </>
        )
    }
}