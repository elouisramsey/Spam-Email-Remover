import {StyleSheet} from 'react-native';

export const ErrorStyles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    backgroundColor: '#FF4762',
  },
  success: {
    backgroundColor: 'rgba(76, 217, 100, 0.5)',
  },
});
