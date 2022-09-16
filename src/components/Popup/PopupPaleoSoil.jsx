import './Popup.css';
import { t } from 'i18next';

const PopupPaleoSoil = ({ props }) => {
  return (
    <div className="DescriptionAll">
      <p>
        <b>{t('infoPaleo.settl')}</b> {props.settlement}
      </p>
      <p>
        <b>{t('infoPaleo.district')}</b> {props.district}
      </p>
      <p>
        <b>{t('infoPaleo.region')}</b> {props.region}
      </p>
      <p>
        <b>{t('infoPaleo.lat')}</b> {props.y}
      </p>
      <p>
        <b>{t('infoPaleo.long')}</b> {props.x}
      </p>
      <p>
        <b>{t('infoPaleo.natZones')}</b> {props.natural_zones}
      </p>
      <p>
        <b>{t('infoPaleo.physLand')}</b> {props.physiographical_l}
      </p>
      <p>
        <b>{t('infoPaleo.locality')}</b> {props.locality}
      </p>
      <p>
        <b>{t('infoPaleo.object')}</b> {props.object}
      </p>
      <p>
        <b>{t('infoPaleo.researcher')}</b> {props.researcher}
      </p>
      <p>
        <b>{t('infoPaleo.year')}</b> {props.year}
      </p>
      <p>
        <b>{t('infoPaleo.researMethod')}</b> {props.research_methods}
      </p>
      <p>
        <b>{t('infoPaleo.modernSoil')}</b> {props.modern_soil}
      </p>
      <p>
        <b>{t('infoPaleo.soilProM')}</b> {props.soil_m}
      </p>
      <p>
        <b>{t('infoPaleo.burSoil')}</b> {props.buried_soil}
      </p>
      <p>
        <b>{t('infoPaleo.paleosoilM')}</b> {props.paleosoil_m}
      </p>
      <p>
        <b>{t('infoPaleo.pHoloc')}</b> {props.period_holocene}
      </p>
      <p>
        <b>{t('infoPaleo.archDat')}</b> {props.arch_dating}
      </p>
      <p>
        <b>{t('infoPaleo.foto')}</b>{' '}
        <a href={props.foto} target="_blank" rel="noopener noreferrer">
          {props.foto}
        </a>
      </p>
      <p>
        <b>{t('infoPaleo.references')}</b> {props.references}
      </p>
      <p>
        <b>{t('infoPaleo.pdf')}</b>
        <a href={props.pdf} target="_blank" rel="noopener noreferrer">
          {props.pdf}
        </a>
      </p>
    </div>
  );
};

export default PopupPaleoSoil;
