import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import addEngSchema from '../../../schemas/addEngSchema';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPaleosoilEnPoint,
  getAllPaleosoilEnPoint,
  fetchPaleosoilEnPoint,
} from '../../../redux/paleosoilEn';

const FormObjectAddEng = () => {
  const data = useSelector(getAllPaleosoilEnPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaleosoilEnPoint());
  }, [dispatch]);

  const iD = data.length + 1;
  return (
    <Formik
      initialValues={{
        id: iD,
        settlement: '',
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
          dispatch(addPaleosoilEnPoint(values));
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="settlement"
            name="settlement"
            placeholder="Please select a settlement"
          />
          <CustomSelect label="Region" name="region" placeholder="">
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
          <CustomSelect
            label="Physiographical Lands"
            name="physiographical_l"
            placeholder=""
          >
            <option value="">- - - - </option>
            <option value="Polessye region">Polessye region</option>
            <option value="West Ukraine region">West Ukraine region</option>
            <option value="Podolia–Dnipro forest steppe region">
              Podolia–Dnipro forest steppe region
            </option>
            <option value="East Ukraine forest steppe region">
              East Ukraine forest steppe region
            </option>
            <option value="Left bank of Dnipro forest steppe region">
              Left bank of Dnipro forest steppe region
            </option>
            <option value="Dnister–Dnipro region">Dnister–Dnipro region</option>
            <option value="Left bank of Dnipro–Sea of Azov coast region">
              Left bank of Dnipro–Sea of Azov coast region
            </option>
            <option value="Donets region">Donets region</option>
            <option value="Trans-Donets–Don region">
              Trans-Donets–Don region
            </option>
            <option value="Black Sea coast central steppe region">
              Black Sea coast central steppe region
            </option>
            <option value="Black Sea–Sea of Azov coastal region">
              Black Sea–Sea of Azov coastal region
            </option>
            <option value="Crimean steppe region">Crimean steppe region</option>
            <option value="Carpathians mountain region">
              Carpathians mountain region
            </option>
            <option value="Crimean mountain region">
              Crimean mountain region
            </option>
          </CustomSelect>
          <CustomInput
            label="Locality"
            name="locality"
            placeholder="Locality (natural / historical) of object. Example: Storozhove  mound complex"
          />
          <CustomInput
            label="Object"
            name="object"
            placeholder="Object (natural / historical) of the research object. Example: Rampart of the Eastern hillfort"
          />
          <CustomInput
            label="Researcher"
            name="researcher"
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
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default FormObjectAddEng;
