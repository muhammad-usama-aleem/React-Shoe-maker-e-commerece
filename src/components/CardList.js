import React, { Component } from 'react';
import Card from "./Card";
import {CartContext} from "../context";
// import items from "../data";

export default class CardList extends Component {
    static contextType = CartContext;
    render() {
        const {data} = this.context;

        return (
            <div className="gap-grid">
                {data.map(item => {
                    return <Card key={item._id} item={item} />
                })}
            </div>
            )
    }
}
