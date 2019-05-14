import React from 'react';

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {
    const style = {height: '80%'};
    return (
        <header className={classes.Toolbar}>
            <div onClick={() => props.toggle()}>menu</div>
            <Logo style={style}/>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;
