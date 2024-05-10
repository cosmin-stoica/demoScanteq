// AppContext.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isValueInRange, setIsValueInRange] = useState(null);
  const [currentPostazione, setCurrentPostazione] = useState(null);
  const [workers, setWorkers] = useState([]);

  const destroyCurrentWorker = (workerId) => {
    setWorkers((prevWorkers) => {
      const updatedWorkers = prevWorkers.filter((worker) => {
        if (worker.id === workerId && worker.instance) {
          console.log(`Destroying worker ${worker.id}`);
          worker.instance.terminate();
          return false; // Remove the worker with the specified ID
        }
        return true;
      });

      return updatedWorkers;
    });
  };

  const getAllWorkers = () => {
    return workers;
  };

  return (
    <AppContext.Provider value={{
      isValueInRange,
      setIsValueInRange,
      currentPostazione,
      setCurrentPostazione,
      workers,
      setWorkers,
      destroyCurrentWorker,
      getAllWorkers,
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
