import { Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveyRepository } from '../repositories/SurveyRepository';
import { SurveyUserRepository } from '../repositories/SurveyUserRepository';
import { UsersRepository } from '../repositories/UserRepository';

class SendMailController {
    async execute (req: Request, res: Response) {
      const {email, survey_id} = req.body;

      const surveyRepository = getCustomRepository(SurveyRepository);
      const surveyUserRepository = getCustomRepository(SurveyUserRepository);
      const userRepository = getCustomRepository(UsersRepository);

      const userAlreadyExists = await userRepository.find({ email });

      if (!userAlreadyExists)
        return res.status(400).json({
          erro: 'User dos not exists'
        })

      const surveyAlreadyExists = await surveyRepository.findOne({ id: survey_id })

      if (!surveyAlreadyExists)
        return res.status(400).json({
          erro: 'Survvey dos not exists'
        })
      
    const surveyUser = await surveyUserRepository.create({ 
      user_id: userAlreadyExists.uuid,
      survey_id
    })


      return res.status(201).json(surveyUser);
    }

    async show (req: Request, res: Response) {
      const surveyRepository = getCustomRepository(SurveyRepository);

      const all = await surveyRepository.find();
      
      if(all) 
        return res.status(200).json(all);
      
      return res.status(500).json({ message: 'Erro' })
    }
}

export { SendMailController };
