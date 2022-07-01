import "./Description.css";
import MapPaleoSoil from "../../assets/img/description_map.png";

function Description() {
  return (
    <>
      <div className="DescContainer">
        <div className="DescInfo">
          <div>
            <h1 className="DescTitle">
              Палеоґрунтознавчі дослідження природи голоцену в межах рівнинної
              території України
            </h1>
            <p className="DescText">
              Зібрані результати для бази даних отримані із опублікованих
              наукових матеріалів. Актуальна версія бази даних розміщується на
              ресурсі{" "}
              <a
                href="https://qgiscloud.com/paleogeo_ua/Paleogeographic_studies/?bl=ocm_landscape&st=&l=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%96%20%D0%B7%D0%BE%D0%BD%D0%B8%2C%D0%91%D0%B0%D0%B7%D0%B0%20%D0%B4%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D1%8C&t=Paleogeographic_studies&e=1488176%2C5079707%2C4874843%2C7437144"
                alt="Paleomap in Qgis Cloud"
              >
                QGIS Cloud
              </a>
              . Дослідження проведене за конкурсним проєктом № Ф82/160-2019 в
              рамках гранту Президента України "Отримання та просторова
              прив’язка даних палеоґрунтознавчих досліджень голоцену в межах
              рівнинної частини України на основі ГІС – технологій" та НДР
              молодих вчених НАН України 2021-2022 рр. «Розробка
              веб-орієнтованого ГІС-застосунку для управління даними
              палеоґрунтознавчих досліджень голоцену в умовах адаптації до
              кліматичних змін.
            </p>
          </div>
          <img
            src={MapPaleoSoil}
            alt="Растрова карта ґрутнів"
            className="DescImg"
          />
        </div>

        <div className="DescGuest">
          <h2 className="DescGusetTitle">
            Повідомити про виявлене дослідження
          </h2>
          <p className="DescGuestText">
            Якщо Ви хочете доповнити дану базу палеоґрунтознавчих досліджень
            своїми дослідженнями або знахідками, це можна зробити наступними
            шляхами. Про знахідку можна повідомити за допомогою листа на нашу
            скриньку або ж заповнивши Google Form дослідження. Через певний час,
            після розгялду заявки, Ваша знахідка буде додана у БД
            палеоґрунтознавчих досліджень.
          </p>
          <span className="DescGuestLink">
            <a href="mailto:palaeogeography.ua@gmail.com">
              palaeogeography.ua@gmail.com
            </a>
          </span>
          <span className="DescGuestLink">
            <a href="https://forms.gle/2pwnzSoTbZfdEGWK8" target='blank'>
              Google-Form
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Description;
