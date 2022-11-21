import { View, Image, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import RNFS from 'react-native-fs';

import { Colors, Spacing } from 'src/styles';
import DefaultText from 'src/components/atoms/text/DefaultText';
import Button from 'src/components/atoms/button/Button';
import { resultStyles } from './styles';
import { FONT_SIZE_18 } from 'src/styles/typography';
import api from 'src/utils/api';
import { useGeneralState } from 'src/services/context/general';
import axios from 'axios';
import { CLOUDINARY_NAME } from 'src/utils/Helper';

type Props = {
  convertedText: string;
  textImage: any;
  rawPhoto: any;
};

const ConvertedImage = ({ convertedText, textImage, rawPhoto }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useGeneralState() as any;

  const SubmitUnsubscribeRequest = async () => {
    setLoading(true);

    // const payload = new FormData();

    // payload.append('image', {
    //   uri: rawPhoto.uri,
    //   type: rawPhoto.type,
    //   name: rawPhoto.fileName
    // });
    // payload.append('imageText', convertedText);
    // payload.append('id', user._id);

    // await fetch('http://10.0.2.2:7000/api/v1/mail', {
    //   method: 'post',
    //   body: payload,
    //   headers: {
    //     'content-type': 'multipart/form-data;'
    //   }
    // })
    //   .then(res => {
    //     console.log(res.json());
    //   })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));

    const cloudUploadOpts = new FormData();

    cloudUploadOpts.append('file', {
      uri: rawPhoto.uri,
      type: rawPhoto.type,
      name: rawPhoto.fileName
    });
    // cloudUploadOpts.append('cloud_name', CLOUDINARY_NAME);
    cloudUploadOpts.append('upload_preset', 'utp89xck');

    await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      {
        method: 'post',
        body: cloudUploadOpts,
        mode: 'cors'
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const payload = {
          image: data.secure_url,
          imageText: convertedText,
          id: user._id
        };
        api
          .post('/mail', payload)
          .then((res: any) => {
            console.log(res);
            setLoading(false);
          })
          .catch(err => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch(err =>
        console.log({
          errorcloud: err
        })
      );
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
