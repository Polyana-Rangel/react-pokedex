import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  height: 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
`;

export const ProgressLine = styled.div`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: ${props => props.backgroundColor};
  border-radius: 40px;
`;
