import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json';

interface CaseStudy {
  ID: number;
  TITLE: string;
  SUB: string;
  INTRO?: string;
  SOLUTION?: string;
  IMG?: string;
  URL?: string;
}

// Typdefinition für die gesamten Daten
interface WorkData {
  INFO: { [key: string]: CaseStudy };
}
interface WorkContextType {
  INFO: any;
}

const WorkContext = createContext<WorkContextType>({ INFO: [] });

export const WorkProvider = ({ children }: { children: React.ReactNode }) => {
  return <WorkContext.Provider value={{ INFO: workData }}>{children}</WorkContext.Provider>;
};

export const useWork = () => {
  return useContext(WorkContext);
};
