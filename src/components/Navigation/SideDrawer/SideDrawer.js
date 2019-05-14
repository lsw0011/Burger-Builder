import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    const style = {display: 'flex', justifyContent: 'center', height: '11%'}
    return (
        <div className={[classes.SideDrawer, props.display?classes.Open:classes.Closed].join(' ')}>
            <div onClick={() => {props.toggle()}}>Menu</div>
            <Logo style={style}/>
            <nav>
                <NavigationItems />                
            </nav>
        </div>
    )
}

export default sideDrawer;