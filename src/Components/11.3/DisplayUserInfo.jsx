import React from 'react';


class DisplayUserInfo extends React.Component {


    goBack = () => {
        this.props.sendRequest(false);
    }

    addNewUser = () => {
        this.props.sendRequest(true)
    }

    render() {
        return (
            <>
                {
                    Object.values(this.props.userDetails).map(element => {
                        return <h4>{element}</h4>
                    })

                }
                <input type="button" value="Back" onClick={this.goBack}/>
                <input type="button" value="Add New User" onClick={this.addNewUser}/>
            </>
        )
    }
}


export default DisplayUserInfo;