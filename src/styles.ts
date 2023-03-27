import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 59rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 1.2rem;

  background-color: #1a1924;
`;

export const Message = styled.div``;

export const Input = styled.div`
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

  button {
    position: absolute;
    top: 53%;
    transform: translateY(-50%);
    right: 1.5rem;
    color: #ddd;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.5s all ease-in-out;

    &:hover {
      color: #222;
    }
  }
`;
