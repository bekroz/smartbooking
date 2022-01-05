import { useSelector } from 'react-redux';
import { noDottedTruncator, numberWithSpaces } from '../../../../../helpers';
import { store } from '../../../../../redux/store';

const { channelsData } = store.getState().channelsReducer;
// const data = useSelector(state => state.channelsReducer);

// console.log('====================================');
// console.log(data);
// console.log('====================================');
const filteredData = channelsData.map(source => {
  const { source_name, revenue } = source;
  return {
    label: noDottedTruncator(source_name, 12),
    value: revenue,
    labelFontColor: '#FFFFFF',
    toolbarButtonColor: '#FFFFFF',
  };
});

console.log(filteredData);
const palette = [
  '#5B93FF',
  '#E46B45',
  '#E3C763',
  '#4BBD64',
  '#BE66D4',
  '#E3766F',
];
const defaultDataLabel = filteredData[0]?.label;
const defaultDataValue = filteredData[0]?.value;

const chartDataConfig = {
  chart: {
    // caption: 'Split of Revenue by Product Categories',
    // subCaption: 'Last year',
    // numberPrefix: 'UZS',
    numberSuffix: ' UZS',
    defaultCenterLabel: `${defaultDataLabel}: ${defaultDataValue}`,
    centerLabel: '$label: $value',
    centerLabelColor: '#FFFFFF',
    baseFontColor: '#FFFFFF',
    toolTipBgColor: '#212831',
    toolTipBorderColor: '#212831',
    // labelDistance: 20,
    thousandSeparator: '$value',
    plottooltext: '$value UZS',
    decimals: '0',
    theme: 'fusion',
    plotBorderThickness: 5,
    startingAngle: 90,
    animateClockwise: true,
    enableSlicing: 0,
    bgColor: '#212831',
    doughnutRadius: '75%',
    paletteColors: palette,
    borderThickness: 20,
    patternAngle: 120,
    enableSmartLabels: 1,
    pieRadius: 65,
    showLabels: 0,
    showValues: 0,
    decimals: 1,
    showLegend: 0,
    legendPosition: 'right',
    legendItemFontSize: 12,
    legendItemFontColor: '#FFFFFF',
    // chartRightMargin: 60,
    // legendItemFont: 'SF Pro Display',
    // interactiveLegend: 1,
    // legendScrollEnabled: 0,
    minimiseWrappingInLegend: 0,
  },
  data: filteredData,
};

const libraryPath = Platform.select({
  android: { uri: 'file:///android_asset/fusioncharts.html' },
  ios: require('../../../../../../assets/fusioncharts.html'),
});

export { chartDataConfig, libraryPath };
