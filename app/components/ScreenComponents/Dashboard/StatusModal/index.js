import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants/theme';
// Icons
import quit from '../../images/quit.png';

export default function StatusModal() {
  return (
    <View style={[styles.container, POSITIONING.center]}>
      <View style={styles.modalBlock}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 40,
          }}>
          <Text style={styles.optionsTopTitle}>Статус</Text>
          <TouchableOpacity
            style={{
              right: 0,
              bottom: 10,
              position: 'absolute',
              padding: 5,
            }}>
            <Image source={quit} />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 50 }}>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={[styles.options, styles.chosenOptionStyle]}>
              Подтверждено
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={styles.options}>Оплачено</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: SIZES.base }}>
            <Text style={styles.options}>Подтверждено</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    opacity: 0.9,
  },
  modalBlock: {
    backgroundColor: '#0F0F0F',
    width: 340,
    height: 270,
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
