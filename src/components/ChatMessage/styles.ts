import styled, { css } from "styled-components";

type BackProps = {
  you?: boolean;
  orientation?: string;
};

export const Container = styled.div<BackProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props ? "flex-start" : "flex-end")};
  margin: 1rem;
`;

export const Background = styled.div<BackProps>`
  background-color: ${(props) =>
    props ? "rgb(7, 132, 126)" : " rgb(99, 59, 188)"};
  margin-top: 10px;
  padding: 10px;
  border-radius: 0 0.8rem 0.8rem 0.8rem;
`;
