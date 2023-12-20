import { LANGUAGES } from "../data/languagesdata";

const LanguagePage = () => {
  return (
    <section className="lang-page">
      <div className="lang-page-shade">
        <div className="lang-page-wrapper">
          <h1 className="lang-page-title">Tilni Tanlang</h1>
          <div className="lang-page-btns">
            {LANGUAGES.map((el, i) => (
              <button key={i} className="lang-page-button">
                <img src={el.image} alt={el.lang} />
                <p>{el.lang}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagePage;
