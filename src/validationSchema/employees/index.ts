import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  time_tracking_data: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
