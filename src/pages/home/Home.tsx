import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DefaultText from '@atoms/text/DefaultText';
import {homeStyles} from './HomeStyle';
import CameraPage from './camera/Camera';
import SegmentedControl from 'src/components/SegmentController/SegmentController';
import Index from '../mails';

type Props = {};
const tabs = ['New Requests', 'View Requests']
const Home = (props: Props) => {
    const [tabIndex, setTabIndex] = useState(0);
  const [cameraActive, setCameraActive] = useState<boolean>(false);

    const changeView = (index: number) => setTabIndex(index);

  return (
    <View style={homeStyles.container}>
      <SegmentedControl
        currentIndex={tabIndex}
        onChange={changeView}
        tabs={tabs}
      />
      {tabIndex === 0 && (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}>
          {!cameraActive && (
            <>
              <TouchableOpacity
                style={homeStyles.imgContainer}
                onPress={() => setCameraActive(true)}>
                <Image
                  source={require('@assets/images/upload.png')}
                  style={homeStyles.image}
                />
              </TouchableOpacity>
              <DefaultText>Kindly upload an image of the bill</DefaultText>
            </>
          )}
          {cameraActive && <CameraPage />}
        </View>
      )}
      {tabIndex === 1 && <Index />}
    </View>
  );
};

export default Home;
