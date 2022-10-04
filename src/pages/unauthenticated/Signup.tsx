import {View} from 'react-native';
import React, {useState} from 'react';

import Input from '@src/components/text';
import Button from '@src/components/atoms/button/Button';
import DefaultText from 'src/components/atoms/text/DefaultText';
import api from 'src/utils/api';
import {Colors} from '@src/styles';

type Props = {
  navigation: any;
};

const Signup = ({navigation}: Props) => {
  const [phone, setPhone] = useState<number | string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = () => {
    setLoading(true);
    const payload = {
      username: `user${Math.floor(Math.random() * 90000) + 10000}`,
      phone,
    };

    api
      .post('/user', payload)
      .then(res => {
        setLoading(false);
        if (res.data.meta === 200) {
          navigation.navigate('Verify', {
            userInfo: res.data.user,
          });
        } else {
          setErrorMessage('There was an error');
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
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
          color: 'black'
        }}>
        Kindly enter your phone number starting with + and the country code.
      </DefaultText>
      <Input value={phone} onChangeText={val => setPhone(val)} />
      <Button disabled={loading} onPress={submitForm}>
        Validate Phone
      </Button>
    </View>
  );
};

export default Signup;
