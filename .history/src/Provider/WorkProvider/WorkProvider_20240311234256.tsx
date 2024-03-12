import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json';

interface WorkInfo {
  ID: number;
  TITLE: string;
  SUB: string;
  INTRO?: string;
  SOLUTION?: string;
  IMG?: string;
  URL?: string;
}

interface WorkContextType {
  INFO: WorkInfo[];
}

const WorkContext = createContext<WorkContextType>({ INFO: [] });

export const WorkProvider = ({ children }: { children: React.ReactNode }) => {
  return <WorkContext.Provider value={{ INFO: workData }}>{children}</WorkContext.Provider>;
};

export const useWork = () => {
  return useContext(WorkContext);
};
