import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ExpenseCard from "../components/ExpenseCard";

const ExpenseList = ({ expenses }) => {
  const renderExpenseItem = (itemData) => {
    return <ExpenseCard expense={itemData.item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.expenseContainer}>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={renderExpenseItem}
          style={styles.expenseList}
        />
      </View>
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: "100%",
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 16,
  },
  expenseContainer: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  expenseList: {
    flex: 1,
    width: "100%",
  },
});
