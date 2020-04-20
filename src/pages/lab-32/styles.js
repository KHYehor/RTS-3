import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export const Title = styled.Text`
  font-size: ${props => props.fontSize || '20'}px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.color || 'white'};
  margin-top: ${props => props.marginTop || '0'}px;
`;

export const Error = styled.Text`
  text-align: center;
  color: red;
`;
export const Row = styled.View`
  flex-direction: row;
`;
