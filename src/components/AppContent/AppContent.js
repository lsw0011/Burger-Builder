import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../../containers/Checkout/Checkout';
import Orders from '../../containers/Orders/Orders';

class AppContent extends Component {

    render () {
        return (
            <BrowserRouter>
                <div>
                    <Layout />
                    <Switch>
                        <Route exact path="/" component={BurgerBuilder} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppContent;
