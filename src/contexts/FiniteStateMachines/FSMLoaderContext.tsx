import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { routes } from "../../models/routes";
import { FSMLoaderStates } from "../../models/types/FiniteStateMaachineTypes/FSMLoaderStates";
import { useContextGetter } from "../../utils/useContextGetter";

interface FSMLoaderContextProperties {
  currentState: FSMLoaderStates;
  setCurrentState: React.Dispatch<React.SetStateAction<FSMLoaderStates>>;
}

interface FSMLoaderContextProviderProperties {
  children: React.ReactNode;
}

const FSMLoaderContext = createContext<FSMLoaderContextProperties | undefined>(
  undefined
);

const useFSMLoaderContext = () => {
  return useContextGetter(
    FSMLoaderContext,
    "useFSMLoaderContext",
    "FSMLoaderContextProvider"
  );
};

const FSMLoaderContextProvider: React.FC<
  FSMLoaderContextProviderProperties
> = ({ children }) => {
  const [currentState, setCurrentState] = useState<FSMLoaderStates>(
    FSMLoaderStates.INITIAL_LOADING_STATE
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const code = new URLSearchParams(location.search).get("code");
    if (currentState === FSMLoaderStates.INITIAL_LOADING_STATE) {
      if (code) {
        setCurrentState(FSMLoaderStates.SSO_LOADING_STATE);
        navigate(routes.callback, { state: { code: code } });
      } else {
        setCurrentState(FSMLoaderStates.SSO_LOADING_STATE);
        navigate(routes.login);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FSMLoaderContext.Provider value={{ currentState, setCurrentState }}>
      {children}
    </FSMLoaderContext.Provider>
  );
};

export { useFSMLoaderContext, FSMLoaderContextProvider };
