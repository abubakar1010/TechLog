import styled from "styled-components";

export const TextInput = styled.input`
	outline: 0;
	border: 2px solid pink;
	width: 420px;
	padding: 10px 20px;
	font-size: 1.24rem;
	font-family: sans-serif;
	display: ${(props) => (props.blocked ? "block" : "inline")};
	&:focus {
		border: 2px solid aliceblue;
	}
`;
