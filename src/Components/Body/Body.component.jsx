import React, {Component} from 'react'
import './body.styles.css'
import Header from '../Header/Header.component'
import { connect } from 'react-redux'

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
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    discover: state.user.discoverWeekly
})

export default connect(mapStateToProps)(Body)
