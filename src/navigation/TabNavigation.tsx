import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SiteDataStackScreen } from '../navigation/StackNavigation';
import { Image } from "react-native"
import siteDataIcon from "@mb/assets/siteDataIcon.png"
import siteDataIconUnfilled from "@mb/assets/siteDataIconUnfilled.png"


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ 
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                      iconName = focused ? siteDataIcon: siteDataIconUnfilled;
                    
        
                    // You can return any component that you like here!
                    return <Image source={iconName} style={{width: 30, height: 30}} />;
                  },
                  tabBarActiveTintColor: '#00478A',
                  tabBarInactiveTintColor: '#878787',
            }}>
                <Tab.Screen name="Home" component={SiteDataStackScreen} options={{
                    tabBarShowLabel: false
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation