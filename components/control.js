import { motion } from "framer-motion"
import { Icon } from 'antd';
const variants = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.95
    }
}

function Control(props) {
    return <motion.div
        variants={props.disabled ? null : (variants)}
        whileHover="hover"
        whileTap="tap"
        className="controlStrip"
        {...props}
    >
        <Icon type={props.icon} />
        {props.children}
    </motion.div>
}

export default Control