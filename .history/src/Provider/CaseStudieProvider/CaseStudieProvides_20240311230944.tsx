import React, { createContext, useContext, useState, ReactNode } from 'react';
import CONTENT from '../../assets/content/work.json';

interface CaseStudyContextType {
  infoText?: string;
}

const CaseStudyContext = createContext<CaseStudyContextType | undefined>(undefined);

export const useCaseStudyContext = () => useContext(CaseStudyContext);

export const CaseStudyProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [infoText, setInfoText] = useState<string>('');

  const getInfoText = (title: string) => {
    console.log(CONTENT);	
    const data = CONTENT.INFO[title];
    if (data) {
      setInfoText(data.INTRO);
    }
  };

  return (
    <CaseStudyContext.Provider value={{ infoText }}>
      {children}
    </CaseStudyContext.Provider>
  );
};
