import YesButton from "../components/yesbutton.js";
import ColorPicker from "../components/colorpicker.js";
import FontPicker from "../components/fontPicker";
import cycleStates from "../components/cycleStates.js"
import Control from "../components/control.js"
import React, { useState, useEffect } from 'react';
import htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { saveAs } from 'file-saver';
// import domtoimage from 'dom-to-image';
import { Icon } from 'antd';
import innerHeight from 'ios-inner-height';


import { motion } from "framer-motion"
var i = 1;

function HomePage() {

    //states
    const [font, setFont] = useState("NowTextBold");
    const [strokeWeight, setStrokeWeight] = useState(1);
    const [sizeMultiplier, setSizeMultiplier] = useState(3);
    const [shadow, setShadow] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [isLockup, setLockup] = useState(false);
    const [topColor, setTopColor] = useState({ r: '255', g: '255', b: '255', a: '0.3', });
    const [bottomColor, setBottomColor] = useState({ r: '255', g: '255', b: '255', a: '0.3', });
    const [color, setColor] = useState({ r: '255', g: '255', b: '255', a: '1', });
    const [textOutlineColor, setTextOutlineColor] = useState({ r: '0', g: '0', b: '0', a: '1', });
    const [borderColor, setBorderColor] = useState({ r: '0', g: '0', b: '0', a: '1', });


    function setBothColors(json) {
        setTopColor(json);
        setBottomColor(json);
    }



    function playSequence() {
        if (i < cycleStates.length) {
            setTopColor(cycleStates[i].topColor);
            setBottomColor(cycleStates[i].bottomColor);
            setColor(cycleStates[i].color);

        } else {
            setRandomColor()
        }
        i = i + 1;
        if (i > 10) {
            i = 0;
        }

    }

    function resetColor() {
        setBothColors({
            r: 255, g: 255, b: 255, a: 0.3,
        })
        setColor({
            r: 255, g: 255, b: 255, a: 1,
        })

    }

    function setRandomColor() {
        setBothColors({
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255),
            a: '1',
        })
    }

    function useSave() {

        htmlToImage.toBlob(document.getElementById('stamp'), {})
            .then(function (blob) {
                download(blob, 'yes®.png');
            });

    }



    const variants = {
        hover: {
            scale: 1.05
        },
        tap: {
            scale: 0.95
        }
    }

    return <div>

        <div style={{ height: `${innerHeight}px` }} className="main">
            <div className="canvas">
                {isLockup ? (
                    <div id="stamp"
                        className="stampLockup"
                        style={{
                            borderWidth: `${strokeWeight}px`,
                            width: `${100 * sizeMultiplier + 35}px`,
                            borderRadius: `${(100 * sizeMultiplier + 35) / 2.5 / 8}px`,
                            fontSize: `${sizeMultiplier * 5}pt`,
                            padding: `20px 12px 0px 10px`,
                        }}>
                        <div className="stamp-title">The Open Banking Ecosystem</div>
                        <YesButton shadow={shadow} sizeMultiplier={sizeMultiplier} strokeWeight={strokeWeight} clicked={clicked} font={font} topColor={topColor} textOutlineColor={textOutlineColor} bottomColor={bottomColor} color={color} borderColor={borderColor} />
                    </div>
                ) : (
                        < div id="stamp" className="stampButton">
                            <YesButton shadow={shadow} sizeMultiplier={sizeMultiplier} strokeWeight={strokeWeight} clicked={clicked} font={font} topColor={topColor} textOutlineColor={textOutlineColor} bottomColor={bottomColor} color={color} borderColor={borderColor} />
                        </div>
                    )}
            </div>
            <motion.div className="control">


                <Control disabled>
                    <ColorPicker className="colorPicker" color={topColor} setColor={setBothColors} />
                    Background
                </Control>
                <Control disabled>
                    <ColorPicker className="colorPicker" color={color} setColor={setColor} />
                    Typography
                </Control>
                <Control onClick={() => playSequence()} icon="forward">Cycle</Control>
                <Control onClick={() => resetColor()} icon="rollback">Reset</Control>
                <Control onClick={() => setStrokeWeight((strokeWeight + 1) % 3 + 1)} icon="edit">Stroke Weight</Control>
                <Control onClick={() => setSizeMultiplier((sizeMultiplier + 1) % 10 + 1)} icon="fullscreen">Size</Control>
                <Control onClick={() => setShadow(!shadow)} icon="border-top">Shadow</Control>
                <Control onClick={() => setLockup(!isLockup)} icon="border-outer">Lockup</Control>
                <Control onClick={() => useSave()} icon="download">Download PNG</Control>

            </motion.div>
        </div>
    </div >
}

export default HomePage