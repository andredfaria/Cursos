import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { stringify } from 'uuid';
import { SurveyUserRepository } from '../repositories/SurveyUserRepository';
import { UsersRepository } from '../repositories/UserRepository';

class AnswerController {
    async execute (req: Request, res: Response) {
      const { value } = req.params;
      const { u } = req.query;

      const surverUserRepository = getCustomRepository(SurveyUserRepository);

      const surveyUser = await surverUserRepository.findOne({
        id: String(u)
      })

      if (!surveyUser) 
        return res.status(400).json({
          erro: "Survey user does not exist!"
        });

      surveyUser.value = Number(value);

      await surverUserRepository.save(surveyUser);

      return res.status(400).json(surveyUser);
    }
}

export { AnswerController };