import * as React from "react"
import { Text, View, Image } from 'react-native';

import { mockGraph } from "@mb/mock/mockdata";
import { style } from "./Card.style";
import type { CardType } from "./Card.type"
import BarrelIcon from "@mb/assets/BarrelIcon.png"
import WaterIcon from "@mb/assets/WaterIcon.png"
import Tank from "../Tank/Tank";
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart'


const Card = ({TankData}: CardType) => {
    const widthAndHeight = 66
    const sliceColor = ['#def666', "#fbffe7"]

    return (
        <View style={style.container}>
            <View style={style.TitleBox}>
                <View style={style.TextBox}>
                    <Text style={style.TitleText}>{TankData.Title}</Text>
                </View>
                <View style={style.InformationBox}>
                    <Text style={style.MainText}>{TankData.Water.height.feet}'{TankData.Water.height.inches}"</Text>
                    <Text style={style.MaxBarrelText}>{TankData.MaxBarrels}</Text>
                    <Image source={BarrelIcon} style={style.Icon} />
                    <Text style={style.IconText}>bbls</Text>

                </View>
            </View>
            <View style={style.Card}>
                <View style={style.CardFlex}>
                    <View>
                        <Text style={style.CardTitle}>
                            Volume & Height
                        </Text>
                        <Text style={style.CardBarrels}>
                            bbls
                        </Text>
                    </View>
                    <View style={style.alignMargin}>
                        <Text style={style.SecondaryTitle}>
                            Max Height
                        </Text>
                        <Text style={style.MainText}>
                            {TankData.MaxHeight.feet}' 
                        </Text>
                    </View>
                </View>
                <View style={style.CenterFlex}>
                    <View style={style.TankFlex}>
                        
                        <View style={style.DataFlex}>
                            <View style={style.WaterBox}>
                                <Text style={style.WaterTitle}>Water</Text>
                                <Text style={style.WaterData}>{TankData.Water.height.feet}'{TankData.Water.height.inches}"</Text>
                                <View style={style.BarrelFlex}>
                                    <Text style={style.WaterText}>{TankData.Water.barrels}</Text>
                                    <Image source={WaterIcon} style={style.Icon} />
                                    <Text style={style.CardBarrels}>
                                        bbls
                                    </Text>
                                </View>
                            </View>
                            <Tank 
                                maxVolume={TankData.MaxHeight}
                                waterVolume={TankData.Water.height}
                                oilVolume={TankData.Oil.height}
                            />
                            <View style={{marginLeft: 10}}>
                                <Text style={style.OilTitle}>Oil</Text>
                                <Text style={style.OilData}>{TankData.Oil.height.feet}'{TankData.Oil.height.inches}"</Text>
                                <View style={style.BarrelFlex}>
                                    <Text style={style.WaterText}>{TankData.Oil.barrels}</Text>
                                    <Image source={WaterIcon} style={style.Icon} />
                                    <Text style={style.CardBarrels}>
                                        bbls
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View >
                            <View style={style.alignCenter}>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={mockGraph}
                                    sliceColor={sliceColor}
                                    coverRadius={0.7}
                                />
                                
                                <View style={style.gauge}>
                                    <Text style={style.gaugeText}>
                                    24%
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text style={style.graphLabel}> Usable capacity</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Card