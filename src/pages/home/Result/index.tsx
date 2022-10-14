import { View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors, Spacing } from 'src/styles';
import DefaultText from 'src/components/atoms/text/DefaultText';
import Button from 'src/components/atoms/button/Button';
import { resultStyles } from './styles';
import {
  FONT_SIZE_18
} from 'src/styles/typography';
import api from 'src/utils/api';
import { useGeneralState } from 'src/services/context/general';

type Props = {
  convertedText: string;
  textImage: any;
  rawPhoto: any
};

const ConvertedImage = ({ convertedText, textImage, rawPhoto }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useGeneralState();

  const SubmitUnsubscribeRequest = () => {
    setLoading(true);
    api
      .post('/mail', {
        image: rawPhoto,
        imageText: convertedText,
        id: user._id
      })
      .then((res: any) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={resultStyles.container}>
      <View style={resultStyles.imgContainer}>
        <Image
          source={{
            uri: textImage + '?' + new Date()
          }}
          style={resultStyles.img}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: Spacing.SCALE_16,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <DefaultText
          style={{
            textAlign: 'center'
          }}
        >
          {convertedText}
        </DefaultText>
        <View style={resultStyles.btnContainer}>
          <Button
            onPress={SubmitUnsubscribeRequest}
            styles={{
              backgroundColor: Colors.PRIMARY,
              width: '45%'
            }}
            fontSize={FONT_SIZE_18}
          >
            Submit request
          </Button>
          <Button
            onPress={() => {}}
            styles={{
              backgroundColor: Colors.SECONDARY,
              width: '45%'
            }}
            color={Colors.WHITE}
            fontSize={FONT_SIZE_18}
          >
            Cancel
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConvertedImage;
