import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export const Title = styled.Text`
  font-size: ${props => props.fontSize || '20'}px;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-top: ${props => props.marginTop || '0'}px;
`;
export const XYCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
