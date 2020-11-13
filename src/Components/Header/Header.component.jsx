import React, { Component } from 'react';
import './header.styles.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(){
        super()
    }
    render(){
        const {user} = this.props;
        return (
            <div className="header">
                <div className="header-left">
                    <SearchIcon />
                    <input placeholder="Search for Artists, Songs or Playlist " type="text"/>
                </div>

                <div className="header-right">
                    <Avatar src={user?.images[0]?.url} alt="profile-picture"/>
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user.currentUser
})

export default connect(mapStateToProps)(Header)
