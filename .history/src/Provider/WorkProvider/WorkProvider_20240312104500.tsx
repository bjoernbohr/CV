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
}[];

const WorkContext = createContext<WorkDataType | null>(null);
// Schritt 1: Context erstellen


// Schritt 2: Provider-Komponente erstellen, um die Daten bereitzustellen
export const WorkProvider = ({ children }:any) => {
  return <WorkContext.Provider value={workData}>{children}</WorkContext.Provider>;
};

// Schritt 3: Hook erstellen, um auf die Daten zuzugreifen
export const useWorkData = () => {
  return useContext(WorkContext);
};
