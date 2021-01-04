import React from "react";
import { Text } from "react-native";

const TodoList = ({ todos }) => (
  <>
    {todos.map(
      (todo) => !todo.done && <Text key={todo.text}>{todo.text}</Text>
    )}
  </>
);

export default TodoList;
