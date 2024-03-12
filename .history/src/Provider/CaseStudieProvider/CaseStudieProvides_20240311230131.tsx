import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CaseStudyContextType {
  intro?: string;
  solution?: string;
}

const CaseStudyContext = createContext<CaseStudyContextType | undefined>(undefined);

export const useCaseStudieContext = () => useContext(CaseStudyContext);

export const CaseStudyProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [intro, setIntro] = useState('');
  const [solution, setSolution] = useState('');

  return (
    <CaseStudyContext.Provider value={{ intro, solution }}>
      {children}
    </CaseStudyContext.Provider>
  );
};
