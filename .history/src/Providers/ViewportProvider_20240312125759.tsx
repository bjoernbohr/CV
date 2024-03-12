import {createContext, useContext, useEffect, useState} from 'react';

const viewportContext = createContext<any>({});

export const ViewportProvider = ({children}:  any) => {

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};


export const UseViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
}
