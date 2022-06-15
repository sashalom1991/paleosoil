import './Popup.css';

const PopupPaleoSoil = ({ props }) => {
  console.log(props);
  return (
    <div className='DescriptionAll'>
        <p><b>Поселення:</b> {props.Settlement}</p>
        <p><b>Район:</b> {props.District}</p>
        <p><b>Область:</b> {props.Region}</p>
        <p><b>Широта:</b> {props.Y}</p>
        <p><b>Довгота:</b> {props.X}</p>
        <p><b>Природна зона:</b> {props.Natural_ar}</p>
        <p><b>Край/провінція:</b> {props.Land_Provi}</p>
        <p><b>Приуроченість(природна/історична):</b> {props.Location}</p>
        <p><b>Обє'кт (природний/історичний):</b> {props.Object}</p>
        <p><b>Дослідник:</b> {props.Researcher}</p>
        <p><b>Рік вивчення:</b> {props.Year}</p>
        <p><b>Використані методи дослідження:</b> {props.Research_m}</p>
        <p><b>Сучасний тип ґрунту:</b> {props.Modern_soi}</p>
        <p><b>Потужність розірзу (м.):</b> {props.Soil_power}</p>
        <p><b>Похований ґрунт:</b> {props.Buried_soi}</p>
        <p><b>Потужність (м.):</b> {props.Soil2_powe}</p>
        <p><b>Хроноітервал голоцену:</b> {props.Holocene_i}</p>
        <p><b>Археологічне датування/ датування:</b> {props.Archeo_dat}</p>
        <p><b>Фото:</b> <a href={props.Foto} target='_blank' rel="noopener noreferrer">{props.Foto}</a></p>
        <p><b>Література:</b> {props.Literature}</p>
        <p><b>Документ PDF:</b><a href={props.PDF} target='_blank'  rel="noopener noreferrer">{props.PDF}</a></p>
    </div>
  );
};

export default PopupPaleoSoil;
