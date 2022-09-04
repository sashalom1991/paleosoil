import * as yup from 'yup';

const addUkrSchema = yup.object().shape({
  settlement: yup.string().required(),
  district: yup.string().required(),
  region: yup.string().required(),
  x: yup.number('').min(4).required(),
  y: yup.number('').min(4).required(),
  natural_zones: yup.string().required(),
  physiographical_l: yup.string().required(),
  locality: yup.string().required(),
  object: yup.string().required(),
  researcher: yup.string().required(),
  year: yup.number('').min(4).required(),
  research_methods: yup.string().required(),
  modern_soil: yup.string().required(),
  soil_m: yup.number(''),
  buried_soil: yup.string().required(),
  paleosoil_m: yup.number(''),
  period_holocene: yup
    .string()
    .oneOf([
      'AL - Allerod',
      'AT - Atlantic',
      'BL - Bolling',
      'ВО - Boreal',
      'PB - Preboreal',
      'SA - Subatlantic',
      'SB - Subboreal',
    ])
    .required(),
  arch_dating: yup.string().required(),
  references: yup.string().required(),
  pdf: yup.string(),
  foto: yup.string(),
  small_foto: yup.string(),
});

export default addUkrSchema;
