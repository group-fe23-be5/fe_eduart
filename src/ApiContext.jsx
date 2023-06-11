import { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/artikel')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ApiContext.Provider value={articles}>{children}</ApiContext.Provider>
  );
};
