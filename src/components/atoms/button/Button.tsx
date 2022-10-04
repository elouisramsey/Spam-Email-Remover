import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultText from '../text/DefaultText';
import {btnStyles} from './btnStyles';

type Props = {
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button = ({onPress, children = 'Submit', disabled}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={btnStyles.container}>
      <DefaultText style={btnStyles.text}>{children}</DefaultText>
    </TouchableOpacity>
  );
};

export default Button;
