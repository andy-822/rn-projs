import { View, Text, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";

import TotalDisplay from "../../components/TotalDisplay";
import ExpenseList from "../../components/ExpenseList";
import IconButton from "../../components/IconButton";

const AllExpensesScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      title: "expense 1",
      date: new Date().toLocaleDateString(),
      cost: 14.99,
    },
    {
      id: 1,
      title: "expense 2",
      date: new Date().toLocaleDateString(),
      cost: 11.99,
    },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="add"
            color="black"
            onPress={navigateToAddExpenseScreen}
          />
        );
      },
    });
  }, [navigation]);

  const navigateToAddExpenseScreen = () => {
    navigation.navigate("AddExpense");
  };

  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].cost;
  }

  console.log("total: ", total);

  return (
    <View style={styles.container}>
      <View>
        <TotalDisplay amount={total} duration={"total"} />
      </View>
      <View>
        <ExpenseList expenses={expenses} style={styles.expenseContainer} />
      </View>
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
  },
  expenseContainer: {},
});
