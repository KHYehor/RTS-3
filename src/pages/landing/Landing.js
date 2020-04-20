import React from 'react';
import {Container, Title} from './styles';
import RouteGroup from '../../components/route-group/RouteGroup';

const Landing = ({navigator}) => (
  <Container>
    <Title fontSize="45px">@ykh2k</Title>
    <Title marginTop="10px">
      Доброго дня, лабораторні роботи
      {'\n'} з дисципліни: Вбудовані системи. Системи реального часу.
    </Title>
    <RouteGroup navigator={navigator} />
  </Container>
);

export default Landing;
