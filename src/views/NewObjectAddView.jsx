import FormObjectAddUkr from '../components/FormObjectAdd/FormObjectAddUkr';

const NewObjectAdd = () => {
  return (
    <div style={{ width: '50%' }}>
      <h2 style={{ padding: '15px 10px' }}>Українська форма заповнення</h2>
      <span style={{ margin: '10px 5px' }}>
        вся інформація про об'єкт подається укр. мовою
      </span>
      <FormObjectAddUkr />
    </div>
  );
};

export default NewObjectAdd;
