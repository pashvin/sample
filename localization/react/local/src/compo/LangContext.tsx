import React, { useState, useContext } from "react";

export const LangContext = React.createContext({
  lang: "English",
  setLang: (newLang: string) => {},
});

export const LangProvider = ({ children }: any) => {
  const [lang, setLang] = useState("English");
  const setLangFn = (newLang: string) => {
    setLang(newLang);
  };
  return (
    <LangContext.Provider value={{ lang: lang, setLang: setLangFn }}>
      {children}
    </LangContext.Provider>
  );
};
