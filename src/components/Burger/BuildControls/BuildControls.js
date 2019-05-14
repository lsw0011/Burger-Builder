import React from 'react';

import Aux from '../../../hoc/Aux';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const buildControls = []
    for (var key in props.ingredients) {
        buildControls.push(<BuildControl key={key} 
            ingredient={key} 
            increase={props.increase}
            decrease={props.decrease} />)
    }
    return (
        <Aux>
            {buildControls}
            <button onClick={() => {props.toggle()}}>Order Now</button>
        </Aux>)
}

export default buildControls