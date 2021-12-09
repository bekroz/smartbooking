import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native-modals';
import { ModalContent as LandingModalContent } from 'react-native-modals';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
import useApi from '../../../utils/useApi';
import quitIcon from '../../../images/quit.png';

const HotelModalBox = () => {
  const { getAllHotelPropertiesData } = useApi();

  const [toggleHotelListModal, setToggleHotelListModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hotelList, setHotelList] = useState(null);
  const [chosenHotelID, setChosenHotelID] = useState(null);

  const getHotelList = async () => {
    setLoaded(false);
    try {
      await getAllHotelPropertiesData().then(response => {
        setHotelList(response);
        console.log(response[0].name);
        setLoaded(true);
        setToggleHotelListModal(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  function handleChosenHotel(hotelID) {
    // setToggleHotelListModal(!toggleHotelListModal);
    // alert(`CHOSEN HOTEL => ${hotel}`);
    setChosenHotelID(hotelID);
    console.log(hotelID);
  }

  useEffect(async () => {
    getHotelList();
  }, []);

  return (
    <>
      {loaded ? (
        <Modal
          visible={toggleHotelListModal}
          style={{ backgroundColor: '#9d9ea3' }}
          onTouchOutside={() => setToggleHotelListModal(false)}>
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
                    onPress={() => setToggleHotelListModal(false)}>
                    <Image source={quitIcon} />
                  </TouchableOpacity>
                </View>

                {hotelList?.map((hotel, index) => (
                  <View style={POSITIONING.align}>
                    <TouchableOpacity
                      style={{ marginBottom: SIZES.base }}
                      onPress={() => handleChosenHotel(hotel.id)}
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
      ) : (
        <ActivityIndicator animating={true} color={COLORS.white} />
      )}
    </>
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
