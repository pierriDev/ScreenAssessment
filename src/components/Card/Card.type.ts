export interface CardType {
    TankData: {
        Title: string,
        MaxHeight: {
            feet: number,
            inches: number
        },
        MaxBarrels: number,
        UsableCapacity: number,
        Water: {
            height: {
                feet: number,
                inches: number
            },
            barrels: number
        },
        Oil: {
            height: {
                feet: number,
                inches: number
            },
            barrels: number
        }
    }
}