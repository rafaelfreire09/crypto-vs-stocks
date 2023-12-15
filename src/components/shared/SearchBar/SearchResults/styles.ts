import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;

  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px #515151;
  border-radius: 10px;
  margin-top: 0.1rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 10px 8px;
  cursor: pointer;

  &:hover {
    background-color: #313131f7;
  }
`;

export const ItemSymbol = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const ItemName = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
