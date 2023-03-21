import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  input {
    border: none;
    width: 100%;
    background: #282843;
    color: #fff;
    font-size: 1rem;
    border-radius: 999px;
    padding: 0.875rem 3.625rem 0.875rem 1.5rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):focus {
      outline: 2px solid #e1e1e6;
    }
  }
`;
