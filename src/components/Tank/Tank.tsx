import * as React from "react"
import { Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type { TankType } from "./Tank.type"
import { style } from "./Tank.style"


const Tank = ({
    maxVolume,
    waterVolume,
    oilVolume
}: TankType) => {
    return (
        <View style={style.CardTank}>
            <View style={style.OilFill}></View>
            <LinearGradient
                colors={['rgba(0, 71, 138, 0.8)', 'rgba(0, 71, 138, 1)',]}
                style={style.WaterFill}
            ></LinearGradient>
        </View>
            
    )
}

export default Tank