import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement;
    switch (props.elementType) {
        case ('input'): 
            inputElement = <input className={classes.InputElement} {...props.elementConfig} onChange={(event) => props.onChange(event, props.name)} />
            break;
        case ('textarea'): 
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} />
            break;
        case ('select'):
            inputElement= (
                <select className={classes.InputElement} onChange={(event) => props.onChange(event, props.name)}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option> 
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} />;

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;