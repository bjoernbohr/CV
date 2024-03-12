import React, { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import CONTENT from '../../assets/content/work.json';

// Definieren Sie den Typ für das Objekt im Kontext
type SelectedObjectType = {
  ID: string;
  TITLE: string;
  SUB: string;
  INTRO: string;
  SOLUTION: string;
  IMG: string;
  URL: string;
};

// Erstellen Sie den Kontext
const SelectedObjectContext = createContext<SelectedObjectType | undefined>(undefined);

// Erstellen Sie einen Provider, um den ausgewählten Gegenstand bereitzustellen
export const SelectedObjectProvider: React.FC = ({ children }:any) => {
  const { id } = useParams<{ id: string }>(); 
  const index = "0" + id;
  const selectedObject = (CONTENT[0]?.INFO as { [key: string]: SelectedObjectType })[index];

  return (
    <SelectedObjectContext.Provider value={selectedObject}>
      {children}
    </SelectedObjectContext.Provider>
  );
};

// Hook, um auf den ausgewählten Gegenstand zuzugreifen
export const useSelectedObject = (): SelectedObjectType | undefined => useContext(SelectedObjectContext);
