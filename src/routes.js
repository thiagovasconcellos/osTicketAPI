import { Router } from 'express';

import TicketController from './app/controllers/TicketController';

const routes = new Router();

routes.get('/tickets', TicketController.show);

export default routes;
