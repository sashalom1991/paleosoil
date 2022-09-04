import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import addUkrSchema from '../../schemas/addSchema';

import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

import { useDispatch } from 'react-redux';
import { addPaleosoilPoint } from '../../redux/paleosoil';

// const onSubmit = async (values, actions) => {
//   // console.log(values);
//   // console.log(actions);
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   actions.resetForm();
//   return values;
// };

const FormObjectAddUkr = () => {
  // const [createPaleosoilPointUkr, { isLoading }] = useAddPointMutation();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
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
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Settlement"
            name="settlement"
            type="string"
            placeholder="Settlement near the research object. Example: Storozhove"
          />
          <CustomInput
            label="District"
            name="district"
            type="string"
            placeholder="District the research object. Example: Buchanskyi"
          />
          <CustomInput
            label="Region"
            name="region"
            type="string"
            placeholder="Region the research object. Example: Poltava"
          />
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
          <CustomInput
            label="Natural zones"
            name="natural_zones"
            type="string"
            placeholder="Natural zones the research object. Example: Forest-steppe"
          />
          <CustomInput
            label="Physiographical Lands"
            name="physiographical_l"
            type="string"
            placeholder="Physiographical Lands. Example: Left bank of Dnipro forest steppe region"
          />
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

export default FormObjectAddUkr;
