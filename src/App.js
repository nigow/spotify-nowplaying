import React from 'react';
import './App.css';
import HeaderComponent from "./components/headerComponent/headerComponent";
import MusicView from './components/musicView/musicView'


class App extends React.Component{
  state = {
    authorized: false
  }


  render() {
      return (
          <div className="App">
              <HeaderComponent authorized={this.state.authorized} onchange={() => {this.setState({state: this.state})}}/>
              <MusicView />
          </div>
      )
  }
}

export default App;
