import {View, Text} from 'react-native';
import React from 'react';
import {ErrorStyles} from './ErrorStyles';

type Props = {
  children: React.ReactNode;
};

const Success = ({children}: Props) => {
  return (
    <View style={[ErrorStyles.circle, ErrorStyles.success]}>{children}</View>
  );
};

export default Success;
