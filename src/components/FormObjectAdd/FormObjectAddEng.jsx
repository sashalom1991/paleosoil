import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import addEngSchema from '../../schemas/addEngSchema';

import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

import { useDispatch, useSelector } from 'react-redux';
import { addPaleosoilPoint, getAllPaleosoilPoint } from '../../redux/paleosoil';

const FormObjectAddEng = () => {
  const data = useSelector(getAllPaleosoilPoint);
  const dispatch = useDispatch();
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
      validationSchema={addEngSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          dispatch(addPaleosoilPoint(values));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Поселення"
            name="settlement"
            type="string"
            placeholder="Settlement near the research object. Example: Storozhove"
          />
          <CustomSelect label="Область" name="region" placeholder="">
            <option value="">- - - - </option>
            <option value="Cherkasy">Cherkasy</option>
            <option value="Chernihiv">Chernihiv</option>
            <option value="Chernivtsi">Chernivtsi</option>
            <option value="Dnipro">Dnipro</option>
            <option value="Donetsk">Donetsk</option>
            <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
            <option value="Kharkiv">Kharkiv</option>
            <option value="Kherson">Kherson</option>
            <option value="Khmelnytskyi">Khmelnytskyi</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Kirovohrad">Kirovohrad</option>
            <option value="Luhansk">Luhansk</option>
            <option value="Lviv">Lviv</option>
            <option value="Mykolaiv">Mykolaiv</option>
            <option value="Odesa">Odesa</option>
            <option value="Poltava">Poltava</option>
            <option value="Rivne">Rivne</option>
            <option value="Sumy">Sumy</option>
            <option value="Ternopil">Ternopil</option>
            <option value="Vinnytsia">Vinnytsia</option>
            <option value="Volyn">Volyn</option>
            <option value="Zakarpattia">Zakarpattia</option>
            <option value="Zaporizhzhia">Zaporizhzhia</option>
            <option value="Zhytomyr">Zhytomyr</option>
            <option value="c. Kyiv">c. Kyiv</option>
            <option value="c. Sevastopol">c. Sevastopol</option>
          </CustomSelect>
          <CustomInput
            label="Longitude"
            name="x"
            type="string"
            placeholder="Longitude of object WGS-84. Example: 49.877565"
          />
          <CustomInput
            label="Latitude"
            name="y"
            type="string"
            placeholder="Latitude of object WGS-84. Example: 32.809059"
          />
          <CustomSelect
            label="Natural zones"
            name="natural_zones"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="Mixed (coniferous-and-broad-leaved) woods">
              Mixed (coniferous-and-broad-leaved) woods
            </option>
            <option value="Broad-leaved forests">Broad-leaved forests</option>
            <option value="Forest-steppe">Forest-steppe</option>
            <option value="Steppe">Steppe</option>
            <option value="Ukraine Carpathians">Ukraine Carpathians</option>
            <option value="Crimean Mountains">Crimean Mountains</option>
          </CustomSelect>
          {/* <CustomSelect
            label="Physiographical Lands"
            name="physiographical_l"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="Polessye region">Polessye region</option>
            <option value="West Ukraine region">West Ukraine region</option>
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
          </CustomSelect> */}
          <CustomInput
            label="Locality (natural / historical)"
            name="locality"
            type="string"
            placeholder="Locality (natural / historical) of object. Example: Storozhove  mound complex"
          />
          <CustomInput
            label="Object (natural / historical)"
            name="object"
            type="string"
            placeholder="Object (natural / historical) of the research object. Example: Rampart of the Eastern hillfort"
          />
          <CustomInput
            label="Researcher"
            name="researcher"
            type="string"
            placeholder="Researcher or researchers. Example: Doroshkevych Serhii, Kushnir Anatolii"
          />
          <CustomInput
            label="Year of research"
            name="year"
            type="number"
            placeholder="Year the research object. Example: 2022"
          />
          <CustomInput
            label="Research methods used"
            name="research_methods"
            type="string"
            placeholder="Methods that were used in the research. Example: Paleopedological (macromorphological and micromorphological  analyses), soil-geochemical analysis"
          />
          <CustomInput
            label="Modern soil"
            name="modern_soil"
            type="string"
            placeholder="Modern soil. Example: Chernozems typical"
          />
          <CustomInput
            label="Thickness of soil profile (m.)"
            name="soil_m"
            type="string"
            placeholder="Thickness of soil profile (m). Example: 1.2"
          />
          <CustomInput
            label="Buried soil (soil material)"
            name="buried_soil"
            type="string"
            placeholder="Buried soil (soil material). Example: Ordinary  chernozems"
          />
          <CustomInput
            label="Thickness of paleosoil (m.)"
            name="paleosoil_m"
            type="string"
            placeholder="Thickness of paleosoil (m.). Example: 0.5"
          />
          <CustomSelect
            label="Period holocene"
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
            label="Archaeological dating / dating"
            name="arch_dating"
            type="string"
            placeholder="Archaeological dating / dating the research object. Example: Catacomb Grave culture (3800 ВР)"
          />
          <CustomInput
            label="References"
            name="references"
            type="string"
            placeholder="Example: Matviishyna Zh, Kushnir A (2014). Geoarchaeological research of the burial mound on the left bank of the Dnieper River. Materials of the scientific conference on archaeological soil science, 138-141 (In russian)"
          />
          <CustomInput
            label="PDF"
            name="pdf"
            type="string"
            placeholder="URL to read the research"
          />
          <CustomInput
            label="Foto"
            name="foto"
            type="string"
            placeholder="Url to foto research in Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"
          />
          <CustomInput
            label="Small foto"
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

export default FormObjectAddEng;
