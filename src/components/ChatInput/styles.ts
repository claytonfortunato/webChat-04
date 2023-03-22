import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  input {
    border: none;
    width: 100%;
    background: #282843;
    font-size: 1rem;
    border-radius: 999px;
    padding: 0.875rem 3.625rem 0.875rem 1.5rem;
    color: #fff;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):focus {
      outline: 2px solid #e1e1e6;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 92.2%;

  cursor: pointer;
  background-color: #282843;
  border: none;
`;
