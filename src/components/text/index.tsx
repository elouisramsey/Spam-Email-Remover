import {View, StyleSheet, TextInput, Platform} from 'react-native';
import React from 'react';
import DefaultText from '../atoms/text/DefaultText';

type Props = {
  icon?: any;
  value: string | number;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  inputStyle?: any;
  error?: any;
  label?: string;
  errorText?: any;
  maxlength?: number;
  labelStyle?: any;
  inputContainerStyle?: any;
  placeholder?: string;
  editable?: boolean;
  placeHolderColor?: string;
  onBlur?: () => void;
  containerStyle?: any;
  onEndEditing?: () => void;
  onKeyPress?: (e: any) => void;
  inputType?: boolean;
};

const Input = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.label && (
        <DefaultText style={[styles.label, props.labelStyle]}>
          {props.label}
        </DefaultText>
      )}
      <View
        style={[
          styles.inputContainer,
          props.error && {borderColor: '#EE4B2B'},
          {height: props.multiline ? 70 : 50},
          props.inputContainerStyle,
        ]}>
        <TextInput
          onKeyPress={props.onKeyPress}
          onEndEditing={props.onEndEditing}
          onBlur={props.onBlur}
          maxLength={props.maxlength}
          autoCapitalize={props.autoCapitalize || 'none'}
          autoCorrect={props.autoCorrect}
          placeholderTextColor={props.placeHolderColor || '#1C1939'}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType || 'default'}
          style={[
            styles.input,
            {
              width: props.icon ? '90%' : '100%',
            },
            props.inputStyle,
          ]}
          placeholder={props.placeholder}
          editable={props.editable}
        />
        {props.icon && <>{props.icon}</>}
      </View>

      {props.error && (
        <DefaultText style={styles.error}>{props.errorText}</DefaultText>
      )}
    </View>
  );
};

export default Input;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    color: '#979797',
    marginBottom: 5,
  },
  inputContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    borderColor: '#D0D5DD',
    height: 50,
    color: '#2C2948',
  },
  input: {
    fontSize: 16,
    color: '#2C2948',
    backgroundColor: 'transparent',
    height: '100%',
  },
  error: {
    fontSize: 10,
    color: '#EE4B2B',
  },
});
