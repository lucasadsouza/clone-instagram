import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Pages/Feed';

import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => <Header />,
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
