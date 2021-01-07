import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    margin: 5,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    padding: 5,
    fontWeight: "bold",
    flex: 1,
  },
  textDone: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#aaa",
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18,
  },
});

const TodoList = ({ todos, onDelete }) => (
  <>
    {todos.map((todo) => (
      <View style={styles.listItem} key={todo.text}>
        <Text style={[styles.text, todo.done && styles.textDone]}>
          {todo.text}
        </Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            const newTodos = todos.filter((t) => t.text != todo.text);
            onDelete(newTodos);
          }}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    ))}
  </>
);

export default TodoList;
