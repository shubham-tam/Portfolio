import React, { Component } from "react";
import styled from "styled-components";

const Msg = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin: 20px 20px;
`;

export class Message extends Component {
  state = {
    hour: null,
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour,
    });
  };

  getMessage() {
    const { hour } = this.state;

    if (hour < 12) {
      return "Good morning ☀️";
    } else if (hour >= 12 && hour <= 17) {
      return "Good afternoon";
    } else if (hour >= 17 && hour <= 20) {
      return "Good evening 🌇";
    } else if (hour >= 20 && hour <= 24) {
      return "Good night 🌚";
    }
  }

  render() {
    return (
      <div>
        <Msg>{this.getMessage()}</Msg>
      </div>
    );
  }
}
