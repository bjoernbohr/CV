import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

export type Media = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string
  // Add other properties as needed
};

interface GetStorageProviderProps {
  children: ReactNode;
  StorageKey: string;
}

const StorageContext = createContext<Media[]>([]);

export const GetStorageProvider = ({ StorageKey, children }: GetStorageProviderProps) => {
  const [stored, setStored] = useState<Media[]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      if (localStorage.hasOwnProperty(StorageKey)) {
        const storedData = JSON.parse(localStorage.getItem(StorageKey) || "{}").data;
        setStored(storedData);
      }
    };

    getDataFromStorage().then();
  }, [StorageKey]);

  return (
    <StorageContext.Provider value={stored}>{children}</StorageContext.Provider>
  );
};

export const useGetStoredDataContext = () => useContext(StorageContext);
