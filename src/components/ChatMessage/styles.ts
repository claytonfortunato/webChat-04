import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
`;

export const Background = styled.div<{ you: boolean }>`
  background-color: ${(props) => (props.you ? "#25cd89" : "#16195c")};
`;
