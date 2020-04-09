import React from 'react';
/*Sempre importar o react mesmo sem usar*/

export default function Header({ children }) {
    return (
        <header>
            <h1>{ children }</h1>
        </header>
    );
}

