import React, {createContext, ReactNode, useEffect} from 'react';

import Rellax from 'rellax';

export type RellaxContextType = {
  rellaxInstance: Rellax.Rellax | null;
};

export const RellaxContext = createContext<RellaxContextType>({
  rellaxInstance: null,
});

type RellaxProviderProps = {
  options?: Rellax.RellaxOptions;
  children: ReactNode,
  rellaxClass: string;
};


export const RellaxProvider: React.FC<RellaxProviderProps> = ({ rellaxClass,children, options }) => {
  useEffect(() => {
    const rellaxInstance = new Rellax(rellaxClass, options);
    return () => {
      rellaxInstance.destroy();
    };
  }, [options]);

  return (
    <RellaxContext.Provider value={{ rellaxInstance: null }}>
      {children}
    </RellaxContext.Provider>
  );
};
