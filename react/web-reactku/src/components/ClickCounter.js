import React, { Component } from "react";
import UpdateComponent from "./withCounter";

class ClickCounter extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default UpdateComponent(ClickCounter)