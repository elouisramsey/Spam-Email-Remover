import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'src/styles/index';
import {FONT_SIZE_16, LINE_HEIGHT_24} from 'src/styles/typography';

const btnStyles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: Spacing.SCALE_16,
    // flexDirection: 'row',
    marginTop: 10
  },
  text: {
    color: Colors.SECONDARY,
    fontSize: FONT_SIZE_16,
    lineHeight: LINE_HEIGHT_24,
    textTransform: 'uppercase',
  },
});

export {btnStyles};
