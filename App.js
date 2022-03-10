import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ui from './src/common/ui'
// screens
import Home from './src/screens/Home'
import Details from './src/screens/Details'

const Tab = createBottomTabNavigator()

function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={ui.PRIMARY} />
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" options={{ headerShown: false }}>
                    {props => <Home {...props} />}
                </Tab.Screen>
                <Tab.Screen name="Details" options={{ headerShown: false }}>
                    {props => <Details {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App
