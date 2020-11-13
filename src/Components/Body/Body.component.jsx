import React, {Component} from 'react'
import './body.styles.css'
import Header from '../Header/Header.component'
import { connect } from 'react-redux'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from "../SongRow/SongRow.component";

class Body extends Component {
    render(){
        const {discover, spotify} = this.props;
        return (
            <div className="body">
                <Header spotify={spotify} />

                <div className="body-info">
                    <img src={discover?.images[0].url} alt=""/>
                    <div className="body-infoText">
                        <strong>PLAYLIST</strong>
                        <h2>Discover Weekly</h2>
                        <p>{discover?.description}</p>
                    </div>
                </div>

                <body className="body-songs">
                    <body className="body-icons">
                        <PlayCircleFilled className="body-shuffle" />
                        <Favorite fontSize="large" />
                        <MoreHoriz />
                    </body>

                    {
                        discover?.tracks.items.map(item => (
                            <SongRow track= {item.track}/>
                        ))}
                </body>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    discover: state.user.discoverWeekly
})

export default connect(mapStateToProps)(Body)
