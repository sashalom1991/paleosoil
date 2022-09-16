import { useEffect, Suspense } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './TablePaleoModal.css';
import { t } from 'i18next';

const modalRoot = document.querySelector('#modal-root');

let Body = document.querySelector('body');

export default function Modal({ onClose, info }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
      Body.style.overflowY = 'auto';
      console.log('body');
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
      Body.style.overflowY = 'auto';
      console.log('body');
    }
  };

  const handelClickBtn = () => {
    onClose();
    Body.style.overflowY = 'auto';
  };

  function img(info) {
    // default img https://drive.google.com/file/d/1Hb7Hb0qgDDdvvF2TbADAv1HsmAgCOFvr/view?usp=sharing
    if (typeof info.small_foto === 'string') {
      const url = info.small_foto.split('/');
      const srcUrl = `https://drive.google.com/uc?export=view&id=${url[5]}`;
      return srcUrl;
    } else {
      return `https://drive.google.com/uc?export=view&id=1Hb7Hb0qgDDdvvF2TbADAv1HsmAgCOFvr`;
    }
  }

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <Suspense fallback={<Bars color="#00BFFF" height={80} width={80} />}>
          <a
            href={info.foto}
            target="_blank"
            rel="noopener noreferrer"
            className="ModalRefImg"
          >
            <img src={img(info)} alt="Object Foto" className="ModalImg" />
          </a>
        </Suspense>

        <ul className="List_modal">
          <li>
            <b>{t('infoPaleo.settl')}</b> {info.settlement}
          </li>
          <li>
            <b>{t('infoPaleo.district')}</b> {info.district}
          </li>
          <li>
            <b>{t('infoPaleo.region')}</b> {info.region}
          </li>
          <li>
            <b>{t('infoPaleo.lat')}</b> {info.y}
          </li>
          <li>
            <b>{t('infoPaleo.long')}</b> {info.x}
          </li>
          <li>
            <b>{t('infoPaleo.natZones')}</b> {info.natural_zones}
          </li>
          <li>
            <b>{t('infoPaleo.physLand')}</b> {info.physiographical_l}
          </li>
          <li>
            <b>{t('infoPaleo.locality')}</b> {info.locality}
          </li>
          <li>
            <b>{t('infoPaleo.object')}</b> {info.object}
          </li>
          <li>
            <b>{t('infoPaleo.researcher')}</b> {info.researcher}
          </li>
          <li>
            <b>{t('infoPaleo.year')}</b> {info.year}
          </li>
          <li>
            <b>{t('infoPaleo.researMethod')}</b> {info.research_methods}
          </li>
          <li>
            <b>{t('infoPaleo.modernSoil')}</b> {info.modern_soil}
          </li>
          <li>
            <b>{t('infoPaleo.soilProM')}</b> {info.soil_m}
          </li>
          <li>
            <b>{t('infoPaleo.burSoil')}</b> {info.buried_soil}
          </li>
          <li>
            <b>{t('infoPaleo.paleosoilM')}</b> {info.paleosoil_m}
          </li>
          <li>
            <b>{t('infoPaleo.pHoloc')}</b> {info.period_holocene}
          </li>
          <li>
            <b>{t('infoPaleo.archDat')}</b> {info.arch_dating}
          </li>
          <li>
            <b>{t('infoPaleo.references')}</b> {info.references}
          </li>
          <li>
            <b>{t('infoPaleo.pdf')}</b>
            <a href={info.pdf} target="_blank" rel="noopener noreferrer">
              {info.pdf}
            </a>
          </li>
        </ul>
        <CloseIcon onClick={handelClickBtn} className="BtnClose" />
      </div>
    </div>,
    modalRoot,
  );
}
