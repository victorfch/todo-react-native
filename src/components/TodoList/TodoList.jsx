import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  View,
  Image,
} from "react-native";
import deleteImage from "todoList/assets/delete.png";

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
  sectionHeader: {
    backgroundColor: "#ddd",
    padding: 10,
  },
  emptyImage: {
    width: 50,
    height: 50,
    tintColor: "#005500",
  },
  icon: {
    width: 20,
    height: 20,
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
        <Image style={styles.icon} source={deleteImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  renderSeparator = () => <View style={styles.separator} />;

  renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Image
        style={styles.emptyImage}
        source={require("todoList/assets/check.png")}
      />
      <Text>Empty list</Text>
    </View>
  );

  renderSectionHeader = ({ section: { title, data } }) => (
    <View style={styles.sectionHeader}>
      <Text>
        {title} ({data.length})
      </Text>
    </View>
  );

  return (
    <SectionList
      style={styles.container}
      sections={
        todos && todos.length
          ? [
              { title: "ToDo", data: todos.filter((todo) => !todo.done) },
              { title: "Done", data: todos.filter((todo) => todo.done) },
            ]
          : []
      }
      keyExtractor={(todo) => todo.text}
      renderItem={({ item }) => renderItem(item)}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
      stickySectionHeadersEnabled
    />
  );
};

export default TodoList;
