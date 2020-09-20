import React, { Component } from 'react';
import CardList from "../components/CardList";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import Title from "../components/Title";

export default class Collection extends Component {
    render() {
        return (
            <div>
                <Hero hero="seprateHero"> 
                    <Banner title="SHOE MAKER" subtitle="good shoes take you good places" />
                </Hero>
                <Title title="Collection" />
                <CardList />
            </div>
        )
    }
}
