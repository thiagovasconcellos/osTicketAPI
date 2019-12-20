import { Router } from 'express';

import TicketController from './app/controllers/TicketController';
import TicketClosedByUserController from './app/controllers/TicketClosedByUserController';
import TicketClosedByDepartmentController from './app/controllers/TicketClosedByDepartmentController';
import TicketOpenedByOrgController from './app/controllers/TicketOpenedByOrgController';
import TicketPositionController from './app/controllers/TicketPositionController';
import TicketByStatus from './app/controllers/TicketByStatus';
import TicketPendent from './app/controllers/TicketPendent';
import TicketTop3Staff from './app/controllers/TicketTop3Staff';
import TicketByStaffController from './app/controllers/TicketByStaffController';
import TicketByStaffCountController from './app/controllers/TicketByStaffCountController';
import FinishedTodayController from './app/controllers/FinishedTodayController';
import TopFinishesController from './app/controllers/TopFinishesController';

const routes = new Router();

routes.get('/tickets', TicketController.show);
routes.get('/tickets/closeds/ByUser', TicketClosedByUserController.show);
routes.get(
  '/tickets/closeds/ByDepartment',
  TicketClosedByDepartmentController.show
);
routes.get('/tickets/openeds/ByOrganization', TicketOpenedByOrgController.show);
routes.get('/tickets/position', TicketPositionController.show);
routes.get('/tickets/status', TicketByStatus.show);
routes.get('/tickets/pendents', TicketPendent.show);
routes.get('/tickets/staff/top3', TicketTop3Staff.show);
routes.get('/tickets/staff', TicketByStaffController.show);
routes.get('/tickets/staff/:id', TicketByStaffCountController.show);
routes.get('/tickets/finishedToday', FinishedTodayController.show);
routes.get('/tickets/topFinishes', TopFinishesController.show);

export default routes;
