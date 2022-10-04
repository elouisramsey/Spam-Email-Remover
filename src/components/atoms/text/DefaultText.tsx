import {View, Text, TextStyle} from 'react-native';
import React, {ReactElement} from 'react';
import { textStyles } from './textStyles';
import { Colors } from '@src/styles';

type Props = {
  children: React.ReactNode;
  style?: any;
  color?: string;
  fontSize?: number;
};

const DefaultText = ({
  color = Colors.SECONDARY,
  style = {},
  children,
  fontSize,
}: Props): ReactElement => {
  return (
    <Text style={[{...textStyles, fontSize, color, ...style}]}>{children}</Text>
  );
};

export default DefaultText;
