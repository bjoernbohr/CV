import React, { createContext, useContext } from 'react';
import  CONTENT  from '../assets/content/work.json';
import { useParams } from 'react-router-dom';

type SelectedObjectType = {
  ID: string;
  TITLE: string;
  SUB: string;
  INTRO: string;
  SOLUTION: string;
  IMG: string;
  URL: string;
};


const SelectedObjectContext = createContext<SelectedObjectType | undefined>(undefined);

export const SelectedObjectProvider: React.FC<{ id: string; children: React.ReactNode }> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const index = "0" + id;
  const selectedObject = (CONTENT[0]?.INFO as unknown as { [key: string]: SelectedObjectType })[index];


  return (
    <SelectedObjectContext.Provider value={selectedObject}>
      {children}
    </SelectedObjectContext.Provider>
  );
};

export const useSelectedObject = () =>  useContext(SelectedObjectContext);

