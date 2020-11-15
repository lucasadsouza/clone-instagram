import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Logo from '../../assets/instagram-logo-white2.png';

import { Container } from './styles';

export default function Header() {
  return(
    <Container>
      <Icon name="camera" size={25} color="#fff" />
      <Image style={{ marginHorizontal: 60 }} source={Logo} />
      <Icon name="location-arrow" size={25} color="#fff" />
    </Container>
  );
}
