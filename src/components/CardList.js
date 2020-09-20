import React, { Component } from 'react';
import Card from "./Card"
import items from "../data";

export default class CardList extends Component {
    render() {
        return (
            <div className="gap-grid">
                {items.map(item => {
                    return <Card key={item._id} item={item} />
                })}
            </div>
            )
    }
}
