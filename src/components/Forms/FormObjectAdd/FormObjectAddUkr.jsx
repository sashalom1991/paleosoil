import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import addUkrSchema from '../../../schemas/addUkrSchema';

import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

import { useDispatch, useSelector } from 'react-redux';
import {
  addPaleosoilPoint,
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
} from '../../../redux/paleosoil';

const FormObjectAddUkr = () => {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  const iD = data.length + 1;

  return (
    <Formik
      initialValues={{
        id: iD,
        settlement: '',
        district: '',
        region: '',
        x: '',
        y: '',
        natural_zones: '',
        physiographical_l: '',
        locality: '',
        object: '',
        researcher: '',
        year: '',
        research_methods: '',
        modern_soil: '',
        soil_m: '',
        buried_soil: '',
        paleosoil_m: '',
        period_holocene: '',
        arch_dating: '',
        references: '',
        pdf: '',
        foto: '',
        small_foto: '',
      }}
      validationSchema={addUkrSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          dispatch(addPaleosoilPoint(values));
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Поселення"
            name="settlement"
            type="string"
            placeholder="Settlement near the research object. Example: Сторожове"
          />
          <CustomInput
            label="Район"
            name="district"
            type="string"
            placeholder="District the research object. Example: Бучацький"
          />
          <CustomSelect label="Область" name="region" placeholder="">
            <option value="">- - - - </option>
            <option value="АР Крим">АР Крим</option>
            <option value="Вінницька">Вінницька</option>
            <option value="Волинська">Волинська</option>
            <option value="Дніпропетровська">Дніпропетровська</option>
            <option value="Донецька">Донецька</option>
            <option value="Житомирська">Житомирська</option>
            <option value="Закарпатська">Закарпатська</option>
            <option value="Запорізька">Запорізька</option>
            <option value="Івано-Франківська">Івано-Франківська</option>
            <option value="Київська">Київська</option>
            <option value="Кіровоградська">Кіровоградська</option>
            <option value="Луганська">Луганська</option>
            <option value="Львівська">Львівська</option>
            <option value="Миколаївська">Миколаївська</option>
            <option value="Одеська">Одеська</option>
            <option value="Полтавська">Полтавська</option>
            <option value="Рівненська">Рівненська</option>
            <option value="Сумська">Сумська</option>
            <option value="Тернопільська">Тернопільська</option>
            <option value="Харківська">Харківська</option>
            <option value="Херсонська">Херсонська</option>
            <option value="Хмельницька">Хмельницька</option>
            <option value="Черкаська">Черкаська</option>
            <option value="Чернівецька">Чернівецька</option>
            <option value="Чернігівська">Чернігівська</option>
            <option value="м. Київ">м. Київ</option>
            <option value="м. Севастополь">м. Севастополь</option>
          </CustomSelect>
          <CustomInput
            label="Довгота"
            name="x"
            type="string"
            placeholder="Longitude of object WGS-84. Example: 49.877565"
          />
          <CustomInput
            label="Широта"
            name="y"
            type="string"
            placeholder="Latitude of object WGS-84. Example: 32.809059"
          />
          <CustomSelect
            label="Природна зона"
            name="natural_zones"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="Мішані ліси">Зона мішаних лісів</option>
            <option value="Широколистяні ліси">
              Зона широколистяних лісів
            </option>
            <option value="Лісостеп">Лісостепова зона</option>
            <option value="Степ">Степова зона</option>
            <option value="Карпатська гірська країна">
              Карпатська гірська країна
            </option>
            <option value="Кавказько-Кримська гірська країна">
              Кавказько-Кримська гірська країна
            </option>
          </CustomSelect>
          <CustomSelect
            label="Край/провінція"
            name="physiographical_l"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="Поліський">Поліський край</option>
            <option value="Західноукраїнський">Західноукраїнський край</option>
            <option value="Подільсько-Придніпровський">
              Подільсько-Придніпровський край
            </option>
            <option value="Східноукраїнський">Східноукраїнський край</option>
            <option value="Лівобережнодніпровський">
              Лівобережнодніпровський край
            </option>
            <option value="Дністровсько-Дніпровський">
              Дністровсько-Дніпровський край
            </option>
            <option value="Лівобережнодніпровсько-Приазовський">
              Лівобережнодніпровсько-Приазовський край
            </option>
            <option value="Донецький">Донецький край</option>
            <option value="Задонецько-Донський">
              Задонецько-Донський край
            </option>
            <option value="Причорноморський середньостеповий">
              Причорноморський середньостеповий край
            </option>
            <option value="Причорноморсько-Приазовський">
              Причорноморсько-Приазовський край
            </option>
            <option value="Кримський степовий">Кримський степовий край</option>
            <option value="Гірський край - Українські Карпати">
              Гірський край - Українські Карпати
            </option>
            <option value="Кримський гірський край">
              Кримський гірський край
            </option>
          </CustomSelect>
          <CustomInput
            label="Приуроченість (природна/історична)"
            name="locality"
            type="string"
            placeholder="Locality (natural / historical) of object. Example: Storozhove  mound complex"
          />
          <CustomInput
            label="Обє'кт (природний/історичний)"
            name="object"
            type="string"
            placeholder="Object (natural / historical) of the research object. Example: Rampart of the Eastern hillfort"
          />
          <CustomInput
            label="Дослідник"
            name="researcher"
            type="string"
            placeholder="Researcher or researchers. Example: Doroshkevych Serhii, Kushnir Anatolii"
          />
          <CustomInput
            label="Рік вивчення"
            name="year"
            type="number"
            placeholder="Year the research object. Example: 2022"
          />
          <CustomInput
            label="Використані методи дослідження"
            name="research_methods"
            type="string"
            placeholder="Methods that were used in the research. Example: Paleopedological (macromorphological and micromorphological  analyses), soil-geochemical analysis"
          />
          <CustomInput
            label="Сучасний тип ґрунту"
            name="modern_soil"
            type="string"
            placeholder="Modern soil. Example: Chernozems typical"
          />
          <CustomInput
            label="Потужність розрізу (м.)"
            name="soil_m"
            type="string"
            placeholder="Thickness of soil profile (m). Example: 1.2"
          />
          <CustomInput
            label="Похований ґрунт (ґрунтовий матеріал)"
            name="buried_soil"
            type="string"
            placeholder="Buried soil (soil material). Example: Ordinary  chernozems"
          />
          <CustomInput
            label="Потужність (м.)"
            name="paleosoil_m"
            type="string"
            placeholder="Thickness of paleosoil (m.). Example: 0.5"
          />
          <CustomSelect
            label="Хроноінтервал голоцену"
            name="period_holocene"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="AL - Allerod">AL - Allerod</option>
            <option value="AT - Atlantic">AT - Atlantic</option>
            <option value="BL - Bolling">BL - Bolling</option>
            <option value="ВО - Boreal">ВО - Boreal</option>
            <option value="PB - Preboreal">PB - Preboreal</option>
            <option value="SA - Subatlantic">SA - Subatlantic</option>
            <option value="SB - Subboreal">SB - Subboreal</option>
          </CustomSelect>
          <CustomInput
            label="Археологічне датування / датування"
            name="arch_dating"
            type="string"
            placeholder="Archaeological dating / dating the research object. Example: Catacomb Grave culture (3800 ВР)"
          />
          <CustomInput
            label="Література"
            name="references"
            type="string"
            placeholder="Example: Matviishyna Zh, Kushnir A (2014). Geoarchaeological research of the burial mound on the left bank of the Dnieper River. Materials of the scientific conference on archaeological soil science, 138-141 (In russian)"
          />
          <CustomInput
            label="ПДФ"
            name="pdf"
            type="string"
            placeholder="URL to read the research"
          />
          <CustomInput
            label="Фото"
            name="foto"
            type="string"
            placeholder="Url to foto research in Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"
          />
          <CustomInput
            label="Зменшене фото"
            name="small_foto"
            type="string"
            placeholder="Url to small-foto for the app from the Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="success"
          >
            Відправити
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormObjectAddUkr;
