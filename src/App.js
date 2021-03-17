import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Spinner } from './Components/9.1/Spinner';
import { BoxAnimation } from './Components/8.2/BoxAnimation';
import FuncHideNSeek from './Components/7.2/FuncHideNSeek.component';
import ChangingBox from './Components/8.3/ChangingBox';
import { Parent } from './Components/11.1/Parent';
import { CheckBoxes } from './Components/11.2/CheckBoxes';
import { FormReview } from './Components/11.3/FormReview';
import { FormComponent } from './Components/11.3/FormComponent';

class App extends React.Component {
  state = { showSpinner: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSpinner: false,
      });
    }, 500);
  }

  render() {
    if (this.state.showSpinner) {
      return <div><Spinner /></div>;
    } else {
      return <div>
        {/* <ChangingBox/> */}
        {/* <Parent/> */}
        {/* <CheckBoxes/> */}
        <FormComponent/>
      </div >
    }

  }

}


export default App;
