import React from "react";
import { View, StyleSheet, TextInput } from "react-native";


const Edit = ({ route }) => {
  const { todo } = route.params;
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} value={todo.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    padding: 5,
    borderBottomWidth: 2,
  },
});

export default Edit;
