import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// page
import untukKamu from './pages/untukKamu';
import Rating from './pages/rating';
import Terbaru from './pages/terbaru';
import Terpopuler from './pages/terpopuler';

// components
import Header from './components/header'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()
export default function App() {
  const MyTab = () => <Tab.Navigator 
    swipeEnabled={false}
    tabBarOptions={{
      activeTintColor: '#f19292',
      style:{
        elevation: 0
      },
      labelStyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12
      },
      indicatorStyle: {
        backgroundColor: '#f19292'
      }
    }}>
    <Tab.Screen 
      name="Home" 
      component={untukKamu}
    />
    <Tab.Screen 
      name="Terbaru" 
      component={Terbaru} 
    />
    <Tab.Screen 
      name="Populer" 
      component={Terpopuler} 
    />
    <Tab.Screen 
      name="Rating" 
      component={Rating}
    />
  </Tab.Navigator>
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="film" 
          children={MyTab} 
          options={{
            headerTitle: props => <Header {...props} />,
            headerStyle: {
              elevation: 0,
              height: 45,
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}