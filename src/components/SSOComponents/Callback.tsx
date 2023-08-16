import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { useFSMLoaderContext } from "../../contexts/FiniteStateMachines/FSMLoaderContext";
import { getAccessToken } from "../../controllers/ssoController";
import { FSMLoaderStates } from "../../models/types/FiniteStateMaachineTypes/FSMLoaderStates";

const grabToken = async (code: string) => {
  const response$ = await getAccessToken(code);
  return new Promise((resolve, reject) => {
    response$.subscribe({
      next: resolve,
      error: reject,
    });
  });
};

const Callback: React.FC = () => {
  const { currentState } = useFSMLoaderContext();
  const location = useLocation();
  const code: string = location.state.code;

  const { data, error } = useQuery(
    ["accessToken", code],
    () => grabToken(code),
    { retry: 3 }
  );

  useEffect(() => {
    if (currentState === FSMLoaderStates.SSO_LOADING_STATE) {
      console.log(data);
    }
  }, [data]);

  return <div>Callback</div>;
};

export default Callback;
