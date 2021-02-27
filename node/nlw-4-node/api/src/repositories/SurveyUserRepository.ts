import { EntityRepository, Repository } from "typeorm";
import { SurveysUsers } from "../models/SurveyUsers";

@EntityRepository(SurveysUsers)
class SurveyUserRepository extends Repository<SurveysUsers> {

}

export { SurveyUserRepository }