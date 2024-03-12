import { createContext, useContext } from 'react';
import workData from '../../assets/content/work.json'; // Annahme: Die work.json-Datei befindet sich im selben Verzeichnis

// Schritt 1: Context erstellen
const WorkContext = createContext(0);


// Schritt 2: Provider-Komponente erstellen, um die Daten bereitzustellen
export const WorkProvider = ({ children }:any) => {
  return <WorkContext.Provider value={workData}>{children}</WorkContext.Provider>;
};

// Schritt 3: Hook erstellen, um auf die Daten zuzugreifen
export const useWorkData = () => {
  return useContext(WorkContext);
};
