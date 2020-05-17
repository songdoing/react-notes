import React, {Component} from 'react';
import ScrollBox from './ScrollBox';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref = {(ref) => this.ScrollBox = ref}></ScrollBox>
        <button onClick = { () => this.ScrollBox.scrollToBottom()}>To Bottom</button>
        <button onClick = { () => this.ScrollBox.scrollToTop()}>To Top</button>
      </div>    
    );
  }
}

export default App;
