import * as Express from 'express'

import { Route } from './Routes/users';



export class App {
    
    public app: Express.Application;
    public user = new Route();

    constructor () {
        this.app = Express();
        this.app.use(Express.json())
        this.app.use('/users', this.user.routes)
    }
}