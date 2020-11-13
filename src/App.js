import React, { Component} from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import {getTokenFromUrl} from './spotify';
import Login from './Pages/Login/Login.component';
import Player from './Components/Player/Player.component';
import { setPlaylist, setToken, setUser } from './Redux/User/user-action';
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

    if(_token){
      this.props.addToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        this.props.addUser(user)
      })

      spotify.getUserPlaylists().then((playlist) => {
        this.props.addPlaylist(playlist)
      })

      spotify.getPlaylist("37i9dQZEVXcV2sEZLLOOtQ").then((discover) => {
        this.props.addDiscover(discover)
      })
    }
  }

  render(){
    return (
      <div className="App">
        { this.props.token ? 
          <Player spotify={spotify} /> : 
          <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.user.currentUser,
  token: state.user.token
})

const mapDispatchToProps = (dispatch) => ({
  addUser : (user) => dispatch(setUser(user)),
  addToken : (token) => dispatch(setToken(token)),
  addPlaylist: (playlist) => dispatch(setPlaylist(playlist)),
  addDiscover: (discover) => dispatch(setDiscoverWeekly(discover))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
