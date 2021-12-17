import React from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  FlatList,
  Dimensions,
  ToastAndroid,
} from 'react-native';

const enappdIcon =
  'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm';
const widthConst = Dimensions.get('screen').width;

export default function App() {
  const IMAGES = {
    image1: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image2: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image3: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image4: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image5: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image6: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image7: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image9: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
    image10: 'https://miro.medium.com/focal/73/73/50/50/0*zRCiT1ifpI3711Wm',
  };
  const initialData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Susan Bert',
      image: '1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Neil Arms',
      image: '2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Carla Neice',
      image: '3',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba',
      title: 'Janice Hanner',
      image: '4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fcd91aa97f63',
      title: 'James Sullivan',
      image: '5',
    },
  ];
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        let response = await fetch(
          'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
        );
        let responseJson = await response.json();
        // console.log(responseJson);
        setListData(responseJson.result.concat(initialData));
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);

  function CardList({ room, index }) {
    return (
      <Card key={index} containerStyle={styles.card} title="Guests">
        {/* LEFT Side Content */}
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            left: -15,
          }}>
          {typeOfStay === 'arrived' && <GreenLineIndicatorSvg />}
          {typeOfStay === 'left' && <YellowLineIndicatorSvg />}
          {typeOfStay === 'living' && <BlueLineIndicatorSvg />}
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={{ marginBottom: 15, alignItems: 'center' }}>
            <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
              Дата заезда:
            </Text>
            <Text style={{ color: COLORS.white }}>
              {moment(room.checkin).format('DD.MM.YYYY')}
            </Text>
          </View>

          {/* Small Vertical Divider */}
          <Divider
            orientation="vertical"
            width={0.5}
            left={45}
            top={45}
            height={12}
            color={COLORS.blue}
            position="absolute"
          />
          <View
            style={{
              marginBottom: 20,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text style={{ color: COLORS.grayText, marginBottom: 3 }}>
              Дата выезда:
            </Text>
            <Text style={{ color: COLORS.white }}>
              {moment(room?.checkout).format('DD.MM.YYYY')}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <MoonSvg />
            <Text style={{ color: COLORS.white }}> {room?.nights}</Text>
            <View style={{ marginLeft: 10 }}>
              <PersonSvg />
            </View>
            <Text style={{ color: COLORS.white }}> {room?.adults}</Text>
          </View>
        </View>

        <Divider
          orientation="vertical"
          leftWidth={1}
          left={115}
          height={130}
          color="#404040"
          position="absolute"
        />

        {/* LEFT-SIDE content */}
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            left: 110,
            marginLeft: 20,
            flex: 1,
            marginRight: 10,
          }}>
          {/* GuestDetailsView */}
          <View
            style={{
              height: 150,
              width: 170,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.channelName}>
                {wordTruncator(room?.source, 15)}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.body7,
                  color: COLORS.white,
                  fontWeight: SIZES.fontWeight0,
                }}>
                22 Окт
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: '#657282',
                  fontSize: 16,
                  fontWeight: SIZES.fontWeight2,
                  marginBottom: 4,
                }}>
                Shahzoda Test
              </Text>
              <Text style={{ color: COLORS.white, marginBottom: 4 }}>
                {room.room
                  ? wordTruncator(room.name, 20)
                  : wordTruncator(room.roomType.name, 20)}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  marginBottom: 18,
                }}>
                {room.room ? room.name : room.roomType.short_name}
              </Text>
              <Text style={[styles.greenPriceText, styles.equalMargin]}>
                {numberWithSpaces(room.sum)} UZS
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={CardList}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.list}
        style={{ backgroundColor: 'red' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: widthConst,
    flex: 1,
  },
  enappdWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  enappdIcon: {
    width: 100,
    height: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  itemText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
});
