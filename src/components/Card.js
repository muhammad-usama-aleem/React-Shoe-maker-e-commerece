import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            // <div>
            //     {console.log(this.props.src)}
            // </div>
            <div className="container">
                    <div className="images">
                        <img className="image" src={this.props.item.src} alt="shoe" width="290px" height="204px" />
                    </div>
                        <div className="slideshow-buttons">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="four"></div>
                    </div>
                    <p className="pick">choose size</p>
                    <div className="sizes">
                        <div className="size">5</div>
                        <div className="size">6</div>
                        <div className="size">7</div>
                        <div className="size">8</div>
                        <div className="size">9</div>
                        <div className="size">10</div>
                        <div className="size">11</div>
                        <div className="size">12</div>
                    </div>
                    <div className="product">
                        <p className="category">Men's Running Shoe</p>
                        <h1 className="named">{this.props.item.title}</h1>
                        <h2 className="price">${this.props.item.price}</h2>
                        <p className="desc">{this.props.item.description}</p>
                        <div className="buttons">
                            <button className="add">Add to Cart</button>
                            <button className="like"><span>♥</span></button>
                        </div>
                    </div>
                </div>
                
        )
    }
}
