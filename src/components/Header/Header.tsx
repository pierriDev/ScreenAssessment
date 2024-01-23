import * as React from "react"
import { View, Image, Text } from "react-native"

import backIcon from "@mb/assets/backIcon.png"
import filterIcon from "@mb/assets/filterIcon.png"

import type { HeaderType } from "./Header.Type"
import { style } from "./Header.style"

const Header = ({
    HeaderTitle
}: HeaderType) => {
    return (
        <View style={style.HeaderBox}>
            <View>
                <Image source={backIcon} style={style.Icon} />
            </View>
            <View>
                <Text style={style.HeaderTitle}>{HeaderTitle}</Text>
            </View>
            <View>
                <Image source={filterIcon} style={style.Icon} />
            </View>
        </View>
    )
}

export default Header