import { Router } from 'express';
import { SurveyController } from './controller/SurveyController';
import { UserController } from './controller/UserController';
import { SendMailController } from './controller/SendMailController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();

//user
router.post('/users', userController.create);

//survey
router.post('/survey', surveyController.create);
router.get('/survey', surveyController.show);

//email
router.post('/sendEmail', sendMailController.execute)

export { router }