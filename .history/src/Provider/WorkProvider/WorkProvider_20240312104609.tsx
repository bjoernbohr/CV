import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json'; // Annahme: Die work.json-Datei befindet sich im selben Verzeichnis

// Annahme: Die work.json-Datei befindet sich im selben Verzeichnis
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

// Schritt 2: Provider-Komponente erstellen, um die Daten bereitzustellen
export const WorkProvider = ({ children }:any) => {
  // Konvertieren Sie die JSON-Daten, um nur das Objekt unter dem Schlüssel "INFO" zu erhalten
  const infoData = workData[0]?.INFO || {}; 

  return <WorkContext.Provider value={{ INFO: infoData }}>{children}</WorkContext.Provider>;
};

// Schritt 3: Hook erstellen, um auf die Daten zuzugreifen
export const useWorkData = () => {
  return useContext(WorkContext);
};
