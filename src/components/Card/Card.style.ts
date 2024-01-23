import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    TitleBox: {
        backgroundColor: 'rgba(0, 71, 138, 0.1)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TextBox: {
        justifyContent: "center"
    },
    TitleText: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        fontWeight: "700",
        color: "#1C1C1C",
        textTransform: "uppercase",
        alignItems: "center"
    },
    InformationBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    MainText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: 24,
        color: "#1C1C1C",
        alignItems: "center",
        lineHeight: 29
    },
    MaxBarrelText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "400",
        fontSize: 16,
        color: "#878787",
        marginHorizontal: 3,
    },
    Icon: {
        width: 16,
        height: 16,
        marginRight: 5
    },
    IconText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "400",
        fontSize: 10,
        color: "#878787",
        marginHorizontal: 3,
        textTransform: "uppercase"
    },
    Card: {
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "#C3C3C3",
        borderRadius: 5,
        marginTop: 10,
        padding: 10
    },
    CardFlex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    CardTitle: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    CardBarrels: {
        fontFamily: "Helvetica Neue",
        fontSize: 10,
        lineHeight: 16,
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    SecondaryTitle: {
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center",
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    CardTank:{
        width: 65,
        height: 93,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 4,
        marginTop: 10,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    WaterData: {
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: 24,
        color: "#1C1C1C",
        alignItems: "center",
        lineHeight: 29,
        textAlign: "right"
    },
    WaterTitle: {
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "right",
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    OilData: {
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: 24,
        color: "#1C1C1C",
        alignItems: "center",
        lineHeight: 29,
        textAlign: "left"
    },
    OilTitle: {
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "left",
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    WaterText: {
        fontFamily: "Helvetica Neue",
        fontSize: 20,
        lineHeight: 32,
        color: "#C3C3C3",
        fontWeight: "400",
        textTransform: "uppercase",
        marginRight: 5,
    },
    SecondaryCardBarrels: {
        fontFamily: "Helvetica Neue",
        fontSize: 10,
        lineHeight: 16,
        color: "#C3C3C3",
        fontWeight: "400",
        textTransform: "uppercase"
    },
    TankFlex: {
        flexDirection: "row"
    },
    DataFlex: {
        flexDirection: "row",
        alignItems: "center"
    },
    WaterBox: {
        marginRight: 10
    },
    BarrelFlex: {
        flexDirection: "row", 
        alignItems: "center"

    },
    WaterFill: {
        height: 58,
        
    },
    OilFill: {
        height: 21,
        backgroundColor: "#1C1C1C"
    },
    CenterFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    gauge: {
        position: 'absolute',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        fontFamily: "Helvetica Neue",
        fontSize: 16,
        lineHeight: 24,
        color: "#1C1C1C",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    alignCenter: {
        alignItems: "center"
    },
    alignMargin: {
        alignItems: "center", 
        marginRight: 20
    },
    graphLabel: {
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        lineHeight: 16,
        color: "#878787",
        fontWeight: "400",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: 7
    }
});
