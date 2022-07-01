import "./Footer.css";

import LogoFacebook from "../../assets/Icon/logo_face.png";
import LogoIgu from "../../assets/Icon/logo_Igu.png";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <h2 className="footerTitle">Наші контакти</h2>
      <p className="footerText">
        Для зв'язку із дослідниками, щодо пропозицій або розвитку даної системи
        можна звернутись за наступними контактами
      </p>
      <ul className="contactList">
        <li className="item">
          <h3 className="footerTitle titleItem">Адреса</h3>
          <p className="textItem">
            вул. Володимирська, 44
            <br /> м. Київ, 01030
            <br /> Інститут географії НАН України
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">Email</h3>
          <p className="textItem">
            <a href="mailto:palaeogeography.ua@gmail.com" >
            palaeogeography.ua@gmail.com
            </a>
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">Телефон</h3>
          <p className="textItem">
            044-234-92-57 Кушнір Анатолій, <br /> Лейберюк Олександр, Швайко
            Володимир
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">Інтернет сторінки</h3>
          <ul className="listSite">
            <li>
              <a href="https://www.facebook.com/ignanu/" className="link">
                <img
                  src={LogoFacebook}
                  width="30px"
                  height="30px"
                  alt="logo facebook"
                />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://igu.org.ua/uk" className="link">
                <img
                  src={LogoIgu}
                  width="30px"
                  height="30px"
                  alt="logo IGU of NAS"
                />
                <span>Сайт</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="copyright">
        Використання матерiалiв сайту дозволяється за умови посилання на{" "}
        <a href="https://igu.org.ua/">САЙТ ЗМІНИТИ</a>  COPYRIGHT © 2022 paleo-golocen.com Всі права захищені.
      </p>
    </footer>
  );
}
