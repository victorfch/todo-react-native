import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import TodoList from "todoList/src/components/TodoList";
import TodoInput from "todoList/src/components/TodoInput";

const initialTodos = [
  { text: "Learn react native", done: false },
  { text: "Go to England", done: false },
  { text: "Eat five pieces of fruit", done: true },
  { text: "Learn how to dance", done: false },
];

const MainScreen = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container__title}>To Do List</Text>
      <TodoInput onNewTodo={(todo) => setTodos([todo, ...todos])} />
      <TodoList todos={todos} onDelete={setTodos} onUpdate={setTodos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
  container__title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default MainScreen;
