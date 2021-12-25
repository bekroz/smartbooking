<Card containerStyle={styles.card} title="Revenue">

{/* Card Content */}
{!loading ? (
  <>
    

    <View style={{ flexDirection: 'row' }}>
      {/* LEFT Donut View */}
      <View style={styles.donutBlock}>
        <DonutView />
      </View>
      {/* Color and Title */}
      <View style={{ flex: 1, top: -15 }}>
        {/* Dots */}
        <ByUserDot />
        <TelephoneDot />
        <SitesDot />
        <BookingDot />
        <TraminaDot />
        <DoloresDot />
        <OtherDot />
      </View>
    </View>
  </>
) : (
  <ActivityIndicator
    animating={true}
    color={COLORS.white}
    marginTop={70}
  />
)}
</Card>
{/* SECOND Card */}
<Card containerStyle={styles.card} title="Revenue">
{/* Card Content View */}
{!loading ? (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
      <View>
        <Text
          style={{
            fontWeight: SIZES.fontWeight1,
            fontSize: 16,
            color: COLORS.white,
          }}>
          К-ство проданных ночей
        </Text>
        <Text
          style={{
            fontWeight: SIZES.fontWeight1,
            fontSize: 10,
            color: COLORS.grayText,
          }}>
          Room Nights
        </Text>
      </View>
      <Text style={{ color: COLORS.grayText }}>
        {totalSoldNights} ночей
      </Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
      {/* LEFT Donut View */}
      <View style={styles.donutBlock}>
        {/* <Donut /> */}
        <DonutView />
      </View>
      {/* Color and Title */}
      <View style={{ flex: 1, top: -15 }}>
        <ByUserDot />
        <TelephoneDot />
        <SitesDot />
        <BookingDot />
        <TraminaDot />
        <DoloresDot />
        <OtherDot />
      </View>
    </View>
  </>
) : (
  <ActivityIndicator
    animating={true}
    color={COLORS.white}
    marginTop={70}
  />
)}
</Card>
{/* THIRD Card */}
<Card containerStyle={[styles.card, { height: 280 }]} title="Revenue">
{/* Card Content */}
{!loading ? (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
      <View
        style={{
          width: 167,
          marginRight: 10,
        }}>
        <Text
          style={{
            fontWeight: SIZES.fontWeight1,
            fontSize: 16,
            color: COLORS.white,
          }}>
          Средняя цена номера
        </Text>
      </View>
      <Text style={{ color: COLORS.grayText }}>
        Всего {totalRevenue} UZS
      </Text>
    </View>
    {/* Color Line and Title */}
    <View
      style={{
        marginBottom: 5,
      }}>
      {channelsData?.map((dot, index) => (
        <>
          <View style={styles.dotBlock}>
            {dot?.source_name === 'От стойки' && (
              <ByUserLine lineWidth={100} key={index} />
            )}

            {/* {dot?.source_name === 'Телефон' && (
              <TelephoneLine lineWidth={50} />
            )}

            {dot?.source_name === 'Dolores' && (
              <DoloresLine lineWidth={50} />
            )}

            {dot?.source_name === 'Сайт' && (
              <SitesLine lineWidth={50} />
            )}
            {dot?.source_name === 'Booking.com' && (
              <BookingLine lineWidth={50} />
            )}

            {dot?.source_name === 'Трамина' && (
              <TraminaLine lineWidth={50} />
            )} */}

            <Text style={{ color: COLORS.white }}>
              {numberWithSpaces(dot?.average_revenue)}{' '}
              {dot?.source_name}
            </Text>
            {/* <BookingLine  */}
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 115,
                marginRight: 5,
              }}>
              <View
                style={[styles.dotBlock, styles.thirdCardDotMargin]}>
                {dot?.sourceName === 'От стойки' ? (
                  <ByUserDot />
                ) : (
                  dot?.sourceName === 'Booking.com' && <BookingDot />
                )}
              </View>
            </View>
          </View>
        </>
      ))}
      {/* DOTS */}
    </View>
  </>
) : (
  <ActivityIndicator
    animating={true}
    color={COLORS.white}
    marginTop={110}
  />
)}
</Card>