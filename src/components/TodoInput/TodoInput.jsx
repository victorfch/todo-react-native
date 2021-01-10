import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TodoInput = ({ onNewTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");
  return (
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
          onNewTodo({ text: newTodoText, done: false });
          setNewTodoText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TodoInput;
