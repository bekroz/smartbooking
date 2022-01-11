import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { QuitSvg } from '../../../../assets/icons/SvgIcons';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
// Icons

export default function StatusModal() {
  return (
    <View style={[styles.container, POSITIONING.center]}>
      <View style={styles.modalBlock}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            marginTop: 20,
            marginBottom: 40,
            ...POSITIONING.center,
          }}>
          <Text style={styles.optionsTopTitle}>Статус</Text>
          <TouchableOpacity
            style={{
              right: 0,
              bottom: 10,
              position: 'absolute',
              padding: 5,
            }}>
            <QuitSvg />
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
