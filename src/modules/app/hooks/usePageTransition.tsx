import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (navigate: any, path: string) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      
      setIsTransitioning(false);
      setTimeout(() => {
        navigate(path);
      }, 500); 
    }, 0); 
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("usePageTransition debe usarse dentro de TransitionProvider");
  return context;
};