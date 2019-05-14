import React, { Component } from 'react';
import Input from '../../../UI/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        }
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.props.continue()
    }

    assignValue = (event, key) => {
        console.log(key)
        const existingData = Object.assign({},this.state.orderForm)
        console.log(existingData[key])
        existingData[key].value = event.target.value
        this.setState({
            orderForm: existingData
        })
    }

    complete = (event) => {
        event.preventDefault()
        const userData = {};
        Object.keys(this.state.orderForm).map(key => {
            userData[key] = this.state.orderForm[key].value; 
        })
        this.props.complete(this.state.ingredients, userData)
    }


    render() {
        const formElementsArray = []; 
        for (let key in this.state.orderForm){  
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        const form = formElementsArray.map((formElement,index) => (
            <Input key={index}
                   name={formElement.id}
                   elementType={formElement.config.elementType}
                   elementConfig={formElement.config.elementConfig}
                   onChange={this.assignValue}/> 

        ))
        return (
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    {form}
                    <button onClick={(event) => this.complete(event)}>Order Here</button>
                </form>
            </div>
            )
    }

}

export default ContactData; 