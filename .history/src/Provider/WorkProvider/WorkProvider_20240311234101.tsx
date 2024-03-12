import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json';

// Hier füge einen leeren Standardwert hinzu
const WorkContext = createContext<any[]>([]);

export const WorkProvider = ({ children }: { children: React.ReactNode }) => {
  return <WorkContext.Provider value={workData}>{children}</WorkContext.Provider>;
};

export const useWork = () => {
  return useContext(WorkContext);
};
