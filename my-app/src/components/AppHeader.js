import React from 'react';

function AppHeader(props) {
    return (
        <div class="AppHeader">
            <h2>JPN 1106 Flashcards</h2>
            <div class="Spacer"></div>
            <h3>{props.currDeck}</h3>
            <div class="Spacer"></div>
            <button>Log In</button>
        </div>
    );
}

export default AppHeader;
