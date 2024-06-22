'use client';
import { createContext, ReactNode, useMemo, useState } from 'react';

interface NameContext {
  initialName: string;
  setInitialName: React.Dispatch<React.SetStateAction<string>>;
}

const initialNameContext: NameContext = {
  initialName: '',
  setInitialName: () => {},
};

export const NameContext = createContext(initialNameContext);

const NameProvider = ({ children }: { children: ReactNode }) => {
  const [inputName, setInputName] = useState('');

  const contextValue = useMemo(
    () => ({
      initialName: inputName,
      setInitialName: setInputName,
    }),
    [inputName],
  );

  return <NameContext.Provider value={contextValue}>{children}</NameContext.Provider>;
};

export default NameProvider;
