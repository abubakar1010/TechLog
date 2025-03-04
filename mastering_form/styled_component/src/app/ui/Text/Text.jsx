// /* eslint-disable react/prop-types */


import styled from "styled-components";


const fontSizes = {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.3rem",
}

const lineHights = {
    sm: 0.9,
    md: 1.2,
    lg: 1.8,
}
export const Text = styled.p`
    font-family: sans-serif;
    font-size: ${(props) => fontSizes[props.size] ?? 1.3};
    line-height: ${(props) => lineHights[props.size] ?? 1.2};
    display: ${(props) => props.blocked? "block" : "inline"};
    color: ${(props) => props.isError? "#e71b1b" : "#222"};
`

