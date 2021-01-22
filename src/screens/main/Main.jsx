import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TodoList from "todoList/src/components/TodoList";
import TodoInput from "todoList/src/components/TodoInput";

const initialTodos = [
  { text: "Learn react native", done: false },
  { text: "Go to England", done: false },
  { text: "Eat five pieces of fruit", done: true },
  { text: "Learn how to dance", done: false },
];

const MainScreen = ({ navigation }) => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <SafeAreaView style={styles.container}>
      <TodoInput
        onNewTodo={(todo) => setTodos([todo, ...todos])}
      />
      <TodoList
        todos={todos}
        onDelete={(newTodos) => setTodos(newTodos)}
        onUpdate={(newTodos) => setTodos(newTodos)}
        onEdit={(todo) => {
          navigation.navigate("Edit", {
            todo
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default MainScreen;
