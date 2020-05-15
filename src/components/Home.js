import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


class Home extends Component {
    state = {
        songs: []
    }

    render() {
        const { songs } = this.props;
        const songsList = songs.map(song => {
            return (
                <div className='card center' key={song.id}>
                    <Link to={'./' + song.id} className='card-title'>{song.title}</Link>
                    <p>{song.body}</p>
                </div>
            )
        })
        return (
            <div className='container'>
                <h2 className='center'>Our necks:</h2>
                {songsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(Home);