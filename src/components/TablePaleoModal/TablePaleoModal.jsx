import { useEffect, Suspense } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Bars } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./TablePaleoModal.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, info }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  function img(info) {
    const url = info.Foto.split("=");
    const srcUrl = `https://drive.google.com/uc?export=view&id=${url[1]}`;
    return srcUrl;
  }

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <Suspense fallback={<Bars color="#00BFFF" height={80} width={80} />}>
          <a
            href={info.Foto}
            target="_blank"
            rel="noopener noreferrer"
            className="ModalRefImg"
          >
            <img src={img(info)} alt="Object Foto" className="ModalImg" />
          </a>
        </Suspense>

        <ul className="List_modal">
          <li>
            <b>Поселення:</b> {info.Settlement}
          </li>
          <li>
            <b>Район:</b> {info.District}
          </li>
          <li>
            <b>Область:</b> {info.Region}
          </li>
          <li>
            <b>Широта:</b> {info.Y}
          </li>
          <li>
            <b>Довгота:</b> {info.X}
          </li>
          <li>
            <b>Природна зона:</b> {info.Natural_ar}
          </li>
          <li>
            <b>Край/провінція:</b> {info.Land_Provi}
          </li>
          <li>
            <b>Приуроченість(природна/історична):</b> {info.Location}
          </li>
          <li>
            <b>Обє'кт (природний/історичний):</b> {info.Object}
          </li>
          <li>
            <b>Дослідник:</b> {info.Researcher}
          </li>
          <li>
            <b>Рік вивчення:</b> {info.Year}
          </li>
          <li>
            <b>Використані методи дослідження:</b> {info.Research_m}
          </li>
          <li>
            <b>Сучасний тип ґрунту:</b> {info.Modern_soi}
          </li>
          <li>
            <b>Потужність розірзу (м.):</b> {info.Soil_power}
          </li>
          <li>
            <b>Похований ґрунт:</b> {info.Buried_soi}
          </li>
          <li>
            <b>Потужність (м.):</b> {info.Soil2_powe}
          </li>
          <li>
            <b>Хроноітервал голоцену:</b> {info.Holocene_i}
          </li>
          <li>
            <b>Археологічне датування/ датування:</b> {info.Archeo_dat}
          </li>
          {/* <li><b>Фото:</b> <a href={info.Foto} target='_blank' rel="noopener noreferrer">{info.Foto}</a></li> */}
          <li>
            <b>Література:</b> {info.Literature}
          </li>
          <li>
            <b>Документ PDF:</b>
            <a href={info.PDF} target="_blank" rel="noopener noreferrer">
              {info.PDF}
            </a>
          </li>
        </ul>
        <CloseIcon onClick={() => onClose()} className="BtnClose" />
      </div>
    </div>,
    modalRoot,
  );
}
