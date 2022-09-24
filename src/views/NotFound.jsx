import Anima from '../assets/img/not_found.gif';

const NotFound = () => {
  return (
    <>
      <div>
        <h2>Упппс!!! Щось пішло не так (</h2>
        <p>
          Такої сторінки не існує або Ви ввели не парвильну адресу. Errors 404.
          Not Found
        </p>
        <img src={Anima} alt="копай" />
      </div>
    </>
  );
};

export default NotFound;
