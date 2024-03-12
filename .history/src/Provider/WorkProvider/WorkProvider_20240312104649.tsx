import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json'; // Annahme: Die work.json-Datei befindet sich im selben Verzeichnis

type WorkDataType = {
  INFO: {
    [key: string]: {
      ID: number;
      TITLE: string;
      SUB: string;
      INTRO?: string;
      SOLUTION?: string;
      IMG: string;
      URL: string;
    };
  };
};

const WorkContext = createContext<WorkDataType | null>(null);

export const WorkProvider = ({ children }: any) => {
  // Umwandlung von "Id" in "ID" für jeden Eintrag
  const infoData: WorkDataType["INFO"] = {};
  for (const key in workData[0]?.INFO) {
    const entry = workData[0]?.INFO[key];
    infoData[key] = {
      ID: entry.ID,
      TITLE: entry.TITLE,
      SUB: entry.SUB,
      INTRO: entry.INTRO,
      SOLUTION: entry.SOLUTION,
      IMG: entry.IMG,
      URL: entry.URL,
    };
  }

  return <WorkContext.Provider value={{ INFO: infoData }}>{children}</WorkContext.Provider>;
};

export const useWorkData = () => {
  return useContext(WorkContext);
};
