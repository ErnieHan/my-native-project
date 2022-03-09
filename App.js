import React from 'react'
import { View, Text, Button, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Messages() {
    return (
        <View>
            <Text>Messages</Text>
        </View>
    )
}

function Feed() {
    return (
        <View>
            <Text>Feed</Text>
        </View>
    )
}

function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
    )
}

function DetailsScreen({ extraData, navigation, route }) {
    const { id } = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Details Screen: {extraData} {id}
            </Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.popToTop()
                }}
            />
        </View>
    )
}

const extraData = 'details'

function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#dfb585" />
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '首頁',
                        headerStyle: {
                            backgroundColor: '#2196f3'
                        },
                        headerTintColor: '#fff',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Details"
                    options={{
                        title: '商品細節',
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Button onPress={() => alert('This is a button!')} title="Info" />
                        )
                    }}
                >
                    {props => <DetailsScreen {...props} extraData={extraData} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
