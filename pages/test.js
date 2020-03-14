
import React, { useState, useEffect } from 'react';


import { motion, useAnimation } from "framer-motion"


function TestPage() {

    const [bgColor, setBgColor] = useState('red');

    const testStyle = {
        background: 'blue',
        width: '100px',
        height: '100px',
        borderRadius: '15px',
    }

    const variant = {
        click: {
            background: bgColor,
            scale: [1.1, 0.9, 1]
        }
    }

    const changeBg = function (color) {
        console.log(color)
        setBgColor(color)
    }

    const controls = useAnimation();

    controls.start({
        background: bgColor,
        scale: [1.1, 0.9, 1]
    })

    return <div>

        < motion.div onClick={() => changeBg(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)} initial={testStyle} variants={variant} animate={controls} />

    </div >
}

export default TestPage