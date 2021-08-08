// Stack Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { publicScreens, privateScreens } from "./Routes";
import { Icon, ButtonIcon } from "../ui/ui";
import Home from "../screens/public/home/Home";

const Stack = createStackNavigator();

const NavigatorPublic = (props) => {
  const initialHeaderPublic = () => ({
    headerTitle: (props) => <Icon.IconLogo size="100" />,
  });

  const headerPublic = ({ navigation }) => ({
    headerTitle: (props) => <Icon.IconLogo size="100" />,
    headerLeft: (props) => (
      <ButtonIcon onPress={() => navigation.goBack()}>
        <Icon.IconBack />
      </ButtonIcon>
    ),
  });

  const headerPrivate = ({ navigation }) => ({
    headerTitle: (props) => <Icon.IconLogo size="100" />,
    headerLeft: (props) => (
      <ButtonIcon onPress={() => navigation.goBack()}>
        <Icon.IconBack />
      </ButtonIcon>
    ),
    headerRight: (props) => (
      <ButtonIcon onPress={() => navigation.goBack()}>
        <Icon.IconUser />
      </ButtonIcon>
    ),
  });

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={initialHeaderPublic}
      />
      {Object.entries({
        ...publicScreens,
      }).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          options={headerPublic}
          component={component}
        />
      ))}

      {Object.entries({
        ...privateScreens,
      }).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          options={headerPrivate}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default NavigatorPublic;
