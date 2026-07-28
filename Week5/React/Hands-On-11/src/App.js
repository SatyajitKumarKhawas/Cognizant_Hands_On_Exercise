import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Member!");
    };

    const increase = () => {
        increment();
        sayHello();
    };

    const sayWelcome = (msg) => {
        alert(msg);
    };

    const syntheticEvent = () => {
        alert("I was clicked");
    };

    return ( <
        div className = "container" >
        <
        h2 > { count } < /h2>

        <
        button onClick = { increase } > Increment < /button> <
        br / >
        <
        br / >

        <
        button onClick = { decrement } > Decrement < /button> <
        br / >
        <
        br / >

        <
        button onClick = {
            () => sayWelcome("Welcome") } >
        Say Welcome <
        /button> <
        br / >
        <
        br / >

        <
        button onClick = { syntheticEvent } >
        Click on me <
        /button>

        <
        CurrencyConvertor / >
        <
        /div>
    );
}

export default App;