import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../../constants/theme';
// Icons
import { QuitSvg } from '../../../assets/icons/SvgIcons';
import { connect } from 'react-redux';
import ReactNativePickerModule from 'react-native-picker-module';
import { Picker } from '@react-native-picker/picker';

const DashboardModal = ({ hotelID, hotelList }) => {
  // const modalShow
  // const modalClose = () => {
  //   // console.log('Modal closed');
  // };
  // return (
  //   <Modal
  //     animationType={'fade'}
  //     transparent={true}
  //     visible={modalShow}
  //     onRequestClose={modalClose}
  //   />
  // );
  const pickerRef = useRef();
  const [value, setValue] = useState();

  // const getHotelName = hotelList => {
  //   hotelList.map(hotel => {
  //     if (hotel.id) {
  //       return hotel;
  //     }
  //   });
  // };
  // const dataset_2 = [
  //   {
  //     value: 101,
  //     label: 'Javascript',
  //   },
  // ];

  const [chosenHotelID, setChosenHotelID] = useState(hotelID);

  // const hotelName = hotelList => {
  //   {
  //     hotelList.map(hotel => (
  //       <TouchableOpacity style={{ marginBottom: SIZES.base }} key={hotel.id}>
  //         <Text style={[styles.options, styles.chosenOptionStyle]}>
  //           {hotel.name}
  //         </Text>
  //       </TouchableOpacity>
  //     ));
  //   }
  // };

  renderHotelNames = () => {
    {
      hotelList?.map(hotel => (
        <TouchableOpacity style={{ marginBottom: SIZES.base }} key={hotel.id}>
          <Text style={[styles.options, styles.chosenOptionStyle]}>
            {hotel.name}
          </Text>
        </TouchableOpacity>
      ));
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <QuitSvg />
          </TouchableOpacity>
        </View>
        <View style={POSITIONING.align}>
          {/* <Picker
            style={{ borderBottomColor: 'black' }}
            selectedValue={chosenHotelID}
            onValueChange={hotelID => setChosenHotelID(hotelID)}>
            {hotelList &&
              hotelList?.map(hotel, index => (
                <Picker.Item
                  style={styles.input}
                  label={hotel.name}
                  value={hotel.name}
                  key={index}
                />
              ))}
          </Picker> */}
          <FlatList
            data={hotelList}
            renderItem={renderHotelNames}
            keyExtractor={(hotel, index) => hotel.toString()}
            numColumns={2}
          />
          {/* <>
          
            <ReactNativePickerModule
              pickerRef={pickerRef}
              value={value}
              title={'Select a language'}
              items={{}}
              titleStyle={{ color: 'white' }}
              itemStyle={{ color: 'white' }}
              selectedColor="#FC0"
              selectedValue={'red'}
              confirmButtonEnabledTextStyle={{ color: 'white' }}
              confirmButtonDisabledTextStyle={{ color: 'grey' }}
              cancelButtonTextStyle={{ color: 'white' }}
              confirmButtonStyle={{
                backgroundColor: 'rgba(0,0,0,1)',
              }}
              cancelButtonStyle={{
                backgroundColor: 'rgba(0,0,0,1)',
              }}
              contentContainerStyle={{
                backgroundColor: 'rgba(0,0,0,1)',
              }}
              onCancel={() => {
                console.log('Cancelled');
              }}
              onValueChange={value => {
                // console.log('value: ', value);
                setValue(value);
              }}
            />
          </> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

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

function mapStateToProps({ hotelReducer }) {
  const { hotelID, hotelList } = hotelReducer;
  return {
    hotelID,
    hotelList,
  };
}

export default connect(mapStateToProps)(DashboardModal);
