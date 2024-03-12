import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json';

const WorkContext = createContext<any>(null);

export const WorkProvider = ({ children }:any) => {
  return <WorkContext.Provider value={workData}>{children}</WorkContext.Provider>;
};

export const useWork = () => {
  return useContext(WorkContext);
};