import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
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

export const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.5rem;
  color: inherit;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: 0.5s all ease-in-out;

  &:hover {
    color: #ddd;
  }
`;
