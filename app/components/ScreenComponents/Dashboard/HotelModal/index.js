import React from 'react';
import {
  Modal,
  ModalContent as LandingModalContent,
} from 'react-native-modals';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants/theme';
// Icons
import { CloseSvg } from '../../../../assets/icons/SvgIcons';

const HotelModal = ({
  visible,
  onTouchOutside,
  onQuitPress,
  onHotelChosen,
  hotelList,
  chosenHotelID,
}) => {
  return (
    <Modal visible={visible} onTouchOutside={onTouchOutside}>
      <View style={styles.borderCoverUp}>
        <LandingModalContent style={styles.landingModalContent}>
          <View style={styles.modalBlock}>
            <View style={{ marginBottom: 24 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.optionsTopTitle}>Выберите объект</Text>
              </View>
              <TouchableOpacity style={styles.quitButton} onPress={onQuitPress}>
                <CloseSvg />
              </TouchableOpacity>
            </View>

            {hotelList?.map((hotel, index) => (
              <View style={POSITIONING.align}>
                <TouchableOpacity
                  style={{ marginBottom: SIZES.base }}
                  onPress={() => onHotelChosen(hotel)}
                  key={index}>
                  <Text
                    style={
                      chosenHotelID == hotel.id
                        ? styles.chosenOptionStyle
                        : styles.defaultOptionStyle
                    }>
                    {hotel.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </LandingModalContent>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  borderCoverUp: {
    backgroundColor: COLORS.black,
  },
  landingModalContent: {
    backgroundColor: COLORS.black,
    width: SIZES.width - 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalBlock: {
    width: 340,
    height: 'auto',
    backgroundColor: COLORS.black,
  },
  optionsTopTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: SIZES.fontWeight3,
  },
  quitButton: {
    right: 5,
    position: 'absolute',
    padding: 5,
    top: 5,
  },
  chosenOptionStyle: {
    color: COLORS.blue,
    fontSize: SIZES.body4,
    fontWeight: SIZES.fontWeight2,
  },
  defaultOptionStyle: {
    color: COLORS.white,
    fontSize: SIZES.body4,
    fontWeight: SIZES.fontWeight0,
  },
});

export default HotelModal;
