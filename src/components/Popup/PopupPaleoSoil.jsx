import './Popup.css';

const PopupPaleoSoil = ({ props }) => {
  return (
    <div className='DescriptionAll'>
        <p><b>Поселення:</b> {props.settlement}</p>
        <p><b>Район:</b> {props.district}</p>
        <p><b>Область:</b> {props.region}</p>
        <p><b>Широта:</b> {props.y}</p>
        <p><b>Довгота:</b> {props.x}</p>
        <p><b>Природна зона:</b> {props.natural_zones}</p>
        <p><b>Край/провінція:</b> {props.physiographical_l}</p>
        <p><b>Приуроченість(природна/історична):</b> {props.locality}</p>
        <p><b>Обє'кт (природний/історичний):</b> {props.object}</p>
        <p><b>Дослідник:</b> {props.researcher}</p>
        <p><b>Рік вивчення:</b> {props.year}</p>
        <p><b>Використані методи дослідження:</b> {props.research_methods}</p>
        <p><b>Сучасний тип ґрунту:</b> {props.modern_soil}</p>
        <p><b>Потужність розірзу (м.):</b> {props.soil_m}</p>
        <p><b>Похований ґрунт:</b> {props.buried_soil}</p>
        <p><b>Потужність (м.):</b> {props.paleosoil_m}</p>
        <p><b>Хроноітервал голоцену:</b> {props.period_holocene}</p>
        <p><b>Археологічне датування/ датування:</b> {props.arch_dating}</p>
        <p><b>Фото:</b> <a href={props.foto} target='_blank' rel="noopener noreferrer">{props.foto}</a></p>
        <p><b>Література:</b> {props.references}</p>
        <p><b>Документ PDF:</b><a href={props.pdf} target='_blank'  rel="noopener noreferrer">{props.pdf}</a></p>
    </div>
  );
};

export default PopupPaleoSoil;
