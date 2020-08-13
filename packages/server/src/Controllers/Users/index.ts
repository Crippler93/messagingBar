import {Request, Response} from 'express'

const data = [
    {
        id: 1,
        name: "User 1"
    },
    {
        id: 2,
        name: "User 2"
    },
    {
        id: 3,
        name: "User 3"
    }
]

export const getAll = (req: Request, res: Response) => {
    res.send(data)
}

export const getId = (req: Request, res: Response) => {
    const {id} = req.params
    res.send(data.find(x => x.id === Number(id)))
}