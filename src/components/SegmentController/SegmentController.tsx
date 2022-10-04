import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Animated, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Colors} from 'src/styles';
import DefaultText from '../atoms/text/DefaultText';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SegmentedControl = (props: {
  tabs: any[];
  onChange: (arg0: any) => void;
  currentIndex: number;
  segmentedControlBackgroundColor: any;
  paddingVertical: any;
  activeSegmentBackgroundColor: any;
  textColor: any;
  activeTextColor: any;
}) => {
  const translateValue = (width - 4) / props?.tabs?.length;
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

  const memoizedTabPressCallback = React.useCallback(index => {
    props?.onChange(index);
  }, []);

  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: props?.currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [props?.currentIndex]);

  return (
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          backgroundColor: props?.segmentedControlBackgroundColor,
        },
        {
          paddingVertical: props?.paddingVertical,
        },
      ]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'absolute',
            width: (width - 4) / props?.tabs?.length,
            top: 0,
            marginVertical: 2,
            marginHorizontal: 2,
            backgroundColor: props?.activeSegmentBackgroundColor,
            borderRadius: 8,
            ...shadow,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}></Animated.View>
      {props?.tabs.map((tab, index) => {
        const isCurrentIndex = props?.currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}>
            <DefaultText
              style={[styles.textStyles]}
              color={isCurrentIndex ? '#fff' : props?.textColor}>
              {tab}
            </DefaultText>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderRadius: 10,
    width: width,
    justifyContent: 'center',
 height: 40
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
});

SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
};

SegmentedControl.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: Colors.PRIMARY,
  activeSegmentBackgroundColor: Colors.SECONDARY,
  textColor: '#fff',
  activeTextColor: '#fff',
  paddingVertical: 8,
};

export default SegmentedControl;
