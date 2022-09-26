import FormObjectAddEng from './FormObjectAdd/FormObjectAddEng';
import FormObjectAddUkr from './FormObjectAdd/FormObjectAddUkr';
import Homer from '../../assets/img/not_found.gif';
import './Forms.css';

export default function Forms() {
  return (
    <>
      <div className="FormsContainer">
        <h2 className="FormsTitle">Українська форма заповнення</h2>
        <span className="FormsText">
          вся інформація про об'єкт подається укр. мовою. Але спочатку слід
          відвідати карту або таблицю.
        </span>
        <FormObjectAddUkr />
      </div>
      <div className="FormsContainer">
        <h2 className="FormsTitle">English form filling</h2>
        <span className="FormsText">
          all information about the object is provided in English language
        </span>
        <FormObjectAddEng />
      </div>
      <div className="FormsContainerMob">
        \
        <img src={Homer} alt="problem with screen" />
        <span className="FormsText">
          The screen is too small. Find a computer to enter data
        </span>
      </div>
    </>
  );
}
