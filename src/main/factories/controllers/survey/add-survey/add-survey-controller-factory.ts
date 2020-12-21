import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeDbAddSurvay } from '@/main/factories/usecases/survey/add-survey/db-add-account-factory'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvay())
  return makeLogControllerDecorator(controller)
}
