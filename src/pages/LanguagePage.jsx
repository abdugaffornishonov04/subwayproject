import { useState } from "react";
import { LANGGOON } from "../data/languagesGoOn";
import { LANGUAGES } from "../data/languagesdata";

const LanguagePage = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [langNextButton, setLangNextButton] = useState(false);

  const nextButtonsIdObject = LANGGOON.find((el) => el.id === selectedButtonId);

  const nextButtonsText = nextButtonsIdObject ? nextButtonsIdObject.text : "";

  const langButtonHandler = (id) => {
    setSelectedButtonId(id);
    setLangNextButton(true);
  };

  return (
    <section className="lang-page">
      <div className="lang-page-shade">
        <div className="lang-page-wrapper">
          <h1 className="lang-page-title">Tilni Tanlang</h1>
          <div className="lang-page-btns">
            {LANGUAGES.map((el, i) => (
              <button
                onClick={() => langButtonHandler(el.id)}
                key={i}
                className={
                  selectedButtonId === el.id
                    ? "lang-page-button-selected"
                    : "lang-page-button"
                }
              >
                <img src={el.image} alt={el.lang} />
                <p>{el.lang}</p>
              </button>
            ))}
          </div>
        </div>
        <button
          className={
            langNextButton ? "lang-go-next-page-show" : "lang-go-next-page"
          }
        >
          <p>{nextButtonsText} </p>
          <img src="/arrow-right.png" alt="" />
        </button>
      </div>
    </section>
  );
};

export default LanguagePage;
