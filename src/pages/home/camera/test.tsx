import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import Button from 'src/components/atoms/button/Button';
import DefaultText from 'src/components/atoms/text/DefaultText';

type Props = {};

const CameraPage = (props: Props) => {
  const [hasPermission, setHasPermission] = useState<boolean | any>(false);
  const devices = useCameraDevices();
  const device: any = devices.back;
  const camera = useRef(null) as any;
  console.log({
    device: device,
  });

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const onPressButton = async () => {
    console.log(camera.current);
    console.log(123);
    const photo = await camera.current.takePhoto({
      flash: 'off',
      qualityPrioritization: 'speed',
    });

    console.log(photo);
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
        <View style={{flex: 1}}>
          {device != null && hasPermission && (
            <>
              <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
              />
              <Text> Too much code, I delete something here </Text>
            </>
          )}
        </View>
      );
    }
  }

  return <View style={{flex: 1}}>{renderCamera()}</View>;
};

export default CameraPage;
