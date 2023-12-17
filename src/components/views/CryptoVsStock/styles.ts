import mainColors from '@/styles/mainColors';
import styled, { css } from 'styled-components';

export type AssetResult = keyof typeof AssetResultColorsType;

type Props = {
  AssetResult: AssetResult;
};

const AssetResultColorsType = {
  breakeven: css<Props>`
    background-color: ${mainColors.white.normal};
  `,
  loss: css<Props>`
    background-color: ${mainColors.error.normal};
  `,
  gain: css<Props>`
    background-color: ${mainColors.success.dark};
  `,
};

export const Wrapper = styled.div`
  height: 80vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const AssetTitle = styled.span`
  font-size: 27px;
`;

export const AssetSymbol = styled.span`
  font-size: 18px;
`;

export const ResultSection = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonSection = styled.div`
  margin: 4rem 0 0 0;
`;

export const FinalResult = styled.div`
  margin-top: 70px;
  font-size: 18px;

  span {
    font-size: 24px;
  }
`;

export const AssetResult = styled.span<Props>`
  ${({ AssetResult }) => AssetResultColorsType[AssetResult]};

  font-size: 22px;
  border-radius: 3px;
`;
