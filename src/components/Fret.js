import React, { Component } from "react";

class Fret extends Component {
    state = {
        fret: this.props.fret
    }

    render() {
        const neck = Object.keys(this.state.fret).map((key) => {
            var down;
            let classlist = 'dot ';
            if (!isNaN(parseInt(this.state.fret[key]))) {
                classlist += 'dotSet';
            }
            return (
                <div className='string' key={key} onMouseDown={(e) => {
                    down = setTimeout(() => {
                        console.log('delete');
                        this.props.deleteDot(this.props.fretNo, key);
                    }, 500);
                }} onMouseUp={(e) => {
                    if (!isNaN(down)) {
                        this.props.addDot(this.props.fretNo, key);
                    }
                    clearTimeout(down);
                }}>
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