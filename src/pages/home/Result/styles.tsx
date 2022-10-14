import { StyleSheet } from 'react-native';
import { Colors } from 'src/styles';

export const resultStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  imgContainer: {
    height: '50%',
    width: '100%',
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 1
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
