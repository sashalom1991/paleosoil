import './Description.css';
import MapPaleoSoil from '../../assets/img/description_map.png';
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
              <a
                href="https://qgiscloud.com/paleogeo_ua/Paleogeographic_studies/?bl=ocm_landscape&st=&l=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%96%20%D0%B7%D0%BE%D0%BD%D0%B8%2C%D0%91%D0%B0%D0%B7%D0%B0%20%D0%B4%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D1%8C&t=Paleogeographic_studies&e=1488176%2C5079707%2C4874843%2C7437144"
                alt="Paleomap in Qgis Cloud"
              >
                QGIS Cloud.
              </a>
            </p>
          </div>
          <img
            src={MapPaleoSoil}
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
      </div>
    </>
  );
}

export default Description;
