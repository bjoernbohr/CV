import React, { createContext, useContext, useState } from 'react';

interface CaseStudieContextType {
  intro: string;
  solution: string;
}

const CaseStudieContext = createContext<CaseStudieContextType | undefined>(undefined);

export const useCaseStudieContext = () => useContext(CaseStudieContext);

export const CaseStudieProvider: React.FC = ({ children }:any) => {
  const [intro, setIntro] = useState('');
  const [solution, setSolution] = useState('');

  return (
    <CaseStudieContext.Provider value={{ intro, solution }}>
      {children}
    </CaseStudieContext.Provider>
  );
};
