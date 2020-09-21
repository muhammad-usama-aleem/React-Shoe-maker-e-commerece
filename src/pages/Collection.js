import React, { Component } from 'react';
import CardList from "../components/CardList";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import Title from "../components/Title";
import {Link} from "react-router-dom"

export default class Collection extends Component {
    render() {
        return (
            <div>
                <Hero hero="seprateHero"> 
                    <Banner title="Collection">
                        <Link to="/cart" className="btn-primary">
                            Cart
                        </Link>    
                    </Banner>
                </Hero>
                <Title title="Collection" />
                <CardList />
            </div>
        )
    }
}
