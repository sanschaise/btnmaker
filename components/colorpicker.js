
'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.color);
        this.state = {
            displayColorPicker: false,
            color: {
                r: props.color.r,
                g: props.color.g,
                b: props.color.b,
                a: props.color.a,
            },
        };
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color: {
    //             r: props.color.r,
    //             g: props.color.g,
    //             b: props.color.b,
    //             a: props.color.a,
    //         },
    //     };
    // }

    componentDidMount() {
        console.log(this.state);

    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        // console.log(...color.rgb);
        this.setState({ color: color.rgb })
        this.props.setColor({ ...color.rgb })
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '16px',
                    height: '16px',
                    borderRadius: '100vw',
                    boxShadow: `2.5px 2.5px rgba(0,0,0,0.25)`,
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                swatch: {
                    padding: '0px',
                    background: '#fff',
                    borderRadius: '100vw',
                    border: 'black 1px solid',
                    // boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                    bottom: '15px',
                    left: '15px',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
                parent: {
                    display: 'inline',
                    position: 'relative',
                    top: '3px',
                    marginRight: '15px',
                }
            },
        });

        return (
            <div style={styles.parent}>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <ChromePicker color={this.state.color} onChange={this.handleChange} />
                </div> : null}

            </div>
        )
    }
}

export default ColorPicker