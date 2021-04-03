import React, {useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Container, Avatar, Page, TouchWrap, H2, H1} from '@lib/main';
import {BORDER_RADIUS} from '@helpers/_consts';

interface ButtonProps {
  title: string;
  onPress: () => void;
  fontSize?: number;
  color?: any;
  width?: number;
  backgroundColor?: any;
  borderRadius?: number;
  padding?: number;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: any;
  size?: 'large' | 'small';
}

const Button = ({...props}: ButtonProps) => {
  return (
    <TouchWrap
      disabled={props.disabled}
      borderRadius={props.borderRadius || BORDER_RADIUS - 5}
      padding={props.padding || 3.5}
      backgroundColor={props.backgroundColor || 'orange'}
      width={props.width || 90}
      onPress={props.onPress}
      horizontalAlignment="center"
      verticalAlignment="center">
      {props.isLoading && (
        <ActivityIndicator color={props.loaderColor} size={props.size} />
      )}
      {!props.isLoading && (
        <H2 fontSize={props.fontSize || 12} color={props.color || '#fff'}>
          {props.title}
        </H2>
      )}
    </TouchWrap>
  );
};

export default Button;
