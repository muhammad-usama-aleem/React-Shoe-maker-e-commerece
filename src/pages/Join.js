import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import Title from "../components/Title";
import Login from "../components/Login"


export default class Join extends Component {
    render() {
        return (
            <div>
            <Hero hero="seprateHero"> 
                <Banner title="SHOE MAKER" subtitle="good shoes take you good places" />
            </Hero>
            <Title title="Join Us" />
            <Login />
            </div>
        )
    }
}
