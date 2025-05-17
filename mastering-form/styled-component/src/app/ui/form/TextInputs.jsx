import styled from "styled-components";

export const TextInput = styled.input`
	outline: 0;
	border: ${(props) => (props.err ? "2px solid #EF0000" : "2px solid #efefef")};
	width: 220px;
	padding: 6px 20px;
	border-radius: 4px;
	font-size: 1.24rem;
	font-family: sans-serif;
	display: ${(props) => (props.blocked ? "block" : "inline")};
	&:focus {
		border: 2px solid aliceblue;
	}
`;
