import './Footer.css';

import LogoFacebook from '../../assets/icon/logo_face.png';
import LogoIgu from '../../assets/icon/logo_Igu.png';
import LogoLinkedIn from '../../assets/icon/logo_linkedin.png';
import { t } from 'i18next';

const avtor = [
  {
    name: t('footer.avtorName1'),
    fb: 'https://www.facebook.com/profile.php?id=100004426594071',
    linkeId: 'https://www.linkedin.com/in/anatolii-kushnir-290815175/',
  },
  {
    name: t('footer.avtorName2'),
    fb: 'https://www.facebook.com/sasha.leiberiuk/',
    linkeId: 'https://www.linkedin.com/in/oleksandr-leiberiuk-a92778215/',
  },
  {
    name: t('footer.avtorName3'),
    fb: 'https://www.facebook.com/volodymyr.shvaiko.97',
    linkeId: 'https://www.linkedin.com/in/volodymyrshvaiko/',
  },
];

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footerContainer">
      <h3 className="footerTitle">{t('footer.title')}</h3>
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
          <ul>
            <li className="textItem"> 044-234-92-57</li>
            {avtor.map(info => (
              <li className="textItem avtor" key={info.name}>
                {info.name}
                <span className="avtorIcon">
                  <a href={info.fb} className="link">
                    <img src={LogoFacebook} alt="logo facebook" />
                  </a>
                </span>
                <span className="avtorIcon">
                  <a href={info.linkeId} className="link">
                    <img src={LogoLinkedIn} alt="logo linkedIn" />
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="item">
          <h3 className="footerTitle titleItem">{t('footer.webPage')}</h3>
          <ul className="listSite">
            <li>
              <a href="https://www.facebook.com/ignanu/" className="linkIGU">
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
              <a href="https://igu.org.ua/uk" className="linkIGU">
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
        <a href="https://paleosoil-holocen.info/"> paleosoil-holocen.info </a>
        COPYRIGHT © {String(date.getFullYear())} paleosoil-holocen.info.
        {t('footer.copyringht2')}
      </p>
    </footer>
  );
}
