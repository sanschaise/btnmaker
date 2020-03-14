import { motion, useAnimation } from "framer-motion"
import styled from 'styled-components';
// import Sketch from "../components/sketch";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

function YesButton(props) {
    console.log(isMobile ? 600 : 300);
    // alert(isMobile);
    const w = 100 * props.sizeMultiplier;
    const h = w / 2.5;
    const b = props.strokeWeight;
    const s = props.shadow ? 8 : 0;

    const topColor = `rgba(${props.topColor.r}, ${props.topColor.g}, ${props.topColor.b}, ${props.topColor.a})`;
    var shadowColor = `rgba(${props.topColor.r}, ${props.topColor.g}, ${props.topColor.b}, ${props.topColor.a / 2})`;
    shadowColor = `rgba(0,0,0,0.2)`;

    console.log(w);

    const click = {
        up: { x: -s * 1.5, y: -s * 1.5, boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`, },
        static: { x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}`, },
        down: { x: 0, y: 0, boxShadow: `0px 0px 0 ${shadowColor}`, }
    }





    const btnStyle = {
        width: `${w}px`,
        height: `${h}px`,
        // transform: 'scale(0.5)',
        // transformOrigin: 'left',
        textAlign: 'center',
        // owmargin: '10px',
        position: 'absolute',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: `${h / 8}px`,
        // boxShadow: `5px 5px ${shadowColor} `,
        border: `${b}px solid rgba(${props.borderColor.r}, ${props.borderColor.g}, ${props.borderColor.b}, ${props.borderColor.a})`,
        // borderStyle: 'dashed',
        // background: `${topColor}`,
        // backgroundImage: `linear-gradient(rgba(${props.topColor.color.r}, ${props.topColor.color.g}, ${props.topColor.color.b}, ${props.topColor.color.a}), rgba(${props.bottomColor.color.r}, ${props.bottomColor.color.g}, ${props.bottomColor.color.b}, ${props.bottomColor.color.a})`,
    }

    const textStyle = {
        fontSize: `${h / 2.5}pt`,
        fontFamily: `'${props.font}'`,
        // paintOrder: 'stroke fill',
        position: 'relative',
        top: '-5.5%',
        right: '-2%',
        color: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
        WebkitTextStrokeWidth: `${b}px`,
        WebkitTextStrokeColor: `rgba(${props.textOutlineColor.r}, ${props.textOutlineColor.g}, ${props.textOutlineColor.b}, ${props.textOutlineColor.a})`,

    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto',
        position: 'absolute',
        width: `${w + b * 2}px`,
        height: `${h + b * 2}px`,
        zIndex: '0',
    }

    const gridBlock = {
        // outline: ' 0.5px solid rgba(240,240,240,1)',
        borderTop: `${b}px solid rgba(0,0,0,0.2)`,
        borderRight: `${b}px solid rgba(0,0,0,0.2)`,
        // background: 'white',
    }

    const gridBlockLeft = {
        // outline: ' 0.5px solid rgba(240,240,240,1)',
        borderTop: `${b}px solid rgba(0,0,0,0.2)`,
        borderLeft: `${b}px solid rgba(0,0,0,0.2)`,
        borderRight: `${b}px solid rgba(0,0,0,0.2)`,
        marginLeft: '-1px',
        // background: 'white',
    }
    const gridBlockBottom = {
        // outline: ' 0.5px solid rgba(240,240,240,1)',
        borderTop: `${b}px solid rgba(0,0,0,0.2)`,
        borderRight: `${b}px solid rgba(0,0,0,0.2)`,
        borderBottom: `${b}px solid rgba(0,0,0,0.2)`,
        marginBottom: '-1px',

        // background: 'white',
    }

    const gridCircle = {
        border: `${b}px dashed rgba(50,50,50,1)`,

        borderRadius: `${h / 8}px`,

    }

    const containerStyle = {
        width: `${w}px`,
        height: `${h}px`,
        position: 'relative',
        borderRadius: `${h / 8}px`,
        cursor: 'pointer',
        x: -s, y: -s, boxShadow: `${s}px ${s}px 0 ${shadowColor}`,
        userSelect: 'none',
        margin: `${s * 3}px`,
        border: `${b}px solid rgba(0,0,0,0)`,
        // width: '100%',
        // height: '100%',
    }

    const supStyle = {
        // color: 'black',
    }

    const captureStyle = {
        // width: `${w * 2}px`,
        // height: `${h * 2}px`,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    }

    const controls = useAnimation();


    controls.start({
        x: [0, -s * 1.5, -s],
        y: [0, -s * 1.5, -s],
        boxShadow: [`0px 0px 0 ${shadowColor}`, `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`, `${s}px ${s}px 0 ${shadowColor}`],
        transition: {
            duration: 1,
            times: [0, 0.25, 0.5]
        }
    })

    return <div id="yes-button" style={captureStyle}>
        <motion.div
            id="yes-button"
            style={containerStyle}
            variants={click}
            initial="static"
            // animate={props.clicked ? { ck: [null, "up", "down", "static"] } : { ck: [null, "up", "down", "static"] }}
            animate={props.clicked ? controls : controls}
            animate={controls}
            whileHover="up"
            whileTap="down"
        >
            <div style={gridStyle}>
                <div style={gridCircle}></div>
                <div style={gridBlockLeft}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridCircle}></div>

                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>

                <div style={gridBlockBottom}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlockBottom}></div>

                <div style={gridCircle}></div>
                <div style={gridBlockLeft}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridBlock}></div>
                <div style={gridCircle}></div>
            </div>

            <motion.div
                style={btnStyle}
                animate={{ background: `${topColor}` }}
                transition={{ duration: 0.7 }}
            >
                <span style={textStyle}>yes<span style={supStyle}>®</span></span>

            </motion.div>
        </motion.div>
    </div >
}

export default YesButton