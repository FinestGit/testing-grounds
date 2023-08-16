import React, { createContext, useState } from "react";

import { useContextGetter } from "../utils/useContextGetter";

interface SSOContextProperties {
  token: string;
}

interface SSOContextProviderProperties {
  children: React.ReactNode;
}

const SSOContext = createContext<SSOContextProperties | undefined>(undefined);

const useSSOContext = () => {
  return useContextGetter(SSOContext, "useSSOContext", "SSOContextProvider");
};

const SSOContextProvider: React.FC<SSOContextProviderProperties> = ({
  children,
}) => {
  const [token] = useState<string>("");

  return (
    <SSOContext.Provider value={{ token }}>{children}</SSOContext.Provider>
  );
};

export { useSSOContext, SSOContextProvider };
