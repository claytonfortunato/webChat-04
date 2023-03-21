import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  font-size: 0.75rem;
  line-height: 1.4rem;

  &::-webkit-scrollbar {
    display: none;
  }

  .date {
    text-align: center;
    color: #fff;
  }
`;
