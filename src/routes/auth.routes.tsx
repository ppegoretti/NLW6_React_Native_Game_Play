import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, SignIn } from '../screens'

const { Navigator, Screen } = createStackNavigator()

export function AuthRouts() {
  return (
    <Navigator headerMode='none' screenOptions={{
      cardStyle: {
        backgroundColor: 'transparent'
      }
    }}>
      <Screen
        name="Home"
        component={Home} />
      <Screen
        name="SignIn"
        component={SignIn} />

    </Navigator>
  )
}
