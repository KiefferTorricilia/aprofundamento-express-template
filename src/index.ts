import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, games } from './database'
import { ACCOUNT_TYPE, GAME_TYPE, TAccount, TGame } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response) => {

    const id: string = req.params.id

	const result: TAccount = accounts.find((element) => element.id === id)

    res.status(200).send(result)
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const accountIndex: number = accounts.findIndex((element) => element.id === id )

    let message: string

    if(accountIndex >= 0){
        accounts.splice(accountIndex, 1)
        message = "Item deletado com sucesso"
    } else {
        message = "Nenhum item encontrado"
    }
    console.log(accounts)
    res.status(200).send(message)
})

app.put("/accounts/:id", (req: Request, res: Response) => {

    const id: string = req.params.id

    
    const newOwnerName: string = req.body.ownerName
    const newBalance: number = req.body.balance
    const newType: ACCOUNT_TYPE = req.body.type

    const result = accounts.find((element) => element.id === id)

    if(result){
       
        result.ownerName = newOwnerName || result.ownerName
        result.type = newType || result.type 
        result.balance = isNaN(newBalance) ? result.balance : newBalance
    }
    console.table(accounts)
    res.status(200).send("Conta alterada com sucesso")

})

app.get("/games", (req: Request, res: Response) => {
    res.status(200).send(games)
})

app.post("/games", (req: Request, res: Response) => {

    const id: string = req.body.id;
    const name: string = req.body.name;
    const price: number = req.body.price;
    const type: GAME_TYPE = req.body.type;

    const newGame: TGame = {
        id, name, price, type
    }
    games.push(newGame)

    console.log(games)
    res.status(201).send("Usuário cadastrado com sucesso")
})

app.put("/games/:id", (req: Request, res: Response) => {

    const id: string = req.params.id;

    const newName: string = req.body.name;
    const newPrice: number = req.body.price;
    const newType: GAME_TYPE = req.body.type;

    const game = games.find((element) => element.id === id )

    if(game){

        game.name = newName || game.name;
        game.type = newType || game.type
        game.price = isNaN(newPrice) ? game.price : newPrice
    }

    res.status(200).send("Game adicionado com sucesso")
    
})

app.delete("/games/:id", (req: Request, res: Response) => {

    const id: string = req.params.id;

    const result = games.findIndex((element) => element.id === id)

    let message: string

    if(result >= 0){
        message = "Usuário apagado com sucesso"
        games.splice(result, 1)
    } else {
        message = "Usuário não encontrado"
    }

    res.status(200).send(message)
})

