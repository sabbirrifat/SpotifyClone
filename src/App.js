import React, { Component} from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import {getTokenFromUrl} from './spotify';
import Login from './Pages/Login/Login.component';
import Player from './Components/Player/Player.component';
import { setToken, setUser } from './Redux/User/user-action';
import { connect } from 'react-redux';

const spotify = new SpotifyWebApi();

class App extends Component {

  constructor(){
    super();
    this.state = {
      token: ''
    }
  }

  componentDidMount(){
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    this.props.addToken(_token);

    if(_token){
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        this.props.addUser(user)
      })
    }
  }

  render(){
    return (
      <div className="App">
        { this.props.user ? 
          <Player/> : 
          <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  addUser : (user) => dispatch(setUser(user)),
  addToken : (token) => dispatch(setToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
