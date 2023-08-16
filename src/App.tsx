import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import Callback from "./components/SSOComponents/Callback";
import Login from "./components/SSOComponents/Login";
import { useFSMLoaderContext } from "./contexts/FiniteStateMachines/FSMLoaderContext";
import { SSOContextProvider } from "./contexts/SSOContext";
import { routes } from "./models/routes";
import { FSMLoaderStates } from "./models/types/FiniteStateMaachineTypes/FSMLoaderStates";

import "./styles/app.scss";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { currentState } = useFSMLoaderContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="application-wrapper">
        {currentState === FSMLoaderStates.SSO_LOADING_STATE ? (
          <SSOContextProvider>
            <Routes>
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.callback} element={<Callback />} />
            </Routes>
          </SSOContextProvider>
        ) : (
          <></>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
