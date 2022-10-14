import { TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultText from '../text/DefaultText';
import {btnStyles} from './btnStyles';

type Props = {
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  styles?: any;
  textStyles?: any;
  color?: string;
  fontSize?: number
};

const Button = ({
  onPress,
  children = 'Submit',
  disabled,
  styles,
  textStyles,
  color,
  fontSize
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[btnStyles.container, styles]}
    >
      <DefaultText
        style={[btnStyles.text, textStyles]}
        color={color}
        fontSize={fontSize}
      >
        {children}
      </DefaultText>
    </TouchableOpacity>
  );
};

export default Button;
