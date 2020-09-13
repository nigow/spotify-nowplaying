import React from 'react';
import './App.css';
import HeaderComponent from "./components/headerComponent/headerComponent";
import MusicView from './components/musicView/musicView'
import {openWindow} from "./helper/WindowHelper";
import {updateSong, noMusicFound} from "./helper/ReloadHelper";
import {authorizationHelper, CurrentState, unauthorizedMessage} from "./helper/AuthorizationHelper";

class App extends React.Component{
    state = {"test": true};

    reload = () => {
        updateSong(localStorage.getItem("accessToken"));
        this.setState({state: this.state});
    };

    mounting = async () => {
        let status = await openWindow(localStorage.getItem("accessToken"));
        switch(status){
            case CurrentState.AUTHORIZED:
                this.reload();
                break;
            case CurrentState.NOMUSIC:
                noMusicFound();
                break;
            case CurrentState.LOGIN:
                authorizationHelper();
                break;
            case CurrentState.UNAUTHORIZED:
                unauthorizedMessage();
                break;
            default:
                break;
        }
        this.setState({state: this.state});
    };

    componentDidMount() {
        this.mounting();
    };



    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.mounting();
    // }
    //TODO: ^makes an infinite update


    render() {
      return (
          <div className="App">
              <HeaderComponent reload={this.reload}/>
              <MusicView />
          </div>
      )
    };
}

export default App;
