import React, { useContext } from "react";

export const useContextGetter = <T,>(
  context: React.Context<T | undefined>,
  contextName: string,
  contextProviderName: string
) => {
  const newContext = useContext(context);
  if (!newContext) {
    throw new Error(`${contextName} must be within a ${contextProviderName}`);
  }
  return newContext;
};
