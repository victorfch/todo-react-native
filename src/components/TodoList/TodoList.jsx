import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    margin: 5,
    width: "80%",
  },
  text: {
    padding: 5,
    fontWeight: "bold",
  },
  textDone: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#aaa",
  },
});

const TodoList = ({ todos }) => (
  <>
    {todos.map((todo) => (
      <View style={styles.listItem}>
        <Text
          style={[styles.text, todo.done && styles.textDone]}
          key={todo.text}
        >
          {todo.text}
        </Text>
      </View>
    ))}
  </>
);

export default TodoList;
