import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveyRepository } from '../repositories/SurveyRepository';

class SurveysController {
    async create (req: Request, res: Response) {
      const {title, description} = req.body;

      const surveyRepository = getCustomRepository(SurveyRepository);

      const survey = surveyRepository.create({
        title,
        description
      })

      await surveyRepository.save(survey)

      return res.status(201).json(survey);
    }
}

export { SurveysController };
