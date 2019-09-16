import * as React from "react";
import * as ReactDOM from "react-dom";

import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./store/reducer"

const store = createStore(reducer)

const app = (
    <Provider store={store}>
        Test
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById("root")
);
