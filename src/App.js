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
            <div id='conversationsContainer'>
                <input type="text">Search bar</input>
                <ul id="conversationsList">
                    {/*dynamically added*/}
                </ul>
            </div>
            <div id="displayConversationContainer">
                <header>
                    <img>Profile Pic</img>
                    <i>Call icon</i>
                    <i>video icon</i>
                </header>
                <ul id='messagesList'>
                    {/*dynamically added*/}
                </ul>
                <input type="file" accept="image/png, image/jpeg"><i>paperclip icon</i></input>
                <input type="text"></input>
                <button id="voiceRecording"><i>microphone</i></button>
                <audio src="" id="audioElement" controls></audio>
            </div>
            <footer>
            </footer>
       </main>
    );
}

export default App;