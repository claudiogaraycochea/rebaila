// Stack Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { publicScreens } from "./Routes";
const Stack = createStackNavigator();

const NavigatorPublic = (props) => {
  return (
    <Stack.Navigator>
      {Object.entries({
        // Use some screens conditionally based on some condition
        ...publicScreens,
      }).map(([name, component]) => (
        <Stack.Screen 
          key={name}
          name={name}
          // options={screenOptions}
          component={component} 
        />
      ))}
    </Stack.Navigator>
  );
}

export default NavigatorPublic;