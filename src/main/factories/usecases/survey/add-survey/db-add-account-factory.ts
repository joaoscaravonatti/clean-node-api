import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'
import { DbAddSurvey } from '@/data/usecases/survey/add-survey/db-add-survey'
import { AddSurvey } from '@/domain/usecases/survey/add-survey'

export const makeDbAddSurvay = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
