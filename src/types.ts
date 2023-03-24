export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export enum GAME_TYPE {
    AAA = "Triple A",
    INDIE = "Indie"
}

export type TGame = {
    id: string,
    name: string,
    price: number
    type: GAME_TYPE
}
