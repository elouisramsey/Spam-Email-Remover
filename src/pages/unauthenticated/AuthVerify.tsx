import {View} from 'react-native';
import React, {useState} from 'react';

import DefaultText from '@src/components/atoms/text/DefaultText';
import Input from '@src/components/text';
import api from '@src/utils/api';
import Button from '@src/components/atoms/button/Button';
import {Colors} from '@src/styles';
import {saveToLocalStorage, LOGGED_IN_USER} from '@src/utils/functions';

type Props = {
  navigation: any;
  route: any;
};

const AuthVerify = ({navigation, route}: Props) => {
  const [OTP, setOTP] = useState<number | string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {username, _id} = route.params.userInfo;

  const submitForm = () => {
    setLoading(true);
    const payload = {
      otp: OTP,
      username: username,
    };

    api
      .post('/otp/verify', payload)
      .then(res => {
        setLoading(false);
        if (res.status === 200) {
          api.get(`/user/single/${_id}`).then(res => {
            if (res.data.meta === 200) {
              setLoading(false);
              saveToLocalStorage(LOGGED_IN_USER, res.data.user);
                navigation.navigate('Home');
            } else {
              setLoading(false);
              setErrorMessage('Error getting user');
            }
          });
        } else {
          setLoading(false);
          setErrorMessage('There was an error');
        }
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        paddingTop: 40,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
      }}>
      {errorMessage.length > 1 && (
        <DefaultText
          style={{
            color: Colors.ALERT,
          }}>
          {errorMessage}
        </DefaultText>
      )}

      <DefaultText
        style={{
          textAlign: 'center',
        }}>
        Kindly enter the OTP sent to your number.
      </DefaultText>
      <Input value={OTP} onChangeText={val => setOTP(val)} />
      <Button disabled={loading} onPress={submitForm}>
        Validate OTP
      </Button>
    </View>
  );
};

export default AuthVerify;
