import * as yup from 'yup';

const addUkrSchema = yup.object().shape({
  id: yup.number().required(),
  settlement: yup.string().required(),
  district: yup.string().required(),
  region: yup
    .string()
    .oneOf([
      'АР Крим',
      'Вінницька',
      'Волинська',
      'Дніпропетровська',
      'Донецька',
      'Житомирська',
      'Закарпатська',
      'Запорізька',
      'Івано-Франківська',
      'Київська',
      'Кіровоградська',
      'Луганська',
      'Львівська',
      'Миколаївська',
      'Одеська',
      'Полтавська',
      'Рівненська',
      'Сумська',
      'Тернопільська',
      'Харківська',
      'Херсонська',
      'Хмельницька',
      'Черкаська',
      'Чернівецька',
      'Чернігівська',
      'м. Київ',
      'м. Севастополь',
    ])
    .required(),
  x: yup.number('').min(4).required(),
  y: yup.number('').min(4).required(),
  natural_zones: yup
    .string()
    .oneOf([
      'Карпатська гірська країна',
      'Мішані ліси',
      'Широколистяні ліси',
      'Лісостеп',
      'Степ',
      'Кавказько-Кримська гірська країна',
    ])
    .required(),
  physiographical_l: yup
    .string()
    .oneOf([
      'Поліський',
      'Західноукраїнський',
      'Східноукраїнський',
      'Подільсько-Придніпровський',
      'Лівобережнодніпровський',
      'Дністровсько-Дніпровський',
      'Лівобережнодніпровсько-Приазовський',
      'Донецький',
      'Лівобережнодніпровський',
      'Задонецько-Донський',
      'Причорноморський середньостеповий',
      'Причорноморсько-Приазовський',
      'Кримський степовий',
      'Гірський край - Українські Карпати',
      'Кримський гірський край',
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

export default addUkrSchema;
