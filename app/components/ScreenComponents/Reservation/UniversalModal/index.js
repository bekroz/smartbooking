import React from 'react';
import {
  Modal,
  ModalContent as LandingModalContent,
} from 'react-native-modals';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../../constants';
// Icons
import { CloseSvg } from '../../../../assets/icons/SvgIcons';

const UniversalModal = ({
  visible,
  onTouchOutside,
  onQuitPress,
  onItemSelection,
  data,
  defaultChosenItem,
  menuTitle,
}) => {
  return (
    <Modal visible={visible} onTouchOutside={onTouchOutside}>
      <View style={styles.borderCoverUp}>
        <LandingModalContent style={styles.landingModalContent}>
          <View style={styles.modalBlock}>
            <View style={{ marginBottom: 24 }}>
              <View
                style={{
                  ...POSITIONING.center,
                }}>
                <Text style={styles.optionsTopTitle}>{menuTitle}</Text>
              </View>
              <TouchableOpacity style={styles.quitButton} onPress={onQuitPress}>
                <CloseSvg />
              </TouchableOpacity>
            </View>

            {data.map((item, index) => (
              <View style={POSITIONING.align} key={index}>
                <TouchableOpacity
                  style={{ marginBottom: SIZES.base }}
                  onPress={() => onItemSelection(item)}>
                  <Text
                    style={
                      defaultChosenItem.status == item.status
                        ? styles.chosenOptionStyle
                        : styles.defaultOptionStyle
                    }>
                    {item.displayName}
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

export default UniversalModal;
