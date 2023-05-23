import * as yup from 'yup';
export const heroSchema =  yup.object().shape({
  name: yup.string().required(),
  lati: yup.number().required(),
  longi:yup.number().required(),
  class: yup.string().required()
});

