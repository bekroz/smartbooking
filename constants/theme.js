import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  blackBackground: '#000000',
  black: '#0F0F0F',
  darkBackground: '#15191E',
  grayPlaceholder: '#212831',
  grayPlaceholderBorder: '#404040',
  grayText: '#657282',
  grayCirclePart: '#464545',
  grayDivider: '#383A3C',
  blue: '#5F85DB',
  blueCircle: '#5B93FF',
  darkBlue: '#485C8A',
  softBlue: '#3D56B2',
  yellow: '#E3C763',
  orange: '#E46B45',
  coral: '#E3766F',
  coralStatLine: '#EB6161',
  greenProgress: '#0ECC38',
  greenCircle: '#4BBD64',
  purple: '#740DF7',
  pinkCircle: '#BE66D4',
  white: '#FFFFFF',
  red: '#FF0000',
};
export const SIZES = {
  // global sizes
  base: 8,
  radius1: 6,
  radius2: 12,
  padding: 24,
  // title sizes
  textFont: 14,
  pageTitle: 22,
  mainTitle: 36,
  largeTitle: 40,
  blockHeight: 54,
  blockWidth: 327,
  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 20,
  body4: 18,
  body5: 16,
  body6: 14,
  body7: 13,
  body8: 12,
  // font weights
  fontWeight0: '400',
  fontWeight1: '500',
  fontWeight2: '600',
  fontWeight3: '700',
  // app dimensions
  width,
  height,
};
export const FONTS = {
  mediumTitle: { fontFamily: 'SF Pro Display', fontSize: SIZES.mediumTitle },
  largeTitle: { fontFamily: 'SF Pro Display', fontSize: SIZES.largeTitle },
  mainTitle: { fontFamily: 'SF Pro Display', fontSize: SIZES.mainTitle },
  h1: { fontFamily: 'SF Pro Display', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'SF Pro Display', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'SF Pro Display', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'SF Pro Display', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'SF Pro Display', fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'SF Pro Display',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'SF Pro Displa',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'SF Pro Displa',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const POSITIONING = {
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  align: {
    alignItems: 'center',
  },
  justify: {
    justifyContent: 'center',
  },
};

export const SAFEAREASTYLE = {
  flex: 1,
  backgroundColor: COLORS.darkBackground,
};

export const LOADERSTYLE = {
  flex: 1,
  backgroundColor: COLORS.blackBackground,
};

const theme = { COLORS, SIZES, FONTS, SAFEAREASTYLE, LOADERSTYLE };

export default theme;
