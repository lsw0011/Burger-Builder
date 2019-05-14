import React from 'react';

import classes from './Backdrop.css';

const Backdrop = (props) => {
    const style = {opacity: "0", zIndex: "-100"}
    return (
        <div className={classes.Backdrop}
            style={!props.display?style:null} 
            onClick={() => {props.toggle()}}/>
    )
};

export default Backdrop;