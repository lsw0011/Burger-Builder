import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">orders</NavigationItem>
    </ul>
);

export default navigationItems;