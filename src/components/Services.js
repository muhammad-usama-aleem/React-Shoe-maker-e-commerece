import React, { Component } from "react";
import { MdInvertColors } from "react-icons/md";
import { GiPencilBrush, GiRunningShoe } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GrDeliver />,
        title: "Free Delivery",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <MdInvertColors />,
        title: "Endless Colors",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <GiRunningShoe />,
        title: "Free Size",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <GiPencilBrush />,
        title: "Custom Design",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6 className="gap">{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
