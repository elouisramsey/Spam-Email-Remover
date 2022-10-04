import {StyleSheet} from 'react-native';
import {
  FONT_FAMILY_REGULAR,
  FONT_SIZE_16,
  LINE_HEIGHT_24,
} from 'src/styles/typography';
import {Colors} from 'src/styles/index';

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
    lineHeight: LINE_HEIGHT_24,
    color: 'black',
  },
});
