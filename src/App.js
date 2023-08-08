import React from "react";
export function App(){
    return(
       <main>
            <nav>
                <a href="#profile">Profile Pic</a>
                <a href='#home'><i id='homeIcon'></i></a>
                <a href='#messages'><i id='messageIcon'></i></a>
                <a href='#notifications'><i id='bellIcon'></i></a>
                <a href='#settings'><i id='gearIcon'></i></a>
                <a href="#logout"><i id='logout'></i></a>
            </nav>
       </main>
    );
}

export default App;