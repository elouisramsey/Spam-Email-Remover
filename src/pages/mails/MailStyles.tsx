import { StyleSheet } from "react-native";
import { Colors } from "src/styles";

export const MailStyles = StyleSheet.create({
  mailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    width: '100%',
    paddingHorizontal: 15,
  },
  contentHolder: {
    marginLeft: 15,
    width: '85%',
  },
  image: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  id: {
    fontSize: 14,
    color: Colors.PRIMARY,
    lineHeight: 20,
    textTransform: 'uppercase'
  },
  borderHack: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'grey',
    borderRadius: 8,
    marginTop: -2,
  },
  status: {
    fontSize: 12,
    color: Colors.SECONDARY,
    opacity: 0.5,
    marginTop: 5,
  },
});