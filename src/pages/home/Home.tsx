import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DefaultText from '@atoms/text/DefaultText';
import {homeStyles} from './HomeStyle';
import CameraPage from './camera/Camera';
import SegmentedControl from 'src/components/SegmentController/SegmentController';
import Index from '../mails';
import ConvertedImage from './Result';

type Props = {};
const tabs = ['New Requests', 'View Requests'];

const Home = (props: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [showConvertedImage, setShowConvertedImage] = useState<boolean>(false);

  const changeView = (index: number) => setTabIndex(index);

  const [convertedText, setConvertedText] = useState<string>('')
  const [textImage, setTextImage] = useState<string>('')

  const [rawPhoto, setRawPhoto] = useState<any>();

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
                onPress={() => setCameraActive(true)}
              >
                <Image
                  source={require('@assets/images/upload.png')}
                  style={homeStyles.image}
                />
              </TouchableOpacity>
              <DefaultText>Kindly upload an image of the bill</DefaultText>
            </>
          )}
          {cameraActive && (
            <CameraPage
              setShowConvertedImage={setShowConvertedImage}
              setCameraActive={setCameraActive}
              setTextImage={setTextImage}
              setConvertedText={setConvertedText}
              setRawPhoto={setRawPhoto}
            />
          )}
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
