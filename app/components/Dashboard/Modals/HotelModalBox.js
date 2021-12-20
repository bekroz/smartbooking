import React from 'react';
import { Modal } from 'react-native-modals';
import { ModalContent as LandingModalContent } from 'react-native-modals';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Icons
import { CloseSvg } from '../../../assets/icons/SvgIcons';

const HotelModalBox = ({
  visible,
  onTouchOutside,
  onQuitPress,
  onHotelChosen,
  hotelList,
  chosenHotelID,
}) => {
  // const [loaded, setLoaded] = useState(false);
  // const [hotelList, setHotelList] = useState(null);
  // const [chosenHotelID, setChosenHotelID] = useState(null);

  // const getHotelList = async () => {
  //   setLoaded(false);
  //   try {
  //     await getAllHotelPropertiesData().then(response => {
  //       setHotelList(response);
  //       // console.log(response[0].name);
  //       setLoaded(true);
  //       setToggleHotelListModal(true);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // function handleChosenHotel(hotelID) {
  //   // setToggleHotelListModal(!toggleHotelListModal);
  //   // alert(`CHOSEN HOTEL => ${hotel}`);
  //   setChosenHotelID(hotelID);
  //   // console.log(hotelID);
  // }

  // useEffect(async () => {
  //   getHotelList();
  // }, []);

  return (
    <Modal visible={visible} onTouchOutside={onTouchOutside}>
      <View style={{ backgroundColor: '#202020' }}>
        <LandingModalContent
          style={{
            backgroundColor: '#0f0f0f',
            width: SIZES.width - 20,
            borderRadius: 12,
          }}>
          <View style={styles.modalBlock}>
            <View style={{ marginBottom: 24 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.optionsTopTitle}>Выберите объект</Text>
              </View>
              <TouchableOpacity
                style={{
                  right: 0,
                  position: 'absolute',
                  padding: 5,
                  top: 5,
                }}
                onPress={onQuitPress}>
                <CloseSvg />
              </TouchableOpacity>
            </View>

            {hotelList?.map(hotel => (
              <View style={POSITIONING.align}>
                <TouchableOpacity
                  style={{ marginBottom: SIZES.base }}
                  onPress={() => onHotelChosen(hotel)}
                  key={hotel.id}>
                  <Text
                    style={
                      chosenHotelID == hotel.id
                        ? styles.chosenOptionStyle
                        : styles.defaultOptionStyle
                    }>
                    {hotel?.name}
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

export default HotelModalBox;

const styles = StyleSheet.create({
  modalBlock: {
    width: 340,
    height: 175,
    borderRadius: 12,
  },
  optionsTopTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: SIZES.fontWeight3,
  },
  defaultOptionStyle: {
    color: COLORS.white,
    fontSize: SIZES.body4,
    fontWeight: SIZES.fontWeight0,
  },
  chosenOptionStyle: {
    color: COLORS.blue,
    fontSize: SIZES.body4,
    fontWeight: SIZES.fontWeight2,
  },
});

