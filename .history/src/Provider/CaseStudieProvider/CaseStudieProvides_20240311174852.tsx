import React, { createContext, useContext, useState } from 'react';

const CaseStudieContext = createContext('');

export const useInfoText = () => useContext(CaseStudieContext);

export const InfoTextProvider = ({ children }: { children: React.ReactNode }) => {
  const [infoText, setInfoText] = useState('');

  const setInfoTextValue = (text: string) =>{
    setInfoText(text);
  };

  return (
    <CaseStudieContext.Provider value={{ infoText, setInfoTextValue }}>
      {children}
    </CaseStudieContext.Provider>
  );
};
