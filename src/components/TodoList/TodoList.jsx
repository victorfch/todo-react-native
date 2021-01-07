import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  listItem: {
    marginLeft: 40,
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
  separator: {
    height: 1,
    width: "86%",
    marginLeft: "14%",
    backgroundColor: "#CED0CE",
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const TodoList = ({ todos, onDelete, onUpdate }) => {
  renderItem = (todo) => (
    <TouchableOpacity
      style={styles.listItem}
      key={todo.text}
      onPress={() => {
        const copyTodos = [...todos];
        const element = copyTodos.find((t) => t == todo);
        element.done = !element.done;
        onUpdate(copyTodos);
      }}
    >
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
    </TouchableOpacity>
  );

  renderSeparator = () => <View style={styles.separator} />;

  renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>Empty list</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={todos}
      keyExtractor={(todo) => todo.text}
      renderItem={({ item }) => renderItem(item)}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

export default TodoList;
