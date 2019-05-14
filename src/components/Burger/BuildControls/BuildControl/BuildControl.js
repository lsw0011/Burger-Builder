import React from 'react';

import Aux from '../../../../hoc/Aux';

const buildControl = (props) => {
    return (
        <div>
            <button style={{display:"inline"}} onClick={() => props.decrease(props.ingredient)}>less</button>
            <p style={{display:"inline"}}> {props.ingredient} </p>
            <button style={{display:"inline"}} onClick={() => props.increase(props.ingredient)}>more</button>
        </div>
    )
}

export default buildControl;