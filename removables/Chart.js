import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { SIZES } from '../constants/theme';

const Chart = props => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const processCategoryDataToDisplay = data => {
    //filter expenses with "confirmed " status
    let chartData = data.map(item => {
      let confirmExpenses = item.expenses.filter(a => a.status == 'C');
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter(a => a.y > 0);

    // Calculate the total expenses
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    // Calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map(item => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  };

  const setSelectCategoryByName = (name, data) => {
    let category = data.filter(a => a.name == name);
    setSelectedCategory(category[0]);
  };
  const RenderExpenseSummary = datas => {
    let data = processCategoryDataToDisplay(datas);

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name == item.name
              ? item.color
              : 'white',
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectCategoryByName(categoryName, data);
        }}>
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name == item.name
                  ? 'white'
                  : item.color,
              borderRadius: 5,
            }}
          />

          <Text
            style={{
              marginLeft: SIZES.base,
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? 'white'
                  : 'white',
            }}>
            {item.name}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? 'white'
                  : 'white',
            }}>
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: SIZES.padding }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  };

  let chartData = processCategoryDataToDisplay(props.data);
  let colorScales = chartData.map(item => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0,
  );

  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <VictoryPie
          data={chartData}
          labels={datum => `${datum.y}`}
          radius={({ datum }) =>
            selectedCategory && selectedCategory.name == datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          style={{
            labels: { fill: 'white' },
            // parent: {
            //     ...styles.shadow
            // },
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
          colorScale={colorScales}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: props => {
                        let categoryName = chartData[props.index].name;
                        setSelectCategoryByName(categoryName, props.data);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        <View style={{ position: 'absolute', top: '42%', left: '40%' }}>
          <Text style={{ textAlign: 'center' }}>{totalExpenseCount - 1}</Text>
          <Text style={{ textAlign: 'center' }}>Transactions</Text>
        </View>
      </View>
      {RenderExpenseSummary(props.data)}
    </View>
  );
};

export default Chart;
