import { View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import { POSITIONING } from '../../constants/theme';

export default class CircleExample extends React.Component {
  render() {
    return (
      <View style={POSITIONING.center}>
        <MultiArcCircle
          radius={40}
          intervals={[
            { start: 0, end: 140 },
            { start: 220, end: 360 },
          ]}
          color="#0ECC38"
          width={10}
        />
      </View>
    );
  }
}
