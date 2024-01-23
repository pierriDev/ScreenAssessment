import type { TankType } from "./Tank.type";
import { useState, useEffect } from "react";

const useTank = ({
    maxVolume,
    waterVolume,
    oilVolume
}: TankType) => {
    const [waterHeight, setWaterHeight] = useState<string>("")
    const [oilHeight, setOilHeight] = useState<string>("")
    const [emptyHeight, setEmptyHeight] = useState<string>("")

    const totalMaxInches = maxVolume.feet * 12 + maxVolume.inches;
    const currentWaterInches = waterVolume.feet * 12 + waterVolume.inches;
    const currentOilInches = oilVolume.feet * 12 + oilVolume.inches;
    const currentEmptyInches = totalMaxInches - (currentWaterInches + currentOilInches)

    useEffect(() => {
        getWaterHeight()
        getOilHeight()
        getEmptyHeight()
    }, [
        maxVolume,
        waterVolume,
        oilVolume
    ])

    const getWaterHeight = () => {
        if (currentWaterInches > totalMaxInches) {
            throw new Error("Water volume exceeds the maximum volume.");
        }

        const percentage = (currentWaterInches / totalMaxInches) * 100;
        setWaterHeight(percentage.toFixed(2));
    }

    const getOilHeight = () => {
        if (currentOilInches > totalMaxInches) {
            throw new Error("Oil volume exceeds the maximum volume.");
        }

        const percentage = (currentOilInches / totalMaxInches) * 100;
        setOilHeight(percentage.toFixed(2));

    }

    const getEmptyHeight = () => {
        if (currentEmptyInches > totalMaxInches) {
            throw new Error("Empty volume exceeds the maximum volume.");
        } else if(currentEmptyInches == 0){
            setOilHeight("0")
        }

        const percentage = (currentEmptyInches / totalMaxInches) * 100;
        setEmptyHeight(percentage.toFixed(2));
    }

    return {
        waterHeight,
        oilHeight,
        emptyHeight,
    }
}