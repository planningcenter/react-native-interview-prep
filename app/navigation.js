import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { Icon, ICON_PATHS } from './components/icon'
import { Prep } from './screens/prep'

const TabNavigator = createBottomTabNavigator()
const { Screen, Navigator } = TabNavigator

const colors = {
  ...DefaultTheme.colors,
  primary: '#fff',
}

export const NavigationTheme = {
  colors,
}

export const MainNavigation = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <Navigator
        initialRouteName="Prep"
        screenOptions={() => ({ tabBarStyle: { backgroundColor: '#323842' } })}>
        <Screen
          name="Prep"
          component={Prep}
          options={({ route }) => ({
            title: route.params?.name || 'PCO React Native Interview Prep',
            tabBarLabel: 'Prep',
            tabBarIcon: () => (
              <Icon
                path={ICON_PATHS.general.pico}
                height={16}
                width={16}
                fill={'white'}
              />
            ),
          })}
        />
      </Navigator>
    </NavigationContainer>
  )
}
