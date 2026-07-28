import React, { useState } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return ( <
        div className = "container" >
        <
        Greeting isLoggedIn = { isLoggedIn }
        />

        {
            isLoggedIn ? ( <
                LogoutButton onClick = { handleLogout }
                />
            ) : ( <
                LoginButton onClick = { handleLogin }
                />
            )
        } <
        /div>
    );
}

export default App;