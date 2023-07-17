import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_data: yup.string(),
  employee_id: yup.string().nullable(),
});
