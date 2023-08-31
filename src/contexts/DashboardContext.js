import { createContext, useContext, useRef } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const dashboardRef = useRef(null);

  return (
    <DashboardContext.Provider value={dashboardRef}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardRef = () => useContext(DashboardContext);
