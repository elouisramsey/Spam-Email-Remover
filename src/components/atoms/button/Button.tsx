import { TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultText from '../text/DefaultText';
import {btnStyles} from './btnStyles';

type Props = {
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  styles?: any
  width? : any
};

const Button = ({onPress, children = 'Submit', disabled, styles, width = '100%'}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={(btnStyles.container, styles, width)}>
      <DefaultText style={btnStyles.text}>{children}</DefaultText>
    </TouchableOpacity>
  );
};

export default Button;
