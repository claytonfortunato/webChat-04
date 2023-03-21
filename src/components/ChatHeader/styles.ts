import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Status = styled.div`
  display: grid;

  strong {
    margin-bottom: 0.25rem;
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #00b37e;
    font-size: 0.75rem;

    &::before {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      background-color: #00b37e;
      border-radius: 50%;
    }
  }
`;
