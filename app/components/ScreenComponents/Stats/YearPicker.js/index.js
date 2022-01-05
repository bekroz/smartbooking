import React, { useRef } from 'react';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import IOSPicker from 'react-native-ios-picker';
// Helpers
import { yearsArray } from '../../../../helpers';
// Redux
import { store } from '../../../../redux/store';
import { setChosenYear } from '../../../../redux/actions';

const YearPicker = ({ chosenYear, setYearModalVisible }) => {
  const pickerRef = useRef();

  function handleYearChange(updatedYear) {
    console.log('value: ', updatedYear);
    store.dateReducer.dispatch(setChosenYear(updatedYear));
    setYearModalVisible(false);
  }

  return (
    <>
      <SafeAreaView>
        <Button
          title="Select a language"
          onPress={() => pickerRef.current.show()}
        />
        <Text>Selected Item Text: {chosenYear}</Text>
      </SafeAreaView>
      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={chosenYear}
        title={'Select a language'}
        items={yearsArray}
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
        onValueChange={updatedYear => handleYearChange(updatedYear)}
      />
    </>
  );
};

export default YearPicker;

const styles = StyleSheet.create({});
// import React, { useRef, useState } from 'react';
// import { Button, SafeAreaView, Text } from 'react-native';
// import ReactNativePickerModule from 'react-native-picker-module';
// // import IOSPicker from 'react-native-ios-picker';
// import { Picker } from '@react-native-picker/picker';

// const App = () => {
//   const pickerRef = useRef();
//   const [value, setValue] = useState();
//   const dataset_1 = [1, 2, 'Java', 'Kotlin', 'C++', 'C#', 'PHP'];
//   const dataset_2 = [
//     {
//       value: 101,
//       label: 'Javascript',
//     },
//     {
//       value: 'golang_101',
//       label: 'Go',
//     },
//     {
//       value: 'kotlin_dsl',
//       label: 'Kotlin',
//     },
//     {
//       value: 'java_101',
//       label: 'Java',
//     },
//     {
//       value: 'cplusplus',
//       label: 'C++',
//     },
//     {
//       value: 'csharp_201',
//       label: 'C#',
//     },
//     {
//       value: 'php_201',
//       label: 'PHP',
//     },
//   ];
//   const data = ['a', 'b', 'c', 'd', 'e', 'f'];
//   const [selectedValue, setSelectedValue] = useState(null);

//   return (
//     <>
//       <SafeAreaView>
//         <Button
//           title="Select a language"
//           onPress={() => pickerRef.current.show()}
//         />
//         <Text style={{ color: 'red' }}>Selected Item Text: {value}</Text>
//         {/* <IOSPicker
//           data={data}
//           selectedValue={selectedValue}
//           onValueChange={(d, i) => setSelectedValue(d, i)}>
//           {YearsArray.map((item, index) => (
//             <Picker.Item key={index} label={item} value={item} />
//           ))}
//         </IOSPicker> */}
//       </SafeAreaView>
//       <ReactNativePickerModule
//         pickerRef={pickerRef}
//         value={value}
//         title={'Select a language'}
//         items={YearsArray}
//         titleStyle={{ color: 'white' }}
//         itemStyle={{ color: 'white' }}
//         selectedColor="red"
//         confirmButtonEnabledTextStyle={{ color: 'white' }}
//         confirmButtonDisabledTextStyle={{ color: 'grey' }}
//         cancelButtonTextStyle={{ color: 'white' }}
//         confirmButtonStyle={{
//           backgroundColor: 'rgba(0,0,0,1)',
//         }}
//         cancelButtonStyle={{
//           backgroundColor: 'rgba(0,0,0,1)',
//         }}
//         contentContainerStyle={{
//           backgroundColor: 'rgba(0,0,0,1)',
//         }}
//         onCancel={() => {
//           console.log('Cancelled');
//         }}
//         onValueChange={value => {
//           console.log('value: ', value);
//           setValue(value);
//         }}
//         chosenOptionStyle={{
//           color: 'red',
//         }}
//       />
//     </>
//   );
// };
