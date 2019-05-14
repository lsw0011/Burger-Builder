import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';


class Orders extends Component {

    state = {
        orders: []
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res=> {
                const fetchedOrders = []
                for(var key in res.data) {
                    fetchedOrders.push({id: key,ingredients: res.data[key]});
                }
                this.setState({orders: fetchedOrders})
            })
    }

    render () {
        const orders = this.state.orders.map(order => {
            return <Order key={order.id} id={order.id} ingredients={order.ingredients}/>
        })
        return (
        <div>
            {orders}
        </div>
        )
    }
}

export default withErrorHandler(Orders, axios); 