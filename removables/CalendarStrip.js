import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={'#3343CE'}
        calendarHeaderStyle={{ color: 'white' }}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white' }}
        iconContainer={{ flex: 0.1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
