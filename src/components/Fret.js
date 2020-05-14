import React, { Component } from "react";

class Fret extends Component {
    state = {
        fret: this.props.fret
    }

    render() {
        // console.log(this.props);
        const neck = Object.keys(this.state.fret).map((key) => {
            let classlist = 'dot ';
            if (!isNaN(parseInt(this.state.fret[key]))) {
                classlist += 'dotSet';
            }
            return (
                <div className='string' onClick={() => { this.props.addDot(this.props.fretNo, key); }}>
                    <div className={classlist}>{this.state.fret[key]}</div>
                </div>
            )
        });
        return (
            <div className='fret'>
                {neck}
            </div>
        )
    }
}

export default Fret;