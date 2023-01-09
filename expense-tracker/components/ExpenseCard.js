import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExpenseCard = ({ expense }) => {
  return (
    <View style={styles.container}>
      <View style={styles.expenseCard}>
        <View style={styles.titleDate}>
          <Text style={styles.titleText}>{expense.title}</Text>
          <Text>{expense.date}</Text>
        </View>
        <View style={styles.cost}>
          <Text>{expense.cost}</Text>
        </View>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    padding: 8,
  },
  expenseCard: {
    backgroundColor: "red",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
  },
  titleDate: {
    backgroundColor: "green",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 3,
  },
  titleText: {
    fontWeight: "bold",
  },
  cost: {
    backgroundColor: "azure",
    height: "100%",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
  },
});
