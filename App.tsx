import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profiles, LensProvider } from '@lens-protocol/react-native-lens-ui-kit'
import { ProfileView, ViewFollowing, ViewComments } from './pages';

const Stack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  }
}

const ProfileComponent = ({ navigation }) => {
  return (
    <Profiles
      onProfilePress={
        profile => navigation.navigate("Profile", { profile })
      }
    />
  )
}

const App = () => {
  return (
    <LensProvider theme="dark">
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Profiles" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
          <Stack.Screen name="ViewComments" component={ViewComments} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  )
}

export default App;