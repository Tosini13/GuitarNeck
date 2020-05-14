import React, { Component } from "react";
import Fret from './Fret'

class Create extends Component {

    chordas = ['E', 'A', 'D', 'g', 'h', 'e'];

    createNeck() {
        // let chordas = ['E', 'A', 'D', 'g', 'h', 'e'];
        let neck = {};
        for (let i = 1; i < 4; i++) { //first 3 frets
            // neck[i].id = i;
            neck[i] = {};
            for (let chorda of this.chordas) {
                neck[i][chorda] = null;
            }
        }
        return neck;
    }

    state = {
        title: '',
        neck: this.createNeck()
    }

    addDot = (fret, string) => {
        let neck = this.state.neck;
        let dot = neck[fret][string];
        if (isNaN(dot)) {
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

    render() {
        const neck = Object.keys(this.state.neck).map((key) => {
            return (
                <Fret fret={this.state.neck[key]} fretNo={key} addDot={this.addDot} />
            )
        });
        return (
            <div className='container'>
                <h2 className='center'>Create Neck:</h2>
                <input className='center' type='text' id='title' placeholder='Neck title'></input>
                <div className='neck'>
                    {neck}
                </div>
            </div>
        )
    }
}

export default Create;