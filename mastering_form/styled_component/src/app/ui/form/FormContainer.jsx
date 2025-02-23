import styled from "styled-components";

export const FormContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #333;
    padding: 1.4rem 3rem;
    border-radius: 0.3rem;
    & > *:not(:last-child) {
    margin-bottom: 1rem; /* Equivalent to space-x-4 */
  }
`