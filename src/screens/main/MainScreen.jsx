import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import TodoList from "todoList/src/components/TodoList";

const initialTodos = [
  { text: "Learn react native", done: false },
  { text: "Go to England", done: false },
  { text: "Eat five pieces of fruit", done: true },
  { text: "Learn how to dance", done: false },
];

const MainScreen = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container__title}>To Do List</Text>
      <View style={styles.row}>
        <TextInput
          onChangeText={(e) => setNewTodoText(e)}
          style={styles.search}
          value={newTodoText}
          placeholder="Example todo"
          autoCapitalize="words"
          clearButtonMode="always"
        />
        <Button
          title="Add"
          onPress={() => {
            const newTodo = { text: newTodoText, done: false };
            setTodos([newTodo, ...todos]);
            setNewTodoText("");
          }}
        />
      </View>
      <TodoList todos={todos} onDelete={setTodos} />
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
  search: {
    padding: 5,
    borderBottomWidth: 2,
    flex: 1,
  },
  row: {
    width: "80%",
    flexDirection: "row",
  },
});

export default MainScreen;
