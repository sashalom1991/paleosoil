import { useEffect, Suspense } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './TablePaleoModal.css';

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
            <b>Поселення:</b> {info.settlement}
          </li>
          <li>
            <b>Район:</b> {info.district}
          </li>
          <li>
            <b>Область:</b> {info.region}
          </li>
          <li>
            <b>Широта:</b> {info.y}
          </li>
          <li>
            <b>Довгота:</b> {info.x}
          </li>
          <li>
            <b>Природна зона:</b> {info.natural_zones}
          </li>
          <li>
            <b>Край/провінція:</b> {info.physiographical_l}
          </li>
          <li>
            <b>Приуроченість(природна/історична):</b> {info.locality}
          </li>
          <li>
            <b>Обє'кт (природний/історичний):</b> {info.object}
          </li>
          <li>
            <b>Дослідник:</b> {info.researcher}
          </li>
          <li>
            <b>Рік вивчення:</b> {info.year}
          </li>
          <li>
            <b>Використані методи дослідження:</b> {info.research_methods}
          </li>
          <li>
            <b>Сучасний тип ґрунту:</b> {info.modern_soil}
          </li>
          <li>
            <b>Потужність розірзу (м.):</b> {info.soil_m}
          </li>
          <li>
            <b>Похований ґрунт:</b> {info.buried_soil}
          </li>
          <li>
            <b>Потужність (м.):</b> {info.paleosoil_m}
          </li>
          <li>
            <b>Хроноітервал голоцену:</b> {info.period_holocene}
          </li>
          <li>
            <b>Археологічне датування/ датування:</b> {info.arch_dating}
          </li>
          <li>
            <b>Література:</b> {info.references}
          </li>
          <li>
            <b>Документ PDF:</b>
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
