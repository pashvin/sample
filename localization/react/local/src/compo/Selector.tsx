import React, { useContext, useEffect } from "react";
import { LangContext } from "./LangContext";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "./../locale/en.json";
import esJson from "./../locale/es.json";

const resources = {
  en: {
    translation: enJson,
  },
  es: {
    translation: esJson,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

const Selector = () => {
  const langContext = useContext(LangContext);

  const onSelectionChange = (e: any) => {
    if (e?.target) {
      langContext.setLang(e.target.value);
      i18next.changeLanguage(e.target.value === "English" ? "en" : "es");
    }
  };
  return (
    <div>
      <div>Your current Language is : {langContext.lang}</div>
      <br />
      <div>
        Select your app language:
        <select className="LangInput" name="languageInput" onChange={onSelectionChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};
export default Selector;
