import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const ChooseSections = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0 50px;
`;

export const ChooseInputs = styled.input`
  width: 180px;
  height: 30px;

  border-radius: 8px;

  padding: 3px 10px;
  margin: 10px 10px;
`;

export const InputsSections = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 0 0 0;
`;

export const Input = styled.input`
  width: 200px;
  height: 38px;

  border: 1px solid rgb(48, 48, 48);
  background-color: rgb(48, 48, 48);
  border-radius: 15px;

  padding: 3px 10px;
  margin: 10px 10px;

  &:focus {
    border: 1px solid rgb(48, 48, 48);
    outline: none;
  }
`;

export const ButtonSection = styled.div`
  margin: 1.8rem 0 0 0;
`;
