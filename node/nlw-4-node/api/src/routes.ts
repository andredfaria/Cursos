import { Router } from 'express';
import { SurveyController } from './controller/SurveyController';
import { UserController } from './controller/UserController';
import { SendMailController } from './controller/SendMailController';
import { AnswerController } from './controller/AnswerController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

//user
router.post('/users', userController.create);

//survey
router.post('/survey', surveyController.create);
router.get('/survey', surveyController.show);

//email
router.post('/sendEmail', sendMailController.execute)

// answer
router.get('/answer/:value', answerController.execute)


export { router }