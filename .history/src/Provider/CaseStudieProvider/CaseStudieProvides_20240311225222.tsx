import React, { createContext, useContext, useState } from 'react';

interface CaseStudieContextType {
  infoText: string;
  setInfoTextValue: (text: string) => void;
}

const CaseStudieContext = createContext<CaseStudieContextType | undefined>(undefined);

export const useInfoText = () => {
  const context = useContext(CaseStudieContext);
  if (!context) {
    throw new Error('useInfoText must be used within a CaseStudieContextProvider');
  }
  return context;
};

export const InfoTextProvider = ({ children }: { children: React.ReactNode }) => {
  const [infoText, setInfoText] = useState('');

  const setInfoTextValue = (text: string) => {
    setInfoText(text);
  };

  return (
    <CaseStudieContext.Provider value={{ infoText, setInfoTextValue }}>
      {children}
    </CaseStudieContext.Provider>
  );
};
