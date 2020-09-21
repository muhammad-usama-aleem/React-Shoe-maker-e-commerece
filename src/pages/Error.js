import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div>
                <Hero hero="seprateHero"> 
                    <Banner title="No Such Page Found">                         
                        <Link to="/home" className="btn-primary">
                            Home
                        </Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}

export default Error;