import React from 'react';
import ReactDOM from 'react-dom'

const TITLE = 'AppleSeeds React App';

class MyTitle extends React.Component {
    componentDidMount(){
        document.title = TITLE;
      }
    
      render(){
        return(
          null
        )
      }
}

export default MyTitle;