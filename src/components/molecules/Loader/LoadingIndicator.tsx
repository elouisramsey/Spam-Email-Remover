import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

import DefaultText from 'src/components/atoms/text/DefaultText';
import {Colors} from 'src/styles';

type Props = {
  loading: boolean;
  activityIndicatorWrapper?: object;
  information?: string;
};

const LoadingIndicator = ({
  loading,
  activityIndicatorWrapper,
  information,
}: Props) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View
          style={[styles.activityIndicatorWrapper, activityIndicatorWrapper]}>
          <ActivityIndicator
            color="#0F375A"
            hidesWhenStopped={true}
            animating={loading}
            size="large"
          />
          {information && (
            <DefaultText style={styles.information}>{information}</DefaultText>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  information: {
    fontSize: 13,
    color: Colors.PRIMARY,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 10,
  },
});
