import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Container, Avatar, Page, TouchWrap, H2, H1} from '@lib/main';
import {BORDER_RADIUS} from '@helpers/_consts';

const Button = (props: any) => {
  return (
    <TouchWrap
      borderWidth={1}
      borderRadius={BORDER_RADIUS}
      padding={2}
      width={100}>
      <H2>Hello</H2>
    </TouchWrap>
  );
};

export default Button;
