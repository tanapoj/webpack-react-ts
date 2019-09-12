import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";
import {useState} from "react"

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>
                count is {count}
            </div>
        </>
    )
}

const ele = (
    <>
        <Hello compiler="TypeScript" framework="React"/>
        <hr/>
        <Counter/>
    </>
)

ReactDOM.render(
    ele,
    document.getElementById("example")
);
