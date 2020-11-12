import React, { Component } from 'react';
import SidebarOption from '../SidebarOption/SidebarOption.component';
import './sidebar.styles.css';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { connect } from 'react-redux';

class Sidebar extends Component{
    constructor(){
        super()
    }
    render(){

        const {playlists} = this.props;
        return (
            <div className="sidebar">
                <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
                <SidebarOption title="Home" Icon={HomeIcon}/>
                <SidebarOption title="Search" Icon={SearchIcon} />
                <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
                <br/>
                <strong className="sidebar-title">PLAYLISTS</strong>
                <hr/>
                { playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name}  />
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    playlists: state.user.playlists
})

export default connect(mapStateToProps)(Sidebar)
