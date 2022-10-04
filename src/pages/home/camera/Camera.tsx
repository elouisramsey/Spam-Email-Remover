import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';

import Button from 'src/components/atoms/button/Button';
import DefaultText from 'src/components/atoms/text/DefaultText';
import callGoogleVisionAsync from 'src/utils/Helper';

type Props = {};

const CameraPage = (props: Props) => {
  const [hasPermission, setHasPermission] = useState<boolean | any>(false);
  const devices = useCameraDevices();
  const device: any = devices.back;
  const camera = useRef(null) as any;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const onPressButton = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });

    const base64image = await RNFS.readFile(photo.path, 'base64');

    callGoogleVisionAsync(base64image);
  };

  function renderCamera() {
    if (device == null) {
      return (
        <View>
          <Text style={{color: '#fff'}}>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          {device != null && hasPermission && (
            <>
              <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
                frameProcessorFps={5}
              />
              <TouchableOpacity
                onPress={onPressButton}
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'green',
                  borderWidth: 1,
                  zIndex: 10,
                }}>
                <Text>Click me</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      );
    }
  }

  return <View style={{flex: 1, width: '100%'}}>{renderCamera()}</View>;
};

export default CameraPage;
