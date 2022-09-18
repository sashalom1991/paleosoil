import { useState, useEffect } from 'react';
import FormObjectAddUkr from '../components/FormObjectAdd/FormObjectAddUkr';
import FormObjectAddEng from '../components/FormObjectAdd/FormObjectAddEng';

const NewObjectAdd = () => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  // });

  // console.log(screenWidth);

  return (
    <>
      <div style={{ width: '50%', margin: '15px' }}>
        <h2 style={{ padding: '15px 10px' }}>Українська форма заповнення</h2>
        <span style={{ margin: '10px 5px' }}>
          вся інформація про об'єкт подається укр. мовою
        </span>
        <FormObjectAddUkr />
      </div>
      <div style={{ width: '50%', margin: '15px' }}>
        <h2 style={{ padding: '15px 10px' }}>English form filling</h2>
        <span style={{ margin: '10px 5px' }}>
          all information about the object is provided in English language
        </span>
        <FormObjectAddEng />
      </div>
    </>
  );
};

export default NewObjectAdd;
