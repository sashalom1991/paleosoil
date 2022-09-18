import * as yup from 'yup';

const addEngSchema = yup.object().shape({
  // id: yup.number().required(),
  settlement: yup.string().required(),
  district: yup.string().required(),
  region: yup
    .string()
    .oneOf([
      'Cherkasy',
      'Chernihiv',
      'Chernivtsi',
      'Dnipro',
      'Donetsk',
      'Ivano-Frankivsk',
      'Kharkiv',
      'Kherson',
      'Khmelnytskyi',
      'Kyiv',
      'Kirovohrad',
      'Luhansk',
      'Lviv',
      'Mykolaiv',
      'Odesa',
      'Poltava',
      'Rivne',
      'Sumy',
      'Ternopil',
      'Vinnytsia',
      'Volyn',
      'Zakarpattia',
      'Zaporizhzhia',
      'Zhytomyr',
      'c. Kyiv',
      'c. Sevastopol',
    ])
    .required(),
  x: yup.number('').min(4).required(),
  y: yup.number('').min(4).required(),
  natural_zones: yup
    .string()
    .oneOf([
      'Mixed (coniferous-and-broad-leaved) woods',
      'Broad-leaved forests',
      'Forest-steppe',
      'Steppe',
      'Ukraine Carpathians',
      'Crimean Mountains',
    ])
    .required(),
  physiographical_l: yup
    .string()
    .oneOf([
      'Polessye region',
      'West Ukraine region',
      'Podolia–Dnipro forest steppe region',
      'Left bank of Dnipro forest steppe region',
      'East Ukraine forest steppe region',
      'Dnister–Dnipro region',
      'Left bank of Dnipro–Sea of Azov coast region',
      'Donets region',
      'Trans-Donets–Don region',
      'Black Sea coast central steppe region',
      'Black Sea–Sea of Azov coastal region',
      'Crimean steppe region',
      'Carpathians mountain region',
      'Crimean mountain region',
    ])
    .required(),
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

export default addEngSchema;
