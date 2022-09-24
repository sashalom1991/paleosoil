// import { useState, useEffect } from 'react';
import FormObjectAddUkr from '../components/FormObjectAdd/FormObjectAddUkr';
import AdvancedForm from '../components/FormObjectAdd/AdvancedForm';

const NewObjectAdd = () => {
  return (
    <>
      <>
        <div style={{ width: '50%', margin: '15px' }}>
          <h2 style={{ padding: '15px 10px' }}>Українська форма заповнення</h2>
          <span style={{ margin: '10px 5px' }}>
            вся інформація про об'єкт подається укр. мовою. Але спочатку слід
            відвідати карту або таблицю.
          </span>
          <FormObjectAddUkr />
        </div>
        <div style={{ width: '50%', margin: '15px' }}>
          <h2 style={{ padding: '15px 10px' }}>English form filling</h2>
          <span style={{ margin: '10px 5px' }}>
            all information about the object is provided in English language
          </span>
          {/* <FormObjectAddEng /> */}
          <AdvancedForm />
        </div>
      </>
    </>
  );
};

export default NewObjectAdd;
