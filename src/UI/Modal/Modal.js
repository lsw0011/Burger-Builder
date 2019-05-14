import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import classes from './Modal.css';


const modal = (props) => {
    let modalClassList = [classes.Modal];
    if(!props.display){
        modalClassList.push(classes.Hide)    
    }else{
        modalClassList.push(classes.Show)
    }
    if(props.changed) {
        modalClassList.push(classes.Load)
    }

    return (
        <Aux>
            <Backdrop display={props.display} toggle={props.toggle}/>
            <div className={modalClassList.join(' ')} >
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;