import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [userData, setPosts] = useState({});

  return (
    <DataContext.Provider value={[userData, setPosts]}>
      {props.children}
    </DataContext.Provider>
  );
};
