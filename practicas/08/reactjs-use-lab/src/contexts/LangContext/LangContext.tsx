import React, { createContext, useState } from "react";
import SelectLang from "../../components/SelectLang/SelectLang";
import Header from "../../components/Header/Header";

type Traduccion = {
  bienvenida: string;
};

export const LangCtx = createContext<Traduccion | undefined>(undefined);

const traducciones: Record<string, Traduccion> = {
  es: { bienvenida: "Bienvenido a mi Startup" },
  en: { bienvenida: "Welcome to my Startup" },
  fr: { bienvenida: "Bienvenue dans ma Startup" },
};

const Context = () => {
  const [lang, setLang] = useState<keyof typeof traducciones>("es");

  return (
    <div>
      <SelectLang
        langs={Object.keys(traducciones)}
        onChangeLang={setLang}
        selectedLang={lang}
      />
      <LangCtx.Provider value={traducciones[lang]}>
        <Header />
      </LangCtx.Provider>
    </div>
  );
};

export default Context;
