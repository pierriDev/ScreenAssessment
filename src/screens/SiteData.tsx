import * as React from 'react'
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '@mb/components/Card/Card';
import { mockData } from '@mb/mock/mockdata';

import { style } from './SiteData.style';

const SiteData = () => {
    return(
        <View style={style.container}>
            <View style={style.emptyArea}>

            </View>
            {/* SINCE I DON'T HAVE INFORMATION ON THE WHOLE PRODUCT AND JUST A SIMPLE SCREEN IT'S HARD TO TELL.
                BUT THE WAY THAT THIS COMPONENT WILL BE CALLED (CONSIDERING THAT THIS MIGHT HAVE MULTIPLE CALLS) CAN BECOME A PERFORMANCE PROBLEM.
                AND EVEN THE POSIBILITIES OF HAVING A HORIZONTAL SCROLL INSIDE THIS CARD (WE TALKED ABOUT SOMETHING LIKE THIS IN THE INTERVIEW) CAN
                ALSO BECOME A PERFORMANCE PROBLEM
            */}
            <Card 
                TankData= {mockData}
            />
        </View>
    )
}

export default SiteData