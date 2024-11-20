/* eslint-disable react/prop-types */
import { createRoot } from 'react-dom/client'
import React from 'react';

const root = createRoot(document.getElementById('root'))
console.log(root);

// composability
// props
// props are immutable //Object.freeze

function Header(props) {
    return <h2>{props.name}</h2>
}

function App(props) {
    return (
        <article>
            <Header name={props.name} />
            <p> You clicked 1 times</p>
            <button>Click me</button>
        </article>
    )
}


root.render(<div>
    <App name="faiyaz" times={1} />
</div>);
