import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
  color: #fff;

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Status = styled.div`
  display: flex;

  strong {
    margin-bottom: 1rem;
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
