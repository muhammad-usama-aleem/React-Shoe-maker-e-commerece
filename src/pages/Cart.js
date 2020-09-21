import React, { Component } from 'react';
import Card from "../components/Card";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import Title from "../components/Title";
import {Link} from 'react-router-dom';
import {CartContext} from "../context";

export default class Cart extends Component {
    static contextType = CartContext;
    render() {
        const {cart} = this.context;
        
        return (
            <>
                <Hero hero="seprateHero"> 
                    <Banner title="Shopping Cart">
                        <Link to="/collection" className="btn-primary">
                            Explore
                        </Link>
                    </Banner>
                </Hero>
                <Title title="Shopping Cart" />
                <div className="gap-grid">
                    {cart.map(item => {
                        return <Card key={item._id} item={item} />
                    })}
                </div>
            </>
        )
    }
}
