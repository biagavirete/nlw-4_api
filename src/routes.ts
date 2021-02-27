import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

const sendMaisController = new SendMailController();

router.post("/users", userController.create);

router.get("/surveys", surveyController.show);
router.post("/surveys", surveyController.create);

router.post("/sendMail", sendMaisController.execute);

export { router }