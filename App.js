import "react-native-gesture-handler";
import React from "react";
import Main from "./src/screens/main";
import Edit from "./src/screens/edit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: "ToDo List App",
            headerStyle: {
              backgroundColor: '#0066ff',
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            }
          }}
        />
        <Stack.Screen name="Edit" component={Edit} options={{
          title: "Edit todo",
          headerStyle: {
            backgroundColor: '#0066ff',
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;