import React, { createContext, useContext } from 'react';

// Define the type for the Info object
type InfoType = {
  [key: string]: {
    ID: string;
    TITLE: string;
    SUB: string;
    INTRO?: string;
    SOLUTION?: string;
    IMG: string;
    URL: string;
  };
};

// Define the type for the Content object
type ContentType = {
  INFO: InfoType;
};

// Create a context for the Content object
const WorkContext = createContext<ContentType | undefined>(undefined);

// Create a provider component
export const WorkProvider: React.FC<{ content: ContentType }> = ({ content, children }:any) => {
  return <WorkContext.Provider value={content}>{children}</WorkContext.Provider>;
};

// Custom hook to access the Content object
export const useWork = () => {
  const context = useContext(WorkContext);
  if (!context) {
    throw new Error('useWork must be used within a WorkProvider');
  }
  return context;
};