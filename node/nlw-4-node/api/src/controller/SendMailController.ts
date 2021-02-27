import { Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveyRepository } from '../repositories/SurveyRepository';
import { SurveyUserRepository } from '../repositories/SurveyUserRepository';
import { UsersRepository } from '../repositories/UserRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
class SendMailController {
    async execute (req: Request, res: Response) {
      const {email, survey_id} = req.body;

      const surveyRepository = getCustomRepository(SurveyRepository);
      const surveyUserRepository = getCustomRepository(SurveyUserRepository);
      const userRepository = getCustomRepository(UsersRepository);

      const user = await userRepository.findOne({ email });

      if (!user)
        return res.status(400).json({
          erro: 'User dos not exists'
        })

      const survey = await surveyRepository.findOne({ id: survey_id })

      if (!survey)
        return res.status(400).json({
          erro: 'Survvey dos not exists'
        })
      
      
      const surveyUserAlreadyExists = await surveyUserRepository.findOne({
        where: [{ user_id: user.id }, { value: null }]
      });


      const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

      const variables = {
        name: user.name,
        title: survey.title,
        description: survey.description,
        user_id: user.id,
        link: process.env.URL_MAIL
      }

      if (surveyUserAlreadyExists) {
        await SendMailService.execute(email, survey.title, variables, npsPath)
        return response.json(surveyUserAlreadyExists)
      }
      
      const surveyUser = await surveyUserRepository.create({ 
        user_id: user.id,
        survey_id
      }) 

      await SendMailService.execute(email, survey.title, variables, npsPath)

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
