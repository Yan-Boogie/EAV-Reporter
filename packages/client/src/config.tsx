import {
  createContext, ReactNode, useState, useEffect,
} from 'react';

type IConfigContext = [string, React.Dispatch<React.SetStateAction<string>>] | null;

export const ConfigContext = createContext<IConfigContext>(null);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState(localStorage.getItem('config'));

  useEffect(() => {
    localStorage.setItem('config', config);
  }, [config]);

  return <ConfigContext.Provider value={[config, setConfig]}>{children}</ConfigContext.Provider>;
};
