import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm';
import { SurveyUserRepository } from '../repositories/SurveyUserRepository';

/**
 *  1 2 3 4 5 6 7 8 9 10
 * detratores => 0 - 6
 * passivo => 7 - 8
 * promotores => 9 - 10
 * 
 * (N de promotores - N de detratores) / (N de respondentes) * 100
 */

class NpsController {
    async execute (req: Request, res: Response) {
      const { survey_id } = req.params;

      const surverUserRepository = getCustomRepository(SurveyUserRepository);

      const surveyUser = await surverUserRepository.find({
        survey_id,
        value: Not(IsNull())
      })

      console.log(surveyUser);
    
      const detrator = surveyUser.filter(
        (survey) => (survey.value >= 0 && survey.value <= 6)
      ).length;

      console.log(detrator);


      const promoter = surveyUser.filter(
        (survey) => (survey.value >= 9 && survey.value <= 10)
      ).length;

      const passive = surveyUser.filter(
        (survey) => (survey.value >= 7 && survey.value <= 8)
      ).length;

      const totalAnswers = surveyUser.length;
      const calculate = Number(((promoter - detrator) / totalAnswers)*100).toFixed(2);

      return res.status(200).json({
        promoter,
        detrator,
        passive,
        totalAnswers,
        calculate
      });
    }
}

export { NpsController };
