import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SiteData from '../screens/SiteData';
import Header from '@mb/components/Header/Header';


const SiteDataStack = createNativeStackNavigator();

export const SiteDataStackScreen = () => {
  return (
    <SiteDataStack.Navigator>
        <SiteDataStack.Screen 
            name="SiteData" 
            component={SiteData} 
            options={{ headerTitle: (props) => <Header HeaderTitle={'Calderon Farms SWD #1'} /> }}
            
        />
    </SiteDataStack.Navigator>
  );
}

