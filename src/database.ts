import { ACCOUNT_TYPE, TAccount, GAME_TYPE, TGame } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const games: TGame[] = [
    {
        id: "1",
        name: "Starfield",
        price: 300,
        type: GAME_TYPE.AAA
    },
    {
        id: "2",
        name: "Death Loop",
        price: 250,
        type: GAME_TYPE.AAA
    }

]