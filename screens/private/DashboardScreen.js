import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
// Theme
import { COLORS, POSITIONING, SIZES } from '../../constants/theme';
// Icons
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import dropdown from '../../images/dropdown.png';
import addButton from '../../images/addButton.png';
// Components
import DayPick from '../../components/Dashboard/DayPick';
import PercentageCircle from '../../components/Dashboard/PercentageCircle';
import EmptyRoomsCircle from '../../components/Dashboard/EmptyRoomsCircle';

export default function DashboardScreen() {
  function dropdownClickHandler() {
    console.log('Clicked dropdown');
  }
  const [firstView, setFirstView] = useState(true);
  function handleViewChange() {
    setFirstView(!firstView);
  }

  function handleAddButtonPress() {
    alert('Add button has been fired!');
  }

  function handleArcBarPress() {
    alert('Arc Bar has been fired!');
  }

  const hoteldata = {
    name: 'Kukaldosh Hotel',
    comingGuests: 115,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <View style={[styles.hotelBar, POSITIONING.center]}>
        <TouchableOpacity
          style={styles.dropdownIconStyle}
          onClick={dropdownClickHandler}>
          <Text style={styles.hotelBarText}>{hoteldata.name}</Text>
          <Image source={dropdown} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateBlock}>
        <TouchableOpacity style={styles.ArrowIconStyle}>
          <Image source={leftArrow} />
        </TouchableOpacity>
        <Text style={styles.dateText}>Avgust 2021</Text>
        <TouchableOpacity style={styles.ArrowIconStyle}>
          <Image source={rightArrow} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', padding: 5, marginBottom: 0 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: SIZES.fontWeight0,
            color: COLORS.white,
          }}>
          Вторник
        </Text>
      </View>
      {/* Horizontal Calendar Day Picker */}
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: 60,
        }}>
        <DayPick />
      </View>
      {/* SemiCircle View goes here */}
      <View
        style={{
          width: SIZES.width,
          height: 170,
          flexDirection: 'row',
        }}>
        {/* FIRST ARC circle */}
        <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
          <MultiArcCircle
            radius={50}
            intervals={[
              { start: 0, end: 140 },
              { start: 220, end: 360 },
            ]}
            color="#0ECC38"
            width={10}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body2,
              fontWeight: SIZES.fontWeight1,
            }}>
            {hoteldata.comingGuests}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body5,
              fontWeight: SIZES.fontWeight0,
              position: 'absolute',
              bottom: 10,
            }}>
            Заезд
          </Text>
        </TouchableOpacity>
        {/* SECOND ARC circle */}
        <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
          <MultiArcCircle
            radius={50}
            intervals={[
              { start: 0, end: 140 },
              { start: 220, end: 360 },
            ]}
            color={COLORS.yellow}
            width={10}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body2,
              fontWeight: SIZES.fontWeight1,
            }}>
            {hoteldata.comingGuests}
          </Text>

          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body5,
              fontWeight: SIZES.fontWeight0,
              position: 'absolute',
              bottom: 10,
            }}>
            Выезд
          </Text>
        </TouchableOpacity>
        {/* THIRD ARC circle */}
        <TouchableOpacity onPress={handleArcBarPress} style={styles.arcBlock}>
          <MultiArcCircle
            radius={50}
            intervals={[
              { start: 0, end: 140 },
              { start: 220, end: 360 },
            ]}
            color={COLORS.blue}
            width={10}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body2,
              fontWeight: SIZES.fontWeight1,
            }}>
            {hoteldata.comingGuests}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.body5,
              fontWeight: SIZES.fontWeight0,
              position: 'absolute',
              bottom: 10,
            }}>
            Проживают
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.circleBottomTitles, { backgroundColor: 'red' }]}></View>
      {/* GRAY Boxes container */}
      <View style={{ marginBottom: 25 }}>
        {/* FIRST GRAY BOX starts here */}
        <View style={styles.grayBlock}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.blueBox}>
              <Text
                style={{ fontWeight: SIZES.fontWeight2, color: COLORS.white }}>
                123
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: SIZES.fontWeight2,
                  color: COLORS.white,
                }}>
                Новые
              </Text>
            </TouchableOpacity>
            <View
              style={{
                left: 80,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: SIZES.fontWeight0,
                  color: COLORS.grayText,
                }}>
                123 000 000 UZS
              </Text>
            </View>
            <TouchableOpacity
              style={{ padding: 10, right: 5, position: 'absolute' }}>
              <Image
                style={{ tintColor: COLORS.grayText }}
                source={rightArrow}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* SECOND GRAY BOX starts here */}
        <View style={styles.grayBlock}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.blueTextBlock}>
              <Text
                style={{ fontWeight: SIZES.fontWeight2, color: COLORS.blue }}>
                23
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: SIZES.fontWeight2,
                  color: COLORS.white,
                }}>
                Отмена
              </Text>
            </TouchableOpacity>
            <View
              style={{
                left: 145,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.grayText,
                  fontWeight: SIZES.fontWeight0,
                }}>
                2 1231$
              </Text>
            </View>
            <TouchableOpacity
              style={{ padding: 10, right: 5, position: 'absolute' }}>
              <Image
                style={{ tintColor: COLORS.grayText }}
                source={rightArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* THIRD GRAY BOX starts here */}
        <View style={styles.grayBlock}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.blueTextBlock}>
              <Text style={styles.blueText}>0</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: SIZES.fontWeight2,
                  color: COLORS.white,
                }}>
                Сообщения
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                fontWeight: SIZES.fontWeight0,
                color: COLORS.grayText,
                left: 140,
              }}>
              0000
            </Text>

            <TouchableOpacity
              style={{ padding: 10, right: 5, position: 'absolute' }}>
              <Image
                style={{ tintColor: COLORS.grayText }}
                source={rightArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 15,
        }}>
        {/* Left Text */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 999,
            width: SIZES.width / 1.5,
          }}
          onPress={handleViewChange}>
          <View
            style={{
              marginRight: 25,
              width: 150,
            }}>
            <>
              <Text
                style={{
                  fontWeight: SIZES.fontWeight2,
                  fontSize: SIZES.body2,
                  color: COLORS.white,
                }}>
                {firstView ? 'Загрузка' : 'Свободна'}
              </Text>

              <Text
                style={{
                  fontSize: SIZES.body6,
                  marginTop: 5,
                  color: COLORS.white,
                }}>
                на сегодня
              </Text>
            </>
          </View>
          {/* Middle Circle */}
          {firstView ? <PercentageCircle /> : <EmptyRoomsCircle />}
        </TouchableOpacity>
        {/* Plus Button */}
        <TouchableOpacity onPress={handleAddButtonPress}>
          <Image source={addButton} style={{ width: 48, height: 48 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hotelBar: {
    flexDirection: 'row',
  },
  hotelBarText: {
    fontWeight: SIZES.fontWeight1,
    fontSize: SIZES.body6,
    color: COLORS.white,
    padding: SIZES.base,
    // fontFamily: 'SF Pro Display',
  },
  dropdownIcon: {
    width: 11,
    height: 7,
    left: 244,
    top: 61,
    background: '#FFFFFF',
    borderRadius: 0.5,
  },
  dateBlock: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateText: {
    fontSize: SIZES.body2,
    color: COLORS.white,
    fontWeight: SIZES.fontWeight1,
  },
  ArrowIconStyle: {
    padding: 10,
    margin: 5,
  },
  dropdownIconStyle: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    fontSize: 40,
    fontWeight: '500',
    color: COLORS.blue,
  },
  circleBottomTitles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  grayBlock: {
    backgroundColor: '#212831',
    borderRadius: 5,
    borderColor: '#404040',
    borderWidth: 0.6,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 8,
  },
  blueBox: {
    backgroundColor: COLORS.blue,
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  blueTextBlock: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  blueText: {
    fontWeight: SIZES.fontWeight2,
    color: COLORS.blue,
  },
  arcBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 3,
    height: '100%',
  },
});
