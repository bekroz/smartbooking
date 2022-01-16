import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const COLORS = {
  blackBackground: '#000000',
  black: '#0F0F0F',
  darkBackground: '#15191E',
  segmentedControlBackgroundColor: '#29303B',
  grayPlaceholder: '#212831',
  grayPlaceholderBorder: '#404040',
  grayText: '#657282',
  grayCirclePart: '#464545',
  grayDivider: '#383A3C',
  grayEmptyArc: '#464444',
  blue: '#5F85DB',
  blueCircle: '#5B93FF',
  darkBlue: '#485C8A',
  softBlue: '#3D56B2',
  yellow: '#E3C763',
  orange: '#E46B45',
  coral: '#E3766F',
  statsLine: '#EB6161',
  greenProgress: '#0ECC38',
  greenCircle: '#4BBD64',
  purple: '#740DF7',
  pinkCircle: '#BE66D4',
  white: '#FFFFFF',
  red: '#FF0000',
};
const SIZES = {
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

const POSITIONING = {
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

const DarkTheme = {
  flex: 1,
  backgroundColor: COLORS.darkBackground,
};

const COLOR_PALETTE = [
  '#5B93FF',
  '#E46B45',
  '#E3C763',
  '#4BBD64',
  '#BE66D4',
  '#E3766F',
  '#740DF7',
  '#FF0000',
  '#24A19C',
  '#F7C9F3',
  '#17D7A0',
  '#FF0075',
  '#125C13',
  '#406882',
  '#8E806A',
  '#6166B3',
];

export { COLORS, SIZES, POSITIONING, DarkTheme, COLOR_PALETTE };
