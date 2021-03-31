import React from 'react';
import './App.css';
import { Spinner } from './Components/9.1/Spinner';
import CancelRequest from './Components/20.1/CancelRequest';
import Editing from './Components/21.1/Editing';
import PlayVideo from './Components/21.2/PlayVideo';

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
        {/* <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter> */}
        {/* <HideText text={text} maxLength={50}/> */}
        {/* <SimpleTodo/> */}
        {/* <WhatsTheTime/> */}
        {/* <MarkTheBox/> */}
        {/* <SimpleFetch /> */}
        {/* <Countries/> */}
        {/* <AlogoliaAPI/> */}
        {/* <ChukNorris/>
        <hr></hr>
        <ChukNorrisRefactor/> */}
        {/* <CancelRequest/> */}
        {/* <Editing/> */}
        <PlayVideo/>
      </div >
    }

  }

}


export default App;


const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"