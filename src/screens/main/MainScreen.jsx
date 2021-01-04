import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoList from "todoList/src/components/TodoList";

const todos = [
  { text: "Learn react native", done: false },
  { text: "Go to England", done: false },
  { text: "Eat five pieces of fruit", done: true },
  { text: "Learn how to dance", done: false },
];

const MainScreen = () => (
  <View style={styles.container}>
    <Text style={styles.container__title}>To Do List</Text>
    <TodoList todos={todos} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container__title: {
    fontSize: 20,
  },
});

export default MainScreen;
