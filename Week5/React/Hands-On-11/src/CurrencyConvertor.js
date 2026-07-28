import React, { useState } from "react";

function CurrencyConvertor() {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (amount === "" || currency === "") {
            alert("Please enter both Amount and Currency");
            return;
        }

        const euro = (parseFloat(amount) / 90).toFixed(2);

        alert("Converting to Euro Amount is " + euro);
    };

    return ( <
        div style = {
            { marginTop: "30px" } } >
        <
        h1 style = {
            { color: "green" } } > Currency Convertor!!! < /h1>

        <
        form onSubmit = { handleSubmit } >
        <
        div style = {
            { marginBottom: "15px" } } >
        <
        label style = {
            { display: "inline-block", width: "100px" } } >
        Amount <
        /label>

        <
        input type = "number"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value) }
        /> <
        /div>

        <
        div style = {
            { marginBottom: "15px" } } >
        <
        label style = {
            { display: "inline-block", width: "100px" } } >
        Currency <
        /label>

        <
        input type = "text"
        value = { currency }
        onChange = {
            (e) => setCurrency(e.target.value) }
        placeholder = "Euro" /
        >
        <
        /div>

        <
        button type = "submit" > Submit < /button> <
        /form> <
        /div>
    );
}

export default CurrencyConvertor;