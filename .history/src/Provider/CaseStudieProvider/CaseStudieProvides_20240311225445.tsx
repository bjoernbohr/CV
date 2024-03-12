import React, { createContext, useContext, useState } from 'react';

interface CaseStudyContextType {
  infoText: string;
  setInfoTextValue: (text: string) => void;
}

const CaseStudyContext = createContext<CaseStudyContextType | undefined>(undefined);

export const useInfoText = () => {
  const context = useContext(CaseStudyContext);
  if (!context) {
    throw new Error('useInfoText must be used within a CaseStudieContextProvider');
  }
  return context;
};

export const CaseStudyProvider = ({ children }: { children: React.ReactNode }) => {
  const [infoText, setInfoText] = useState('');

  const setInfoTextValue = (text: string) => {
    setInfoText(text);
  };

  return (
    <CaseStudyContext.Provider value={{ infoText, setInfoTextValue }}>
      {children}
    </CaseStudyContext.Provider>
  );
};
