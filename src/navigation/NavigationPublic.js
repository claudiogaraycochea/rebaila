// Stack Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { publicScreens, privateScreens } from "./Routes";
// import Header from '../components/header/Header';
import { View, Text } from 'react-native';
import { Icon, ButtonIcon } from '../ui/ui';
import Home from '../screens/public/home/Home';

const Stack = createStackNavigator();

/* const screenOptions = ({ navigation }) => ({
  headerTitle: props => <Header title={<Icon icon='IconBack'/>} />,
  headerLeft: props => <Button onPress={() => navigation.goBack()}><Icon icon='IconBack'/></Button>,
  headerRight: () => (
    <View style={{paddingHorizontal: 5}}>
      <Button
        onPress={() =>
          navigation.navigate('ProfileUser')
        }
      >
        <Icon icon='IconUser'/>
      </Button>
    </View>
  ),
  headerStyle: {
    backgroundColor: '#9040A4',
    borderColor: 'blue',
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});
*/

const initialHeaderPublic = ({ navigation }) => ({
  headerTitle: props => <Icon.IconLogo size='100'/>
});

const headerPublic = ({ navigation }) => ({
  headerTitle: props => <Icon.IconLogo size='100'/>,
  headerLeft: props => <ButtonIcon onPress={()=>  navigation.goBack()}><Icon.IconBack /></ButtonIcon>
});

const headerPrivate = ({ navigation }) => ({
  headerTitle: props => <Icon.IconLogo size='100'/>,
  headerLeft: props => <ButtonIcon onPress={()=>  navigation.goBack()}><Icon.IconBack /></ButtonIcon>,
  headerRight: props => <ButtonIcon onPress={()=>  navigation.goBack()}><Icon.IconUser /></ButtonIcon>
});

const NavigatorPublic = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={initialHeaderPublic} />
      {Object.entries({
        // Use some screens conditionally based on some condition
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
        // Use some screens conditionally based on some condition
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
}

export default NavigatorPublic;