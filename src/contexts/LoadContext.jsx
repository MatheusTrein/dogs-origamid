import React from 'react';

export const LoadContext = React.createContext();

export const LoadStorage = ({ children }) => {
  const [generalLoading, setGeneralLoading] = React.useState(null);

  return (
    <LoadContext.Provider
      value={{
        generalLoading,
        setGeneralLoading,
      }}
    >
      {children}
    </LoadContext.Provider>
  );
};
