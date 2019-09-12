import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <p>
        Hello from <i>{props.compiler}</i> and <b>{props.framework}</b>!!
    </p>
)
