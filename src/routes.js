import { Router } from 'express';

import TicketController from './app/controllers/TicketController';
import TicketClosedByUserController from './app/controllers/TicketClosedByUserController';
import TicketClosedByDepartmentController from './app/controllers/TicketClosedByDepartmentController';
import TicketOpenedByOrgController from './app/controllers/TicketOpenedByOrgController';

const routes = new Router();

routes.get('/tickets', TicketController.show);
routes.get('/tickets/closeds/ByUser', TicketClosedByUserController.show);
routes.get(
  '/tickets/closeds/ByDepartment',
  TicketClosedByDepartmentController.show
);
routes.get('/tickets/openeds/ByOrganization', TicketOpenedByOrgController.show);

export default routes;
