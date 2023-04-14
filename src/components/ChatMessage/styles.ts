import styled from "styled-components";

type BackProps = {
  you?: boolean;
  orientation?: string;
};

export const Container = styled.div<BackProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.you ? "flex-end" : "flex-start")};
  margin: 1rem;
`;

export const Background = styled.div`
  display: flex;
  background-color: #633bbc;
  margin-top: 10px;
  padding: 10px;
  border-radius: 0 0.8rem 0.8rem 0.8rem;
`;
