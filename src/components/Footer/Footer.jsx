import './Footer.css';

import LogoFacebook from '../../assets/Icon/logo_face.png';
import LogoIgu from '../../assets/Icon/logo_Igu.png';
import { t } from 'i18next';

export default function Footer() {
  return (
    <footer className="footerContainer">
      <h2 className="footerTitle">{t('footer.title')}</h2>
      <p className="footerText">{t('footer.text')}</p>
      <ul className="contactList">
        <li className="item">
          <h3 className="footerTitle titleItem">{t('footer.address')}</h3>
          <p className="textItem">
            {t('footer.addressName1')}
            <br /> {t('footer.addressName2')}
            <br /> {t('footer.addressName3')}
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">Email</h3>
          <p className="textItem">
            <a href="mailto:palaeogeography.ua@gmail.com">
              palaeogeography.ua@gmail.com
            </a>
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">{t('footer.phone')}</h3>
          <p className="textItem">
            044-234-92-57 {t('footer.avtorName1')}, <br />{' '}
            {t('footer.avtorName2')}, {t('footer.avtorName3')}
          </p>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">{t('footer.webPage')}</h3>
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
                <span>{t('footer.site')}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="copyright">
        {t('footer.copyringht1')}
        <a href="https://igu.org.ua/">САЙТ ЗМІНИТИ</a> COPYRIGHT © 2022
        paleo-golocen.com {t('footer.copyringht2')}
      </p>
    </footer>
  );
}
