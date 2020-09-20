import React, { Component, useContext } from 'react';
import {CartContext} from "../Context";

const value = useContext(CartContext);

export default class Error extends Component {
    render() {
        return (
            <div>
                <p>{value}</p>
            </div>
        )
    }
}
