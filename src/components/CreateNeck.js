import React, { Component } from "react";
import Fret from './Fret'
import { connect } from "react-redux";

class Neck extends Component {

    chordas = ['e', 'h', 'g', 'D', 'A', 'E'];


    createTitle() {
        if (this.props.song === undefined) {
            return '';
        } else {
            return this.props.song.title;
        }
    }

    createNeck() {
        if (this.props.song === undefined) {
            let neck = [];
            for (let i = 1; i < 4; i++) { //first 3 frets
                neck[i] = {};
                for (let chorda of this.chordas) {
                    neck[i][chorda] = null;
                }
            }
            // let song = {
            //     title: '',
            //     neck: neck
            // }
            // return song;
            return neck;
        } else {
            return this.props.song.neck;
        }
    }

    state = {
        title: this.createTitle(),
        neck: this.createNeck()
    }

    addDot = (fret, string) => {
        let neck = this.state.neck;
        let dot = neck[fret][string];
        if (dot === null) {
            dot = 0;
        } else {
            dot++;
        }
        neck[fret][string] = dot;

        if (parseInt(fret) === Object.keys(this.state.neck).length) {
            let newFret = parseInt(fret) + 1;
            neck[newFret] = {};
            for (let chorda of this.chordas) {
                neck[newFret][chorda] = null;
            }
        }
        this.setState({
            neck
        });
    }

    deleteDot = (fret, string) => {
        let neck = this.state.neck;
        neck[fret][string] = null;

        this.setState({
            neck
        });
    }

    componentDidUpdate(){
        console.log('updated');
    }

    componentWillUnmount(){
        console.log('will unmounte');
    }

    render() {
        const neck = Object.keys(this.state.neck).map((key) => {
            return (
                <Fret fret={this.state.neck[key]} fretNo={key} key={key} addDot={this.addDot} deleteDot={this.deleteDot} />
            )
        });
        return (
            <div className='container'>
                <h2 className='center'>Create Neck:</h2>
                <input className='center' type='text' id='title' placeholder='Neck title' onChange={(e) => { this.setState({ title: e.target.value }); }} value={this.state.title}></input>
                <div className='neck'>
                    {neck}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.neck_id;
    return {
        song: state.songs.find(song => parseInt(song.id) === parseInt(id))
    }
}

export default connect(mapStatetoProps)(Neck);