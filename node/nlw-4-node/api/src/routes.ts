import { Router } from 'express';
import { SurveysController } from './controller/SurveyController';
import { UserController } from './controller/UserController';

const router = Router();

const userController = new UserController();

router.post('/users', userController.create);
router.post('/survey', SurveysController.create);

export { router }