import React from 'react'
import './Changing.css'

class ChangingBox extends React.Component {
    state = { background: 'green', borderRadius: '' };
    

    componentDidMount() {
        const colorsArr = ['blue', 'red', 'black', 'purple', 'green'];
        let index = 0;

        setInterval(() => {
            console.log(index);
            console.log(colorsArr[index]);
            if (index < 4) {

                this.setState({ background: colorsArr[index] , borderRadius: '' })
                index += 1;
            } else {
                this.setState({ background: colorsArr[index] , borderRadius: '50%' })
                index = 0;

            }


        }, 500);
    }


    render() {
        return (<>
            <div className="box-color" style={{ background: this.state.background , borderRadius: this.state.borderRadius }}></div>
        </>
        )
    }
}

export default ChangingBox;
