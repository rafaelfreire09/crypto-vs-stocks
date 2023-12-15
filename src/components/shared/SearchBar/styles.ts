import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 2.5rem;

  border: none;
  border-radius: 10px;
  padding: 0 7px;
  box-shadow: 0px 0px 1px #888;
  background-color: rgb(48, 48, 48);
  display: flex;
  align-items: center;
`;

export const IconSection = styled.div`
  margin: 0 0 0 10px;
  border: none;

  &:hover {
    /* border: 1px solid #1c1d1f; */
    outline: none;
    background-color: transparent;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;

  margin: 0 0 0 10px;

  width: 100%;

  &:focus {
    /* border: 1px solid #1c1d1f; */
    outline: none;
  }
`;
