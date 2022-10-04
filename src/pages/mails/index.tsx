import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MailStyles} from './MailStyles';

import Success from '@src/components/status/succes';
import ErrorComp from '@src/components/status/Error';
import DefaultText from 'src/components/atoms/text/DefaultText';
import api from '@src/utils/api';
import { useGeneralState } from 'src/services/context/general';

type Props = {
  _id: string;
  image?: string;
  imageText?: string;
  id?: string;
  status: string;
}[];

const Index = () => {
  const [userRequests, setUserRequests] = useState<any>([]);
const {user} = useGeneralState()
console.log(user)
  useEffect(() => {
    api
      .get(`/mail/${user._id}`)
      .then(res => {
        setUserRequests(res.data.requests);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <View style={[MailStyles.mailItem]}>
          <View>
            {item.status === 'PENDING' ? (
              <ErrorComp>
                <Image
                  source={require('@assets/images/danger.png')}
                  style={MailStyles.image}
                />
              </ErrorComp>
            ) : (
              <Success>
                <Image
                  source={require('@assets/images/success.png')}
                  style={MailStyles.image}
                />
              </Success>
            )}
          </View>
          <View style={MailStyles.contentHolder}>
            <DefaultText style={MailStyles.id}>{item._id}</DefaultText>
            <DefaultText style={MailStyles.status}>{item.status}</DefaultText>
          </View>
        </View>
        <View style={{overflow: 'hidden'}}>
          <View style={MailStyles.borderHack} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      renderItem={renderItem}
      bounces={false}
      //   contentContainerStyle={bankStyles.banksContainer}
      keyExtractor={item => item._id.toString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <DefaultText>Getting requests</DefaultText>}
      data={userRequests}
    />
  );
};

export default Index;
