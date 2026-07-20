import type { TFunction } from "i18next";
import React, { createContext, useContext } from "react";

import useTranslate from "../../hooks/use_translate";
import i18next from "../../utils/localization";

type MainPageContextProps = {
  translate: TFunction<"translation", undefined>;
};

const defaultValues: MainPageContextProps = {
  translate: i18next.t,
};

const MainPageContext = createContext(defaultValues);

export function MainPageContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const { translate } = useTranslate();

  return (
    <MainPageContext.Provider
      value={{
        ...defaultValues,
        translate,
      }}
    >
      {props.children}
    </MainPageContext.Provider>
  );
}

export function useMainPageContext() {
  const context = useContext(MainPageContext);
  if (context === undefined) {
    throw new Error("MainPage Context Error");
  }
  return context;
}
