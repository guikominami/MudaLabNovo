import { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "",
  changeLanguage: () => {},
});

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("portuguese");

  function handleChangeLanguage(newLanguage) {
    setLanguage(newLanguage);
  }
  
  const ctxValue = {
    language: language,
    changeLanguage: handleChangeLanguage
  }

  return (
    <LanguageContext.Provider value={ctxValue}>
      {children}
    </LanguageContext.Provider>
  );
}
