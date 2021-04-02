import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Container, Avatar, Page, TouchWrap, H2, H1} from '@lib/main';

const Button = (props: any) => {
  return (
    <Container>
      <TouchWrap onPress={() => console.log('jjj')}>
        <H2>Hello</H2>
      </TouchWrap>
    </Container>
  );
};

export default Button;
