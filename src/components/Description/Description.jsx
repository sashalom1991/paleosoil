import './Description.css';
import { Link } from 'react-router-dom';
import MapPaleoSoil_05 from '../../assets/img/description_map@0.5.webp';
import MapPaleoSoil_025 from '../../assets/img/description_map@0.25.webp';
import Certif_ukr from '../../assets/img/certificate_ukr.jpg';
import Certif_eng from '../../assets/img/certificate_eng.jpg';
import { useTranslation } from 'react-i18next';

function Description() {
  const { t } = useTranslation();
  return (
    <>
      <div className="DescContainer">
        <div className="DescInfo">
          <div>
            <h1 className="DescTitle">{t('desc.title')}</h1>
            <p className="DescText">
              {t('desc.text1')}. {t('desc.text2')}
              <Link to="/map" alt="Paleomap">
                map.
              </Link>
            </p>
          </div>
          <img
            srcSet={(MapPaleoSoil_05, MapPaleoSoil_025)}
            src={MapPaleoSoil_05}
            alt="Растрова карта ґрутнів"
            className="DescImg"
          />
        </div>

        <div className="DescGuest">
          <h2 className="DescGusetTitle">{t('descGuest.title')}</h2>
          <p className="DescGuestText">{t('descGuest.text')}</p>
          <span className="DescGuestLink">
            <a href="mailto:palaeogeography.ua@gmail.com">
              palaeogeography.ua@gmail.com
            </a>
          </span>
          <span className="DescGuestLink">
            <a href="https://forms.gle/2pwnzSoTbZfdEGWK8" target="blank">
              Google-Form
            </a>
          </span>
        </div>
        <div className="DescCertif">
          <h4 className="DescCertifTitle">{t('desc.title_sertificate')}</h4>
          <div className="DescCertifCont">
            <img
              src={Certif_ukr}
              alt="certificate ukraine"
              className="DescCertifImg"
            />
            <img
              src={Certif_eng}
              alt="certificate english"
              className="DescCertifImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
