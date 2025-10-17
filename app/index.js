import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { colors } from '../constants/colors'
import SignIn from './(tabs)/SignIn'
import Signup from './(tabs)/SignUp'
import Splash from './(tabs)/Splash'
import Favorites from './Favorites'
import Home from './Home'
import Profile from './Profile'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const isSignedin = true

const Tabs = () => {
    return (
        <Tab.Navigator 
        screenOptions= {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon

                if (route.name === "Home") {
                    icon = focused
                       ? require('../assets/tabs/home_active.png')
                       : require('../assets/tabs/home.png')
                } else if (route.name === "Favorites") {
                    icon = focused
                       ? require('../assets/tabs/bookmark_active.png')
                       : require('../assets/tabs/bookmark.png')
                } else if (route.name === "Profile") {
                    icon = focused
                       ? require('../assets/tabs/profile_active.png')
                       : require('../assets/tabs/profile.png')
                }
                return <Image style={{width: 24, heigh: 24}} source={icon} />
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {borderTopColor: colors.lightGrey}
            })}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

const App = () => {
    const theme = {
        colors: {
            background: colors.white
        }
    }


    return (
        <SafeAreaProvider>
            <Stack.Navigator 
                screenOptions={{
                    contentStyle: { backgroundColor: theme.colors.background },
                    headerShown: false 
                }}
            >
                {isSignedin ? (
                    <>
                        <Stack.Screen name="Tabs" component={Tabs} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="Signin" component={SignIn} />
                    </>
                )}
            </Stack.Navigator>
        </SafeAreaProvider>
    )
};

export default React.memo(App)