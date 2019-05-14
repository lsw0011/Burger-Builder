import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenu = () => {
        const curState = this.state.menu;
        this.setState({menu: !curState});
    }

    render () {
        return (
            <Aux>
                
                <Toolbar toggle={this.toggleMenu}/>
                <SideDrawer display={this.state.menu} toggle={this.toggleMenu} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;