import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
            <Hero>
                <Banner title="SHOE MAKER" subtitle="good shoes take you good places"> 
                    <Link to="/collection" className="btn-primary">
                        Explore
                    </Link>
                </Banner>
            </Hero>
            <Services />
            </div>
        )
    }
}
