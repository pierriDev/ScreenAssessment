import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import TabNavigation from './navigation/TabNavigation';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" hidden={false} />
            <TabNavigation />
        </>
    )
}

export default Main