import React from "react";
import office from "./office.jpg";

function App() {
    const offices = [{
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai",
        },
        {
            Name: "Infosys",
            Rent: 65000,
            Address: "Pune",
        },
        {
            Name: "TCS",
            Rent: 75000,
            Address: "Mumbai",
        },
        {
            Name: "Wipro",
            Rent: 45000,
            Address: "Hyderabad",
        },
    ];

    return ( <
        div style = {
            { marginLeft: "80px" } } >
        <
        h1 > Office Space, at Affordable Range < /h1>

        {
            offices.map((item, index) => ( <
                div key = { index } >
                <
                img src = { office }
                alt = "Office Space"
                width = "25%"
                height = "25%" /
                >

                <
                h2 > Name: { item.Name } < /h2>

                <
                h3 style = {
                    { color: item.Rent < 60000 ? "red" : "green" } } >
                Rent Rs. { item.Rent } <
                /h3>

                <
                h3 > Address: { item.Address } < /h3>

                <
                br / >
                <
                /div>
            ))
        } <
        /div>
    );
}

export default App;