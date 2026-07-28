import React from "react";

function ListofPlayers() {
    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 68 },
        { name: "Ravindra Jadeja", score: 80 },
        { name: "Rishabh Pant", score: 60 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 78 },
        { name: "Kuldeep Yadav", score: 62 },
        { name: "Mohammed Siraj", score: 50 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return ( <
        div >
        <
        h1 > List of Players < /h1>

        <
        h2 > All Players < /h2>

        <
        ul > {
            players.map((player, index) => ( <
                li key = { index } > { player.name } - { player.score } <
                /li>
            ))
        } <
        /ul>

        <
        h2 > Players with Score below 70 < /h2>

        <
        ul > {
            lowScorePlayers.map((player, index) => ( <
                li key = { index } > { player.name } - { player.score } <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default ListofPlayers;