import styled from "styled-components";

export const TextGroupContainer = styled.section`
	background-color: aliceblue;
	width: 730px;
	padding: 20px 43px;
	border-radius: 9px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}
`;
