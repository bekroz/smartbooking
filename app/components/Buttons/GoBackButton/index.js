import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBackSvg } from '../../../assets/icons/SvgIcons';

const GoBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        left: 0,
        marginLeft: 20,
        padding: 15,
      }}>
      <GoBackSvg />
    </TouchableOpacity>
  );
};

export default GoBackButton;
