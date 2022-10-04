import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: any,
) {
  let styles = {} as any;

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top?: any,
  right?: number,
  bottom?: number,
  left?: number,
) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top?: any,
  right?: number,
  bottom?: number,
  left?: number,
) {
return dimensions(top, right, bottom, left, 'padding');
}