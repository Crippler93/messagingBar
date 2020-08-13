import * as Express from 'express';

import {getAll, getId} from '../Controllers/Users'

export class Route {
    public routes = Express.Router();

    constructor() {
        this.routes.get('/', getAll)
        this.routes.get('/:id', getId)
    }
}