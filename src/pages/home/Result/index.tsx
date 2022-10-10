import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Colors, Spacing} from 'src/styles';
import DefaultText from 'src/components/atoms/text/DefaultText';
import Button from 'src/components/atoms/button/Button';

type Props = {
  convertedText: string;
  textImage: any;
};

const ConvertedImage = ({convertedText, textImage}: Props) => {
const submit = () => {}

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          height: '50%',
          width: '100%',
          borderBottomColor: Colors.PRIMARY,
          borderBottomWidth: 1,
        }}>
        <Image
          source={{
            uri: textImage,
          }}
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
          }}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          padding: Spacing.SCALE_16,
        }}>
        <DefaultText
          style={{
            textAlign: 'center',
          }}>
          {convertedText}
        </DefaultText>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'pink'
          }}>
          <Button onPress={submit} width="45%">
            Submit
          </Button>
          <Button
            onPress={() => {}}
            styles={{
              backgroundColor: Colors.GRAY,
            }}
            width="45%">
            Cancel
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConvertedImage;
