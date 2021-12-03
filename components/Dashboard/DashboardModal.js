import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../constants/theme';
import { Overlay } from 'react-native-elements';
import quit from '../../images/quit.png';

export default function DashboardModal() {
  // const modalShow
  // const modalClose = () => {
  //   console.log('Modal closed');
  // };
  // return (
  //   <Modal
  //     animationType={'fade'}
  //     transparent={true}
  //     visible={modalShow}
  //     onRequestClose={modalClose}
  //   />
  // );
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
        opacity: 0.9,
      }}>
      <View style={styles.modalBlock}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.optionsTopTitle}>Выберите объект</Text>
          <TouchableOpacity
            style={{
              right: 0,
              position: 'absolute',
              padding: 5,
            }}>
            <Image source={quit} />
          </TouchableOpacity>
        </View>
        <View style={POSITIONING.align}>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={[styles.options, styles.chosenOptionStyle]}>
              Kukaldosh Hotel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={styles.options}>Sherdor Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={styles.options}>Shohizinda Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalBlock: {
    backgroundColor: '#0F0F0F',
    width: 340,
    height: 175,
    borderRadius: 12,
  },
  optionsTopTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: SIZES.fontWeight3,
  },
  options: {
    fontSize: SIZES.body4,
    color: COLORS.white,
  },
  chosenOptionStyle: {
    color: COLORS.blue,
    fontWeight: SIZES.fontWeight2,
  },
});
