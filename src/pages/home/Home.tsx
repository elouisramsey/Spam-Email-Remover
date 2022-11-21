import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { launchCamera,  launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import DefaultText from '@atoms/text/DefaultText';
import { homeStyles } from './HomeStyle';
import CameraPage from './camera/Camera';
import SegmentedControl from 'src/components/SegmentController/SegmentController';
import Index from '../mails';
import ConvertedImage from './Result';
import callGoogleVisionAsync from 'src/utils/Helper';

type Props = {};
const tabs = ['New Requests', 'View Requests'];

const Home = (props: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [showConvertedImage, setShowConvertedImage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const changeView = (index: number) => setTabIndex(index);

  const [convertedText, setConvertedText] = useState<string>('');
  const [textImage, setTextImage] = useState<string>('');

  const [rawPhoto, setRawPhoto] = useState<any>();

  const takePicture = async () => {
    // setCameraActive(true);
    launchImageLibrary(
      {
        includeBase64: true,
        mediaType: 'photo',
        // saveToPhotos: true,
        // cameraType: 'back'
      },
      (response: any) => {
        callGoogleVisionAsync(
          response?.assets[0].base64,
          setLoading,
          setShowConvertedImage,
          setConvertedText
        ).then(async () => {
          const { fileName, fileSize, height, type, uri, width } =
            response?.assets[0];
          setRawPhoto({
            fileName,
            fileSize,
            height,
            type,
            uri,
            width
          });
          setTextImage(response?.assets[0].uri);

          // setCameraActive(true);
        });
      }
    );

    // const photo = await camera.current.takePhoto({
    //   flash: 'on'
    // });

    // setRawPhoto(photo);
    // const base64image = await RNFS.readFile(photo.path, 'base64');
  };

  return (
    <View style={homeStyles.container}>
      <SegmentedControl
        currentIndex={tabIndex}
        onChange={changeView}
        tabs={tabs}
      />
      {tabIndex === 0 && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {!cameraActive && !showConvertedImage && (
            <>
              <TouchableOpacity
                style={homeStyles.imgContainer}
                onPress={takePicture}
              >
                <Image
                  source={require('@assets/images/upload.png')}
                  style={homeStyles.image}
                />
              </TouchableOpacity>
              <DefaultText>Kindly upload an image of the bill</DefaultText>
            </>
          )}
          {/* {cameraActive && (
            <CameraPage
              setShowConvertedImage={setShowConvertedImage}
              setCameraActive={setCameraActive}
              setTextImage={setTextImage}
              setConvertedText={setConvertedText}
              setRawPhoto={setRawPhoto}
            />
          )} */}
          {showConvertedImage && (
            <ConvertedImage
              convertedText={convertedText}
              textImage={textImage}
              rawPhoto={rawPhoto}
            />
          )}
        </View>
      )}
      {tabIndex === 1 && <Index />}
    </View>
  );
};

export default Home;
