import {View, Text} from 'react-native';
import React from 'react';
import {ErrorStyles} from './ErrorStyles';

type Props = {
  children: React.ReactNode;
};

const ErrorComp = ({children}: Props) => {
  return (
    <View style={[ErrorStyles.circle, ErrorStyles.error]}>{children}</View>
  );
};

export default ErrorComp;
