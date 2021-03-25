import React from 'react';
import './App.css';
import { Spinner } from './Components/9.1/Spinner';
import { BrowserRouter, Route } from 'react-router-dom';
import { Homepage } from './Components/16.1/Homepage';
import { Products } from './Components/16.1/Products';
import { Header } from './Components/16.1/Header';
import { ProductDetail } from './Components/16.1/ProductDetail';



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
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div >
    }

  }

}


export default App;
